import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, HeartHandshake, Trophy, Users, Leaf } from "lucide-react";

type AboutProps = {
  imageUrl?: string; // imagen en /public, ej: "/images/about.jpg"
};

const highlights = [
  {
    Icon: Leaf,
    title: "Ingredientes frescos",
    body: "Selección diaria y preparación al momento.",
  },
  {
    Icon: HeartHandshake,
    title: "Sabor consistente",
    body: "Recetas y procesos estandarizados desde 1995.",
  },
  {
    Icon: Users,
    title: "Ideal para familias",
    body: "Porciones generosas y opciones para todos.",
  },
  {
    Icon: Trophy,
    title: "Experiencia real",
    body: "Décadas atendiendo a clientes locales.",
  },
];

const checklist = [
  "Tortas, hamburguesas y bebidas hechas al momento",
  "Porciones generosas y precios accesibles",
  "Atención rápida y pedidos por WhatsApp",
  "Sucursales con cobertura de delivery",
];

export default function About({
  imageUrl = "/src/assets/about/tortagoyo.webp",
}: AboutProps) {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-600/10 border-white/10 text-blue-600"
            >
              Nuestra historia
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Tradición, rapidez y{" "}
              <span className="text-blue-500">sabor auténtico</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Desde 1995, Tortas Goyo forma parte del día a día de nuestra
              comunidad. Iniciamos con recetas familiares y el objetivo claro:
              servir comida rica, rápida y consistente, sin sacrificar calidad.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Con el tiempo ampliamos el menú con hamburguesas y bebidas,
              manteniendo el mismo estándar: ingredientes frescos, porciones
              generosas y atención cercana.
            </p>

            <Separator className="my-6" />

            <ul className="space-y-3">
              {checklist.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-50">
                    <Check className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-sm text-gray-700">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="/sucursales">Ver sucursales</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <a href="/menu">Ver menú</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border bg-gray-100">
              <img
                src={imageUrl}
                alt="Restaurante"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ Icon, title, body }) => (
                <Card key={title} className="rounded-2xl">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-blue-50 p-3">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {title}
                        </p>
                        <p className="mt-1 text-xs text-gray-600">{body}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
