import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Search } from "lucide-react";

import {
  WA_PHONE,
  categories,
  promos,
  menuData,
  type CategoryId,
  type MenuItem,
} from "@/data/menu";

function normalize(str: string) {
  return str.toLowerCase().trim();
}

function buildWhatsAppLink(payload: { categoryName: string; item: MenuItem }) {
  const text = encodeURIComponent(
    `Hola, quiero hacer un pedido:\n- 1x ${payload.item.name} ($${payload.item.price})\nCategoría: ${payload.categoryName}\n¿Está disponible?`,
  );
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}

export default function FullMenu() {
  const [activeCategory, setActiveCategory] =
    React.useState<CategoryId>("hamburguesas");
  const [searchTerm, setSearchTerm] = React.useState("");

  const activeCategoryMeta = categories.find((c) => c.id === activeCategory);
  const activeCategoryName = activeCategoryMeta?.name ?? "Menú";

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
  return (
    <section id="full-menu" className="bg-muted/30 py-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Menú <span className="text-primary">Completo</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explora por categoría o busca tu platillo.
          </p>
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
                  <div className="rounded-xl bg-primary/10 p-3">
                    <p.Icon className="h-5 w-5 text-primary" />
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
                      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                      data-[state=active]:border-primary"
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
                <div className="text-5xl mb-4">🔎</div>
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
                  const wa = buildWhatsAppLink({
                    categoryName: activeCategoryName,
                    item,
                  });
                  return (
                    <Card
                      key={`${activeCategory}-${idx}`}
                      className="rounded-2xl"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-base font-semibold leading-tight text-foreground">
                            {item.name}
                          </p>
                          <span className="text-xl font-bold text-primary whitespace-nowrap">
                            ${item.price}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
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
                  Escríbenos por WhatsApp y te atendemos rápido.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <a
                      href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
                        "Hola, quiero hacer un pedido. ¿Me compartes el menú y horarios?",
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="mr-2 size-5" />
                      Abrir WhatsApp
                    </a>
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
