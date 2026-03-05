import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock, Navigation, Truck, Star } from "lucide-react";

type Location = {
  id: number;
  name: string;
  address: string;
  phones: string[];
  hours: string;
  isMain?: boolean;
  mapsQuery: string;
};

const locations: Location[] = [
  {
    id: 1,
    name: "Matriz Tortas Goyo 1",
    address: "Av. Francisco I. Madero Supermanzana 70",
    phones: ["998 888 42 97", "998 888 46 69", "998 252 68 54"],
    hours: "9:00 AM – 11:00 PM",
    isMain: true,
    mapsQuery:
      "Tortas Goyo Av. Francisco I. Madero Supermanzana 70, 77535 Cancún, Q.R.",
  },
  {
    id: 2,
    name: "Tortas Goyo 2",
    address: "Calle Av. 137 Supermanzana 101 Manzana 96 Lote 17",
    phones: ["998 840 04 50", "998 208 70 15"],
    hours: "9:00 AM – 11:00 PM",
    mapsQuery:
      "Tortas Goyo Calle Av. 137 Supermanzana 101 Manzana 96 Lote 17, 77519 Cancún, Q.R.",
  },
  {
    id: 3,
    name: "Tortas Goyo 3",
    address: "Av. 50 Supermanzana 510 MZA 57 LTE 18, Cecilio Chi",
    phones: ["998 415 39 62", "998 252 10 59"],
    hours: "9:00 AM – 11:00 PM",
    mapsQuery:
      "Tortas Goyo Av. 50 Supermanzana 510 MZA 57 LTE 18, Cecilio Chi, Benito Juárez, 77534 Cancún, Q.R.",
  },
  {
    id: 4,
    name: "Tortas Goyo 4",
    address:
      "Av. 30 Nte. esq. Calle 86, Col. Luis Donaldo Colosio, Playa del Carmen",
    phones: ["984 859 48 59", "984 859 48 60"],
    hours: "11:00 AM – 12:00 AM",
    mapsQuery: "Tortas Goyo Luis Donaldo Colosio, 77728 Playa del Carmen, Q.R.",
  },
  {
    id: 5,
    name: "Tortas Goyo 5",
    address: "Region 76 Mza 44 Lote 31 Avenida Revolucion Ruta 7",
    phones: ["998 880 42 79", "998 843 12 83"],
    hours: "9:00 AM – 11:00 PM",
    mapsQuery: "Tortas Goyo Tortas Goyo C. 54 185, 77527 Cancún, Q.R.",
  },
];

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function mapsHref(query: string) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default function Locations() {
  const total = locations.length;
  const main = locations.find((l) => l.isMain);
  const hoursSample = main?.hours ?? "Consulta horarios";

  return (
    <section id="locations" className="py-20 bg-muted/30 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-7xl lg:text-7xl tracking-wide">
            Nuestras <span className="text-primary">Sucursales</span>
          </h1>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Elige la sucursal más cercana y contáctanos para hacer tu pedido.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <Card className="rounded-2xl">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="rounded-xl bg-accent/10 p-3">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Total de sucursales
                </p>
                <p className="text-2xl font-bold text-foreground">{total}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="rounded-xl bg-accent/10 p-3">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Horario (referencia)
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {hoursSample}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="rounded-xl bg-accent/10 p-3">
                <Truck className="size-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Delivery y atención en sucursal
                </p>
                <p className="text-2xl font-bold text-foreground">Disponible</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {locations.map((loc) => {
            const maps = mapsHref(loc.mapsQuery);

            return (
              <Card
                key={loc.id}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-border/60 bg-background",
                  "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-border",
                  loc.isMain ? "ring-1 ring-primary/15 border-primary/30" : "",
                ].join(" ")}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-foreground truncate">
                          {loc.name}
                        </h3>

                        {loc.isMain && (
                          <Badge className="rounded-full bg-accent text-accent-foreground hover:bg-accent">
                            <Star className="mr-1 h-3 w-3" />
                            Matriz
                          </Badge>
                        )}
                        <Badge
                          variant="secondary"
                          className="rounded-full bg-muted text-muted-foreground"
                        >
                          Sucursal #{loc.id}
                        </Badge>
                      </div>

                      <p className="mt-2 text-sm text-muted-foreground">
                        Delivery y atención en sucursal
                      </p>
                    </div>

                    {/* Hours chip */}
                    <div className="shrink-0 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5">
                      <span className="text-xs font-semibold text-yellow-600">
                        {loc.hours}
                      </span>
                    </div>
                  </div>

                  <Separator className="my-5 bg-accent/40" />

                  {/* Body blocks */}
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-lg bg-accent/10 p-2">
                          <MapPin className="h-4 w-4 text-accent" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            Dirección
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {loc.address}
                          </p>

                          <a
                            href={maps}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                          >
                            <Navigation className="h-4 w-4 -rotate-45" />
                            Abrir en Maps
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phones */}
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-lg bg-accent/10 p-2">
                          <Phone className="h-4 w-4 text-accent" />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground">
                            Teléfonos (delivery)
                          </p>

                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {loc.phones.map((p) => (
                              <a
                                key={p}
                                href={telHref(p)}
                                className="inline-flex items-center justify-between rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground hover:border-accent/30 hover:bg-accent/5 transition-colors"
                              >
                                <span className="font-medium">{p}</span>
                                <span className="text-xs text-muted-foreground">
                                  Llamar
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="w-full flex flex-col gap-3">
                    <Button
                      asChild
                      className="rounded-full w-full hover:bg-blue-700"
                    >
                      <a href={telHref(loc.phones[0])}>
                        <Phone className="mr-2 size-4" />
                        Llamar
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full w-full"
                    >
                      <a href={maps} target="_blank" rel="noreferrer">
                        <Navigation className="mr-2 h-4 w-4 -rotate-45" />
                        Maps
                      </a>
                    </Button>
                  </div>
                </CardFooter>

                {/* Accent strip (sutil) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/40 via-accent/50 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="mt-12">
          <Card className="rounded-2xl">
            <CardContent className="p-8 text-center">
              <h4 className="text-xl font-semibold text-foreground">
                ¿No sabes cuál sucursal te queda más cerca?
              </h4>
              <p className="mt-2 text-muted-foreground">
                Abre Maps, comparte tu ubicación y te guiamos.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="rounded-full bg-accent hover:bg-yellow-600"
                >
                  <a
                    href={mapsHref("Tortas Goyo")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Navigation className="mr-2 h-4 w-4 -rotate-45" />
                    Buscar en Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
