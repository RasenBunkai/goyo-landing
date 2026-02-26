import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Truck, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero/frontside-goyo.png";
const WA_PHONE = "529988884297";

export default function Hero() {
  const waLink = React.useMemo(() => {
    const text = encodeURIComponent(
      "Hola, quiero hacer un pedido. ¿Me compartes el menú y horarios?",
    );
    return `https://wa.me/${WA_PHONE}?text=${text}`;
  }, []);

  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 ">
        <img
          src={heroImg.src}
          alt="heroImage"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        <div className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_20%,rgba(255,255,255,0.14),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-20">
          <div className="w-full">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-white border-white/10"
              >
                Desde 1995
              </Badge>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-white border-white/10"
              >
                Ingredientes frescos
              </Badge>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-white border-white/10"
              >
                Atención rápida
              </Badge>
            </div>
            <div className="mt-6 max-w-3xl">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tortas Goyo
              </h1>
              <p className="mt-4 text-pretty text-lg text-white/85 sm:text-xl">
                Sabor auténtico, rápido y bien servido.
              </p>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
                Tortas, hamburguesas y bebidas hechas al momento con
                ingredientes frescos. Pide por WhatsApp o visita tu sucursal más
                cercana.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                <a href={waLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Pedir por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full bg-white/10 text-white hover:bg-white/15"
              >
                <a href="/menu">Ver menú</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-white/85" />
                  <div>
                    <p className="text-sm font-semibold text-white">Horario</p>
                    <p className="text-xs text-white/75">
                      Lun–Dom · 9:00–23:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-white/85" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Ubicaciones
                    </p>
                    <p className="text-xs text-white/75">5 sucursales</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-white/85" />
                  <div>
                    <p className="text-sm font-semibold text-white">Servicio</p>
                    <p className="text-xs text-white/75">Delivery disponible</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-white/60">
              Tip: Precios sujetos a cambio sin previo aviso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
