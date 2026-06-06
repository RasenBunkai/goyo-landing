import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MessageCircle,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import {
  WA_PHONE,
  categories,
  promos,
  menuData,
  categoryImages,
  type CategoryId,
  type MenuItem,
} from "@/data/menu";

function normalize(str: string) {
  return str.toLowerCase().trim();
}

type CartItem = MenuItem & {
  id: string;
  category: string;
  quantity: number;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

function getItemId(categoryId: CategoryId, item: MenuItem) {
  return `${categoryId}-${normalize(item.name).replace(/\s+/g, "-")}`;
}

export default function FullMenu() {
  const [activeCategory, setActiveCategory] =
    React.useState<CategoryId>("hamburguesas");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [notes, setNotes] = React.useState("");
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const activeCategoryMeta = categories.find((c) => c.id === activeCategory);
  const activeCategoryName = activeCategoryMeta?.name ?? "Menú";

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const items = React.useMemo(() => {
    const list = menuData[activeCategory] ?? [];
    const q = normalize(searchTerm);
    if (!q) return list;

    return list.filter((item) => {
      return (
        normalize(item.name).includes(q) ||
        normalize(item.description).includes(q)
      );
    });
  }, [activeCategory, searchTerm]);

  const addToCart = (item: MenuItem) => {
    const id = getItemId(activeCategory, item);

    setCart((current) => {
      const existing = current.find((cartItem) => cartItem.id === id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [
        ...current,
        {
          ...item,
          id,
          category: activeCategoryName,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== id);
      }

      return current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
    setNotes("");
  };

  const whatsappMessage = React.useMemo(() => {
    const lines = cart.map((item) => {
      const itemTotal = item.price * item.quantity;
      return `- ${item.quantity} x ${item.name} (${formatCurrency(
        item.price
      )} c/u) = ${formatCurrency(itemTotal)}`;
    });

    const noteBlock = notes.trim() ? `\n\nNotas: ${notes.trim()}` : "";

    return [
      "Hola, quiero hacer este pedido:",
      "",
      ...lines,
      "",
      `Total estimado: ${formatCurrency(cartTotal)}`,
      noteBlock,
    ].join("\n");
  }, [cart, cartTotal, notes]);

  const whatsappHref = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="full-menu" className="bg-muted/30 py-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-7xl lg:text-7xl tracking-wide">
            Menú <span className="text-primary">Completo</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explora por categoría o busca tu platillo.
          </p>
        </div>
        <div className="sticky top-4 z-30 mb-8 flex justify-end">
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                size="lg"
                className="rounded-full bg-primary px-5 shadow-lg hover:bg-primary/90"
              >
                <ShoppingCart className="size-5" />
                Carrito
                {cartCount > 0 && (
                  <Badge className="ml-1 bg-accent text-accent-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="text-2xl">Tu pedido</SheetTitle>
                <SheetDescription>
                  Revisa cantidades y envia el pedido por WhatsApp.
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-4">
                {cart.length === 0 ? (
                  <div className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-dashed border-border p-8 text-center">
                    <ShoppingCart className="mb-4 size-10 text-muted-foreground" />
                    <p className="text-sm font-semibold text-foreground">
                      Tu carrito esta vacio
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Agrega productos del menu para armar tu pedido.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-lg border border-border bg-background p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold leading-tight text-foreground">
                              {item.name}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {item.category} - {formatCurrency(item.price)} c/u
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            aria-label={`Quitar ${item.name}`}
                            onClick={() => updateQuantity(item.id, 0)}
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-full border border-border bg-muted/40">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              className="rounded-full"
                              aria-label={`Restar ${item.name}`}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="size-4" />
                            </Button>
                            <span className="min-w-10 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              className="rounded-full"
                              aria-label={`Sumar ${item.name}`}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="size-4" />
                            </Button>
                          </div>
                          <p className="font-semibold text-foreground">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="space-y-2">
                      <label
                        htmlFor="order-notes"
                        className="text-sm font-medium text-foreground"
                      >
                        Notas del pedido
                      </label>
                      <Textarea
                        id="order-notes"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        placeholder="Ej. sin cebolla, entregar en mostrador..."
                        className="min-h-24 resize-none bg-background"
                      />
                    </div>
                  </div>
                )}
              </div>

              <SheetFooter className="border-t border-border">
                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(cartTotal)}</span>
                </div>
                {cart.length > 0 ? (
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-5" />
                      Enviar por WhatsApp
                    </a>
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="lg"
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled
                  >
                    <MessageCircle className="size-5" />
                    Enviar por WhatsApp
                  </Button>
                )}
                {cart.length > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    className="rounded-full"
                    onClick={clearCart}
                  >
                    Vaciar carrito
                  </Button>
                )}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {promos.map((p) => (
            <Card key={p.title} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {p.badge}
                    </Badge>
                    <h3 className="text-base font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                  <div className="rounded-xl bg-accent/20 p-3">
                    <p.Icon className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto max-w-xl mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar en el menú..."
              className="pl-9 rounded-full border border-border bg-background focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        <Tabs
          value={activeCategory}
          onValueChange={(v) => setActiveCategory(v as CategoryId)}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="h-auto flex flex-wrap gap-2 bg-transparent p-0">
              {categories.map((cat) => {
                const count = menuData[cat.id].length;
                const ActiveIcon = cat.Icon;
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-full border border-border bg-background px-4 py-2
                      data-[state=active]:bg-accent data-[state=active]:text-accent-foreground
                      data-[state=active]:border-accent hover:bg-accent/50 hover:text-accent-foreground hover:cursor-pointer transition-colors"
                  >
                    <ActiveIcon className="mr-2 size-4" />
                    {cat.name}
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-muted text-muted-foreground"
                    >
                      {count}
                    </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          <TabsContent value={activeCategory} className="my-0">
            <Separator className="my-10 sm:mb-6 bg-accent/40" />
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-7xl mb-4 flex items-center justify-center">
                  <Search className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  No se encontraron resultados
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Intenta con otro término de búsqueda.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, idx) => {
                  const hero = categoryImages[activeCategory];
                  const itemId = getItemId(activeCategory, item);
                  const cartItem = cart.find(
                    (current) => current.id === itemId
                  );

                  return (
                    <Card
                      key={`${activeCategory}-${idx}`}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="relative">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                          <img
                            src={hero.src}
                            alt={hero.alt}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute right-3 bottom-3">
                          <div className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-yellow-900 shadow-sm">
                            ${item.price}
                          </div>
                        </div>
                      </div>
                      <CardContent className="pb-5 px-5">
                        <p className="text-lg font-semibold leading-tight text-foreground line-clamp-2">
                          {item.name}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </CardContent>
                      <CardFooter className="mt-auto px-5 pb-5 pt-0">
                        {cartItem ? (
                          <div className="flex w-full items-center justify-between gap-3">
                            <div className="flex items-center rounded-full border border-border bg-muted/40">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                className="rounded-full"
                                aria-label={`Restar ${item.name}`}
                                onClick={() =>
                                  updateQuantity(itemId, cartItem.quantity - 1)
                                }
                              >
                                <Minus className="size-4" />
                              </Button>
                              <span className="min-w-9 text-center text-sm font-semibold">
                                {cartItem.quantity}
                              </span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                className="rounded-full"
                                aria-label={`Sumar ${item.name}`}
                                onClick={() =>
                                  updateQuantity(itemId, cartItem.quantity + 1)
                                }
                              >
                                <Plus className="size-4" />
                              </Button>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              className="rounded-full"
                              onClick={() => setIsCartOpen(true)}
                            >
                              Ver carrito
                            </Button>
                          </div>
                        ) : (
                          <Button
                            type="button"
                            className="w-full rounded-full bg-primary hover:bg-primary/90"
                            onClick={() => addToCart(item)}
                          >
                            <Plus className="size-4" />
                            Agregar al carrito
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            )}
            <div className="mt-12">
              <div className="rounded-2xl border border-border bg-background p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground">
                  ¿Listo para ordenar?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Agrega tus productos al carrito y mandanos tu pedido por
                  WhatsApp.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button
                    type="button"
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent-dark transition-colors hover:shadow-lg"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingCart className="mr-2 size-5" />
                    Revisar carrito
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
