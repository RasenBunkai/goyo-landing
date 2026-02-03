import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

type FooterProps = {
  brand?: string;
};

const FOOTER = {
  brand: "Tortas Goyo",
  tagline:
    "Comida rápida con sabor auténtico. Ingredientes frescos y porciones generosas.",
  year: new Date().getFullYear(),

  phonesDisplay: ["(55) 0000 0000", "(55) 1111 1111"],
  phonesTel: ["5500000000", "5511111111"],

  waPhoneE164: "525500000000",
  waText: "Hola, quiero hacer un pedido. ¿Me ayudas con disponibilidad y total?",

  address: "Av. Principal 123, Colonia Centro, Ciudad",
  mapsQuery: "Av. Principal 123, Colonia Centro, Ciudad",

  hours: "Lun – Dom: 9:00 AM – 11:00 PM",

  quickLinks: [
    { label: "Inicio", href: "/#home" },
    { label: "Menú", href: "/menu" },
    { label: "Sucursales", href: "/sucursales" },
    { label: "Contacto", href: "/#contact" },
  ],

  // Si aún no tienes estas páginas, déjalas como "#" o crea /legal/...
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

export default function Footer({ brand = FOOTER.brand }: FooterProps) {
  const wa = waLink();
  const maps = mapsLink();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <span className="font-bold">TG</span>
              </div>
              <div>
                <p className="text-lg font-semibold leading-none">{brand}</p>
                <p className="text-xs text-gray-400 mt-1">Desde 1995</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {FOOTER.tagline}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/10">
                Pedido rápido
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/10">
                Sabor consistente
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/10">
                Delivery
              </Badge>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild className="rounded-full">
                <a href={wa} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-gray-950">
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
                    className="text-gray-400 hover:text-orange-400 transition-colors"
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
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-orange-400 mt-0.5" />
                <div className="space-y-1">
                  {FOOTER.phonesDisplay.map((p, idx) => (
                    <a
                      key={p}
                      href={`tel:${FOOTER.phonesTel[idx]}`}
                      className="block hover:text-orange-400 transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-400 mt-0.5" />
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  {FOOTER.address}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-orange-400 mt-0.5" />
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
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-gray-500 leading-relaxed">
              *Los tiempos de entrega pueden variar según zona y demanda.
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            © {FOOTER.year} {brand}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Hecho con</span>
            <span className="text-gray-400">Astro + shadcn/ui</span>
          </div>
        </div>
      </div>
    </footer>
  );
}