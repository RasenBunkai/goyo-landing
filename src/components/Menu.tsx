import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsApp } from "@/components/ui/whatsapp";

const WA_PHONE = "525500000000";

const favorites = [
  {
    id: "torta-goyo",
    name: "TORTA GOYO",
    description: "Pierna, jamón y queso Oaxaca.",
    price: 100,
    popular: true,
    image:
      "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "torta-cubana",
    name: "TORTA CUBANA",
    description: "Pierna, jamón, bistec y chorizo.",
    price: 115,
    popular: true,
    image:
      "https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "hamburguesa-goyo",
    name: "HAMBURGUESA GOYO",
    description: "Carne, queso americano y papas.",
    price: 75,
    popular: true,
    image:
      "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "papas-queso",
    name: "PAPAS CON QUESO",
    description: "Papas fritas con queso amarillo.",
    price: 100,
    image:
      "https://images.pexels.com/photos/1893566/pexels-photo-1893566.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "agua-horchata",
    name: "HORCHATA",
    description: "Agua fresca tradicional.",
    price: 50,
    image:
      "https://images.pexels.com/photos/6542654/pexels-photo-6542654.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "licuado-fresa",
    name: "LICUADO DE FRESA",
    description: "Fresa natural con leche.",
    price: 80,
    image:
      "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function buildWhatsAppLink(item: { name: string; price: number }) {
  const text = encodeURIComponent(
    `Hola, quiero pedir:\n- 1x ${item.name} ($${item.price})\n¿Está disponible?`,
  );
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}

export default function Menu() {
  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-7xl lg:text-7xl tracking-wide">
            Favoritos de <span className="text-primary">Tortas Goyo</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Los platillos más pedidos por nuestros clientes.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorites.map((item) => (
            <Card
              key={item.id}
              className="group h-full overflow-hidden rounded-2xl border border-border/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-border"
            >
              <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                {item.popular && (
                  <Badge className="absolute left-3 top-3 bg-accent text-primary-foreground shadow-sm">
                    Popular
                  </Badge>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/70 to-transparent" />
              </div>

              {/* Body */}
              <div className="flex h-full flex-col">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold leading-tight text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-accent whitespace-nowrap">
                      ${item.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto p-5 pt-0">
                  <Button asChild className="w-full rounded-full bg-green-600 hover:bg-green-700 transition-colors hover:shadow-lg">
                    <a
                      href={buildWhatsAppLink(item)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsApp className="mr-2 size-4" />
                      Pedir por WhatsApp
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="/menu">Ver menú completo</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
