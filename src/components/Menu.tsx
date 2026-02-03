import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageCircle } from "lucide-react";

const WA_PHONE = "525500000000"; // número genérico

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
    `Hola, quiero pedir:\n- 1x ${item.name} ($${item.price})\n¿Está disponible?`
  );
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Favoritos de <span className="text-orange-500">Tortas Goyo</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Los platillos más pedidos por nuestros clientes.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />

                {item.popular && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    Popular
                  </Badge>
                )}
              </div>

              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-xl font-bold text-orange-500">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>

              <Separator />

              <CardFooter className="p-5">
                <Button asChild className="w-full rounded-full">
                  <a
                    href={buildWhatsAppLink(item)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Pedir por WhatsApp
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="/menu">Ver menú completo</a>
          </Button>
        </div>
      </div>
    </section>
  );
}