import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

type ContactProps = {
  // Puedes pasar props si luego quieres hacerlo dinámico.
  showMap?: boolean;
};

const CONTACT = {
  phonesDisplay: ["(55) 0000 0000", "(55) 1111 1111"],
  phonesTel: ["5500000000", "5511111111"],
  waPhoneE164: "525500000000",
  waText: "Hola, quiero hacer un pedido. ¿Me compartes el menú y horarios?",
  address: "Av. Principal 123, Colonia Centro, Ciudad",
  // Un link simple a Google Maps (con query). Sustituye por el real.
  mapsQuery: "Av. Principal 123, Colonia Centro, Ciudad",
  hours: ["Lun – Dom: 9:00 AM – 11:00 PM", "Delivery hasta 10:30 PM"],
};

// Iframe (genérico) para maps embed. Cambia por el embed real cuando tengas URL.
const MAPS_IFRAME_SRC =
  "https://www.google.com/maps?q=Av.%20Principal%20123%20Colonia%20Centro%20Ciudad&output=embed";

function buildWhatsAppLink() {
  const text = encodeURIComponent(CONTACT.waText);
  return `https://wa.me/${CONTACT.waPhoneE164}?text=${text}`;
}

function buildMapsLink() {
  const q = encodeURIComponent(CONTACT.mapsQuery);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default function Contact({ showMap = true }: ContactProps) {
  const wa = buildWhatsAppLink();
  const maps = buildMapsLink();

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-blue-500">Contáctanos</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Haz tu pedido por WhatsApp, llámanos o visita tu sucursal.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Teléfono</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Llámanos para pedidos rápidos.
                    </p>

                    <div className="mt-4 flex flex-col gap-2">
                      {CONTACT.phonesDisplay.map((label, idx) => (
                        <div
                          key={label}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                        >
                          <a
                            href={`tel:${CONTACT.phonesTel[idx]}`}
                            className="text-sm font-medium text-gray-900 hover:text-blue-600"
                          >
                            {label}
                          </a>
                          <Button asChild variant="outline" className="rounded-full w-fit">
                            <a href={`tel:${CONTACT.phonesTel[idx]}`}>
                              Llamar
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Horarios</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Te atendemos todos los días.
                    </p>

                    <div className="mt-4 space-y-1">
                      {CONTACT.hours.map((h) => (
                        <p key={h} className="text-sm text-gray-700">
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Dirección</p>
                    <p className="mt-1 text-sm text-gray-700">{CONTACT.address}</p>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Button asChild className="rounded-full">
                        <a href={maps} target="_blank" rel="noreferrer">
                          <Navigation className="mr-2 h-4 w-4" />
                          Abrir en Maps
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="secondary"
                        className="rounded-full bg-white border"
                      >
                        <a href="/sucursales">
                          Ver sucursales
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-blue-200">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Pedidos por WhatsApp</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Envíanos tu pedido y te confirmamos disponibilidad y total.
                    </p>
                  </div>
                  <Button asChild size="lg" className="rounded-full">
                    <a href={wa} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <Separator className="my-5" />

                <p className="text-xs text-gray-500">
                  Sugerencia: Indica sucursal + platillos + cantidad.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                {showMap ? (
                  <div className="aspect-[16/10] bg-gray-200">
                    <iframe
                      src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.512226247525!2d-86.8384021!3d21.1718014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b6dc83396e7%3A0xa9079afb45113ce7!2sTortas%20Goyo!5e0!3m2!1ses-419!2smx!4v1770098783242!5m2!1ses-419!2smx"}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="h-10 w-10 text-gray-500 mx-auto mb-3" />
                      <p className="text-sm font-semibold text-gray-900">Mapa</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Mapa del restaurante.
                      </p>
                      <Button asChild className="mt-4 rounded-full">
                        <a href={maps} target="_blank" rel="noreferrer">
                          Abrir en Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-gray-900">
                  ¿Necesitas ayuda con tu pedido?
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  También puedes escribirnos: “Quiero X tortas + Y bebidas” y te
                  respondemos con el total.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="rounded-full">
                    <a href={wa} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Escribir por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href="/menu">Ver menú</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}