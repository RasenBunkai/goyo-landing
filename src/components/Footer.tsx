import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const FOOTER = {
  brand: "Tortas Goyo",
  tagline:
    "Comida rápida con sabor auténtico. Ingredientes frescos y porciones generosas.",
  year: new Date().getFullYear(),

  phonesDisplay: ["(55) 0000 0000", "(55) 1111 1111"],
  phonesTel: ["5500000000", "5511111111"],

  waPhoneE164: "525500000000",
  waText:
    "Hola, quiero hacer un pedido. ¿Me ayudas con disponibilidad y total?",

  address: "Av. Principal 123, Colonia Centro, Ciudad",
  mapsQuery: "Av. Principal 123, Colonia Centro, Ciudad",

  hours: "Lun – Dom: 9:00 AM – 11:00 PM",

  quickLinks: [
    { label: "Inicio", href: "/" },
    { label: "Menú", href: "/menu" },
    { label: "Sucursales", href: "/sucursales" },
    { label: "Contacto", href: "/#contact" },
  ],

  legalLinks: [
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos de Servicio", href: "/terminos" },
  ],
};

function waLink() {
  const text = encodeURIComponent(FOOTER.waText);
  return `https://wa.me/${FOOTER.waPhoneE164}?text=${text}`;
}

function mapsLink() {
  const q = encodeURIComponent(FOOTER.mapsQuery);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default function Footer() {
  const wa = waLink();
  const maps = mapsLink();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-bold">TG</span>
              </div>
              <div>
                <p className="text-lg font-semibold leading-none">
                  {FOOTER.brand}
                </p>
                <p className="text-xs text-background/70 mt-1">Desde 1995</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              {FOOTER.tagline}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-background/10 text-background border-background/10"
              >
                Pedido rápido
              </Badge>
              <Badge
                variant="secondary"
                className="bg-background/10 text-background border-background/10"
              >
                Sabor consistente
              </Badge>
              <Badge
                variant="secondary"
                className="bg-background/10 text-background border-background/10"
              >
                Delivery
              </Badge>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                <a href={wa} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                <a href={maps} target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Maps
                </a>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold mb-4">Enlaces</p>
            <ul className="space-y-2 text-sm">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold mb-4">Contacto</p>

            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <div className="space-y-1">
                  {FOOTER.phonesDisplay.map((p, idx) => (
                    <a
                      key={p}
                      href={`tel:${FOOTER.phonesTel[idx]}`}
                      className="block hover:text-primary transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {FOOTER.address}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5" />
                <span>{FOOTER.hours}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold mb-4">Legal</p>

            <ul className="space-y-2 text-sm">
              {FOOTER.legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-background/60 leading-relaxed">
              *Los tiempos de entrega pueden variar según zona y demanda.
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-background/60">
          <p>
            © {FOOTER.year} {FOOTER.brand}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-background/50">Hecho con</span>
            <span className="text-background/70">Astro + shadcn/ui</span>
          </div>
        </div>
      </div>
    </footer>
  );
}