import * as React from "react";
import Navbar from "./Navbar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock, Navigation, MessageCircle, Star } from "lucide-react";

type Location = {
  id: number;
  name: string;
  address: string;
  phones: string[]; // con espacios, tal como lo quieres mostrar
  hours: string;
  isMain?: boolean;
  mapsQuery: string; // dirección para maps search
};

const WA_PHONE = "525500000000"; // genérico (E.164)

const locations: Location[] = [
  {
    id: 1,
    name: "Matriz Tortas Goyo 1",
    address: "Smza 70 Mza 7 Lote 19 Av. Francisco y Madero",
    phones: ["998 888 42 97", "998 888 46 69", "998 252 68 54"],
    hours: "9:00 AM – 11:00 PM",
    isMain: true,
    mapsQuery: "Smza 70 Mza 7 Lote 19 Av. Francisco y Madero",
  },
  {
    id: 2,
    name: "Tortas Goyo 2",
    address: "Región 101 Mza 96 Lote 17 Avenida 137",
    phones: ["998 840 04 50", "998 208 70 15"],
    hours: "9:00 AM – 11:00 PM",
    mapsQuery: "Region 101 Mza 96 Lote 17 Avenida 137",
  },
  {
    id: 3,
    name: "Tortas Goyo 3",
    address: "Reg 510 Mza 57 Lote 18 Avenida 50",
    phones: ["998 415 39 62", "998 252 10 59"],
    hours: "9:00 AM – 11:00 PM",
    mapsQuery: "Reg 510 Mza 57 Lote 18 Avenida 50",
  },
  {
    id: 4,
    name: "Tortas Goyo 4",
    address:
      "Av. 30 Nte. esq. Calle 86, Col. Luis Donaldo Colosio, Playa del Carmen",
    phones: ["984 859 48 59", "984 859 48 60"],
    hours: "11:00 AM – 12:00 AM",
    mapsQuery:
      "Av. 30 Nte esquina Calle 86, Luis Donaldo Colosio, Playa del Carmen",
  },
  {
    id: 5,
    name: "Tortas Goyo 5",
    address: "Región 76 Mza 44 Lote 31 No. 232 Avenida Revolución x Ruta 7",
    phones: ["998 880 42 79", "998 843 12 83"],
    hours: "9:00 AM – 11:00 PM",
    mapsQuery: "Region 76 Mza 44 Lote 31 Avenida Revolucion Ruta 7",
  },
];

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function mapsHref(query: string) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function waHref(locationName: string) {
  const text = encodeURIComponent(
    `Hola, quiero hacer un pedido.\nSucursal: ${locationName}\n¿Me apoyas con disponibilidad y tiempos?`
  );
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}

export default function Locations() {
  const total = locations.length;
  const main = locations.find((l) => l.isMain);
  const hoursSample = main?.hours ?? "Consulta horarios";

  return (
    <>
      {/* Navbar TSX */}
      <Navbar
        pathname="/sucursales"
        phoneDisplay="998 888 42 97"
        phoneTel="529988884297"
        mapsUrl="https://maps.app.goo.gl/e9rGKopNVDxNjG9N7"
      />

      <section id="locations" className="py-20 bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Sucursales
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nuestras <span className="text-orange-500">Sucursales</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Elige la sucursal más cercana y contáctanos para hacer tu pedido.
            </p>
          </div>

          {/* Stats (más útiles y sobrios) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Card className="rounded-2xl">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-xl bg-orange-50 p-3">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total de sucursales</p>
                  <p className="text-2xl font-bold text-gray-900">{total}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-xl bg-orange-50 p-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Horario (referencia)</p>
                  <p className="text-2xl font-bold text-gray-900">{hoursSample}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-xl bg-orange-50 p-3">
                  <MessageCircle className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pedidos por WhatsApp</p>
                  <p className="text-2xl font-bold text-gray-900">Disponible</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {locations.map((loc) => {
              const maps = mapsHref(loc.mapsQuery);
              const wa = waHref(loc.name);

              return (
                <Card
                  key={loc.id}
                  className={`rounded-2xl overflow-hidden ${
                    loc.isMain ? "border-orange-200" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {loc.name}
                          </h3>
                          {loc.isMain && (
                            <Badge className="rounded-full bg-orange-500 hover:bg-orange-500">
                              <Star className="mr-1 h-3 w-3" />
                              Matriz
                            </Badge>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-gray-600">Sucursal #{loc.id}</p>
                      </div>

                      <div className="rounded-xl bg-orange-50 px-3 py-2">
                        <span className="text-sm font-semibold text-orange-700">
                          {loc.hours}
                        </span>
                      </div>
                    </div>

                    <Separator className="my-5" />

                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-orange-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Dirección</p>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {loc.address}
                          </p>
                          <a
                            href={maps}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-orange-600 hover:text-orange-700"
                          >
                            <Navigation className="h-4 w-4 -rotate-45" />
                            Abrir en Maps
                          </a>
                        </div>
                      </div>

                      {/* Phones */}
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-orange-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            Teléfonos (delivery)
                          </p>

                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {loc.phones.map((p) => (
                              <a
                                key={p}
                                href={telHref(p)}
                                className="text-sm text-gray-700 hover:text-orange-600 transition-colors"
                              >
                                {p}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <div className="w-full flex flex-col sm:flex-row gap-3">
                      <Button asChild className="rounded-full w-full">
                        <a href={telHref(loc.phones[0])}>
                          <Phone className="mr-2 h-4 w-4" />
                          Llamar
                        </a>
                      </Button>

                      <Button asChild variant="outline" className="rounded-full w-full">
                        <a href={wa} target="_blank" rel="noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* CTA final */}
          <div className="mt-12">
            <Card className="rounded-2xl">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-gray-900">
                  ¿No sabes cuál sucursal te queda más cerca?
                </h4>
                <p className="mt-2 text-gray-600">
                  Abre Maps, comparte tu ubicación y te guiamos.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="rounded-full">
                    <a href={mapsHref("Tortas Goyo")} target="_blank" rel="noreferrer">
                      <Navigation className="mr-2 h-4 w-4 -rotate-45" />
                      Buscar en Maps
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={waHref("Sucursal más cercana")} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Pedir ayuda por WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}