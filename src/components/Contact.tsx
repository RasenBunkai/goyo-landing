import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

const CONTACT = {
  phonesDisplay: ["998 888 42 97", "998 888 46 69", "998 252 68 54"],
  phonesTel: ["9988884297", "9988884669", "9982526854"],
  address: "Av. Francisco y Madero Smza70 Mza 7 Lote 19",
  mapsQuery:
    "Tortas Goyo Av. Francisco I. Madero Supermanzana 70, 77535 Cancún, Q.R.",
  hours: ["Lun – Dom: 9:00 AM – 11:00 PM", "Delivery hasta 10:30 PM"],
};

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.512226247525!2d-86.8384021!3d21.1718014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b6dc83396e7%3A0xa9079afb45113ce7!2sTortas%20Goyo!5e0!3m2!1ses-419!2smx!4v1770098783242!5m2!1ses-419!2smx";


function buildMapsLink() {
  const q = encodeURIComponent(CONTACT.mapsQuery);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default function Contact() {
  const maps = buildMapsLink();

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-7xl lg:text-7xl tracking-wide text-foreground">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Haz tu pedido por WhatsApp, llámanos o visita tu sucursal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left column */}
          <div className="space-y-4">
            {/* Phone */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent/20 p-3">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Teléfono
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Contáctanos por teléfono para hacer tu pedido o resolver tus dudas.
                    </p>

                    <div className="mt-4 flex flex-col gap-2">
                      {CONTACT.phonesDisplay.map((label, idx) => (
                        <div
                          key={label}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                        >
                          <a
                            href={`tel:${CONTACT.phonesTel[idx]}`}
                            className="text-sm font-medium text-foreground hover:text-accent"
                          >
                            {label}
                          </a>
                          <Button
                            asChild
                            variant="outline"
                            className="rounded-full w-fit hover:text-yellow-700"
                          >
                            <a href={`tel:${CONTACT.phonesTel[idx]}`}>Llamar</a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent/20 p-3">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Horarios
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Te atendemos todos los días.
                    </p>

                    <div className="mt-4 space-y-1">
                      {CONTACT.hours.map((h) => (
                        <p key={h} className="text-sm text-foreground">
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent/20 p-3">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Dirección
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      {CONTACT.address}
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Button asChild className="rounded-full bg-accent hover:bg-yellow-600">
                        <a href={maps} target="_blank" rel="noreferrer">
                          <Navigation className="mr-2 size-4" />
                          Abrir en Maps
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="secondary"
                        className="rounded-full"
                      >
                        <a href="/sucursales">Ver sucursales</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Map */}
            <Card className="rounded-2xl border border-primary/20">
              <CardContent className="p-0">
                <div className="aspect-[16/10] bg-muted">
                  <iframe
                    src={MAPS_EMBED_SRC}
                    className="h-full w-full rounded-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
