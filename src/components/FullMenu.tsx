import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MessageCircle,
  Search,
  UtensilsCrossed,
  Sandwich,
  Star,
  CupSoda,
  Milk,
  Sparkles,
  Timer,
  MapPin,
} from "lucide-react";

type CategoryId = "hamburguesas" | "especiales" | "sencillas" | "aguas" | "licuados";

type MenuItem = {
  name: string;
  description: string;
  price: number;
};

const WA_PHONE = "525500000000"; // número genérico (E.164)

const categories: Array<{ id: CategoryId; name: string; Icon: React.ElementType }> = [
  { id: "hamburguesas", name: "Hamburguesas", Icon: UtensilsCrossed },
  { id: "especiales", name: "Especiales", Icon: Star },
  { id: "sencillas", name: "Sencillas", Icon: Sandwich },
  { id: "aguas", name: "Aguas Frescas", Icon: CupSoda },
  { id: "licuados", name: "Licuados", Icon: Milk },
];

const promos = [
  {
    badge: "Promo",
    title: "Delivery disponible",
    description: "Pide por WhatsApp y te confirmamos cobertura y tiempos.",
    Icon: Timer,
  },
  {
    badge: "Recomendado",
    title: "Especiales más pedidos",
    description: "Explora nuestra categoría de Especiales (los favoritos).",
    Icon: Sparkles,
  },
  {
    badge: "Sucursales",
    title: "Encuentra la más cercana",
    description: "Ubicaciones y teléfonos por sucursal.",
    Icon: MapPin,
  },
] as const;

const menuData: Record<CategoryId, MenuItem[]> = {
  hamburguesas: [
    { name: "ORDEN DE PAPAS GOYO", description: "Deliciosas papas fritas estilo Goyo", price: 90 },
    { name: "HAMBURGUESA GOYO NORMAL CON PAPAS", description: "Hamburguesa clásica con papas fritas", price: 75 },
    { name: "HAMBURGUESA GOYO HAWAIANA CON PAPAS", description: "Hamburguesa con piña y papas fritas", price: 80 },
    { name: "HAMBURGUESA GOYO DE MILANESA CON PAPAS", description: "Hamburguesa con milanesa y papas fritas", price: 80 },
    { name: "HAMBURGUESA GOYO DE PIERNA CON PAPAS", description: "Hamburguesa con pierna de cerdo y papas fritas", price: 80 },
    { name: "ORDEN DE PAPAS GOYO CON QUESO AMARILLO", description: "Papas fritas cubiertas con queso amarillo derretido", price: 100 },
  ],
  especiales: [
    { name: "TORTA GOYO DE SALCHICHA", description: "Salchicha, Jamón y Queso", price: 100 },
    { name: "TORTA GOYO DE CHORIZO", description: "Chorizo, Jamón y Queso Oaxaca", price: 100 },
    { name: "TORTA GOYO", description: "Pierna, Jamón y Queso Oaxaca", price: 100 },
    { name: "TORTA GOYO DE BISTEC", description: "Bistec, Jamón y Queso Oaxaca", price: 100 },
    { name: "TORTA GOYO DE CHAMPIÑONES", description: "Champiñones, Jamón y Queso", price: 100 },
    { name: "TORTA GOYO AL PASTOR", description: "Pastor, Queso Oaxaca y Piña", price: 100 },
    { name: "ORDEN DE TOSTADAS GOYO DE PIERNA", description: "Tostadas crujientes con pierna de cerdo", price: 100 },
    { name: "TORTA GOYO CON PIÑA", description: "Pierna, Jamón, Queso Oaxaca Y Piña", price: 110 },
    { name: "TORTA GOYO DE BISTEC CON PIÑA", description: "Bistec, Jamón, Queso Oaxaca y Piña", price: 110 },
    {
      name: "TORTA GOYO VEGETARIANA",
      description: "Champiñones, Lechuga, Pepino, Zanahoria, Cebolla Morada, Aguacate y Tomate",
      price: 110,
    },
    { name: "TORTA GOYO HAWAIANA", description: "Pierna, Jamón, Queso Oaxaca, Piña, y Pimiento Morrón", price: 115 },
    { name: "TORTA GOYO MARTELL", description: "Pierna, Jamón, Queso Oaxaca, Queso Amarillo y Queso de Puerco", price: 115 },
    { name: "TORTA GOYO TORITO", description: "Champiñones, Jamón, Chorizo, Queso Oaxaca Y Piña", price: 115 },
    { name: "TORTA GOYO CANCUN", description: "Champiñones, Jamón, Salchicha, Queso Oaxaca Y Piña", price: 115 },
    {
      name: "TORTA GOYO MEXICANA",
      description: "Bistec, Chorizo, Queso Oaxaca, Tocino, Pimiento Morrón, Jalapeños y Queso Amarillo",
      price: 115,
    },
    { name: "TORTA GOYO DE MILANESA DE POLLO", description: "Milanesa, Jamón y Queso", price: 115 },
    { name: "TORTA GOYO CUBANA", description: "Pierna, Jamón, Queso Oaxaca, Bistec y Chorizo", price: 115 },
    { name: "TORTA GOYO CARIBE", description: "Bistec, Milanesa, Chorizo, Queso Oaxaca, Queso Amarillo y Piña", price: 130 },
    { name: "TORTA GOYO AMERICA", description: "Pierna, Milanesa, Jamón, Queso Oaxaca, Salchicha y Champiñones", price: 130 },
    { name: "TORTA SUPER GOYO", description: "Pierna, Milanesa, Jamón, Queso Oaxaca, Salchicha y Piña", price: 130 },
    { name: "TORTA GOYO CHIVA", description: "Milanesa, Salchicha, Queso Oaxaca, Chorizo y Piña", price: 130 },
    { name: "ORDEN DE CLUB SANDWICH GOYO", description: "Pierna, Jamón y Queso Oaxaca", price: 150 },
    {
      name: "TORTA GOYO GIGANTE",
      description:
        "Salchicha, Queso Oaxaca, Queso Amarillo, Piña, Tocino, Queso de Puerco, Huevo, Chorizo y Pierna",
      price: 150,
    },
  ],
  sencillas: [
    { name: "TORTA DE JAMÓN Y QUESO", description: "Clásica torta con jamón y queso", price: 70 },
    { name: "TORTA DE HUEVO CON CHORIZO", description: "Huevo revuelto con chorizo", price: 70 },
    { name: "TORTA DE HUEVO CON JAMÓN", description: "Huevo revuelto con jamón", price: 70 },
    { name: "TORTA DE HUEVO CON SALCHICHA", description: "Huevo revuelto con salchicha", price: 70 },
    { name: "TORTA DE PIERNA DE PUERCO", description: "Pierna de puerco jugosa", price: 75 },
    { name: "TORTA DE BISTEC DE PUERCO", description: "Bistec de puerco a la plancha", price: 75 },
    { name: "TORTA DE CHORIZO", description: "Chorizo mexicano tradicional", price: 75 },
    { name: "TORTA DE SALCHICHA", description: "Salchicha de la mejor calidad", price: 75 },
    { name: "TORTA DE MILANESA DE POLLO", description: "Milanesa de pollo crujiente", price: 90 },
    { name: "TORTA DE PIERNA CON JAMÓN", description: "Pierna de puerco con jamón", price: 90 },
    { name: "TORTA DE PIERNA CON QUESO DE PUERCO", description: "Pierna con queso de puerco", price: 90 },
    { name: "TORTA DE BISTEC CON QUESO OAXACA", description: "Bistec con queso Oaxaca derretido", price: 90 },
    { name: "TORTA DE BISTEC CON CHORIZO", description: "Bistec combinado con chorizo", price: 90 },
    { name: "TORTA DE BISTEC CON JAMÓN", description: "Bistec con jamón de calidad", price: 90 },
    { name: "TORTA DE CHORIZO CON QUESO", description: "Chorizo con queso derretido", price: 90 },
    { name: "TORTA DE PIERNA CON QUESO OAXACA", description: "Pierna con queso Oaxaca", price: 90 },
    { name: "TORTA DE MILANESA DE POLLO CON QUESO OAXACA", description: "Milanesa de pollo con queso Oaxaca", price: 110 },
  ],
  aguas: [
    { name: "PAPAYA", description: "Agua fresca natural de papaya", price: 50 },
    { name: "MELÓN", description: "Agua fresca natural de melón", price: 50 },
    { name: "SANDÍA", description: "Agua fresca natural de sandía", price: 50 },
    { name: "PIÑA", description: "Agua fresca natural de piña", price: 50 },
    { name: "LIMONADA", description: "Limonada fresca y natural", price: 50 },
    { name: "NARANJA", description: "Agua fresca natural de naranja", price: 50 },
    { name: "JAMAICA", description: "Agua de jamaica tradicional", price: 50 },
    { name: "HORCHATA", description: "Horchata cremosa con canela", price: 50 },
    { name: "TAMARINDO", description: "Agua fresca de tamarindo", price: 50 },
    { name: "MANGO", description: "Agua fresca natural de mango", price: 50 },
    { name: "PEPINO", description: "Agua fresca refrescante de pepino", price: 50 },
    { name: "REFRESCOS EMBOTELLADOS", description: "Variedad de refrescos embotellados", price: 30 },
    { name: "LIMONADA CON MINERAL", description: "Limonada con agua mineral", price: 80 },
    { name: "NARANJADA CON MINERAL", description: "Naranjada con agua mineral", price: 80 },
    { name: "REFRESCO 2.5 LTS.", description: "Refresco familiar de 2.5 litros", price: 80 },
  ],
  licuados: [
    { name: "PAPAYA", description: "Licuado cremoso de papaya", price: 70 },
    { name: "MELÓN", description: "Licuado cremoso de melón", price: 70 },
    { name: "PLÁTANO", description: "Licuado cremoso de plátano", price: 70 },
    { name: "AVENA", description: "Licuado nutritivo de avena", price: 70 },
    { name: "GRANOLA", description: "Licuado con granola crujiente", price: 70 },
    { name: "CHOCOMILK", description: "Licuado de chocolate con leche", price: 70 },
    { name: "COCO", description: "Licuado tropical de coco", price: 80 },
    { name: "MAMEY", description: "Licuado cremoso de mamey", price: 80 },
    { name: "FRESA", description: "Licuado dulce de fresa", price: 80 },
    { name: "ROMPOPE", description: "Licuado tradicional de rompope", price: 80 },
    { name: "COCTEL DE FRUTAS", description: "Especial con granola y yogurt", price: 80 },
    { name: "INGREDIENTES EXTRAS", description: "Agrega ingredientes adicionales a tu licuado", price: 15 },
  ],
};

function normalize(str: string) {
  return str.toLowerCase().trim();
}

function buildWhatsAppLink(payload: { categoryName: string; item: MenuItem }) {
  const text = encodeURIComponent(
    `Hola, quiero hacer un pedido:\n- 1x ${payload.item.name} ($${payload.item.price})\nCategoría: ${payload.categoryName}\n¿Está disponible?`
  );
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = React.useState<CategoryId>("hamburguesas");
  const [searchTerm, setSearchTerm] = React.useState("");

  const activeCategoryMeta = categories.find((c) => c.id === activeCategory);
  const activeCategoryName = activeCategoryMeta?.name ?? "Menú";

  const items = React.useMemo(() => {
    const list = menuData[activeCategory] ?? [];
    const q = normalize(searchTerm);
    if (!q) return list;

    return list.filter((item) => {
      return normalize(item.name).includes(q) || normalize(item.description).includes(q);
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="full-menu" className="bg-gray-50 py-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Menú <span className="text-orange-500">Completo</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explora por categoría o busca tu platillo.
          </p>
        </div>

        {/* Promo Banner (punto 1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {promos.map((p, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {p.badge}
                    </Badge>
                    <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                  </div>
                  <div className="rounded-xl bg-orange-50 p-3">
                    <p.Icon className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <div className="mx-auto max-w-xl mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar en el menú..."
              className="pl-9 rounded-full"
            />
          </div>
        </div>

        {/* Tabs con Lucide (punto 3) */}
        <Tabs
          value={activeCategory}
          onValueChange={(v) => setActiveCategory(v as CategoryId)}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="h-auto flex flex-wrap gap-2 bg-transparent">
              {categories.map((cat) => {
                const count = menuData[cat.id].length;
                const ActiveIcon = cat.Icon;

                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    <ActiveIcon className="mr-2 h-4 w-4" />
                    {cat.name}
                    <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-700">
                      {count}
                    </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">
                Categoría: <span className="font-semibold">{activeCategoryName}</span>
              </div>
              <div className="text-sm text-gray-600">
                Resultados: <span className="font-semibold">{items.length}</span>
              </div>
            </div>

            <Separator className="mb-6" />

            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔎</div>
                <h3 className="text-xl font-semibold text-gray-900">No se encontraron resultados</h3>
                <p className="mt-2 text-gray-600">Intenta con otro término de búsqueda.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, idx) => {
                  const wa = buildWhatsAppLink({ categoryName: activeCategoryName, item });

                  return (
                    <Card key={`${activeCategory}-${idx}`} className="rounded-2xl">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base font-semibold leading-tight text-gray-900">
                            {item.name}
                          </h3>
                          <span className="text-xl font-bold text-orange-500 whitespace-nowrap">
                            ${item.price}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>

                      <Separator />

                      <CardFooter className="p-5">
                        <Button asChild className="w-full rounded-full">
                          <a href={wa} target="_blank" rel="noreferrer">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Pedir por WhatsApp
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* CTA bottom */}
            <div className="mt-12">
              <div className="rounded-2xl border bg-white p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">¿Listo para ordenar?</h3>
                <p className="mt-2 text-gray-600">Escríbenos por WhatsApp y te atendemos rápido.</p>
                <div className="mt-6 flex justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <a
                      href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
                        "Hola, quiero hacer un pedido. ¿Me compartes el menú y horarios?"
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
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
