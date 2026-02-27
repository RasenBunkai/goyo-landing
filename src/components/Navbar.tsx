import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Phone, MapPin, MessageCircle } from "lucide-react";

type NavItem = { name: string; href: string };

const BRAND = "Tortas Goyo";
const PHONE_DISPLAY = "998 888 42 97";
const PHONE_TEL = "529988884297";
const MAPS_URL = "https://maps.app.goo.gl/e9rGKopNVDxNjG9N7";
const WA_TEXT_DEFAULT =
  "Hola, quiero hacer un pedido. ¿Me compartes el menú y horarios?";

const navItems: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Menú", href: "/menu" },
  { name: "Sucursales", href: "/sucursales" },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ pathname }: { pathname: string }) {
  const waLink = React.useMemo(() => {
    const text = encodeURIComponent(WA_TEXT_DEFAULT);
    return `https://wa.me/${PHONE_TEL}?text=${text}`;
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground font-bold">
            TG
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold text-foreground">
              {BRAND}
            </div>
            <div className="text-xs text-muted-foreground">Desde 1995</div>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          <a
            className="inline-flex items-center gap-2 hover:text-accent"
            href={`tel:${PHONE_TEL}`}
          >
            <Phone className="size-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-accent"
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin className="size-4" />
            Ver ubicación
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-accent/10 text-accent"
                  : "text-foreground hover:bg-accent/40",
              )}
            >
              {item.name}
            </a>
          ))}
          <Button
            asChild
            variant="brand" size="lg"
            className="ml-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href={waLink} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle>Tortas Goyo</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors mx-4",
                      isActive(item.href)
                        ? "bg-accent/10 text-accent"
                        : "hover:bg-accent/40",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <Separator className="my-6" />
              <div className="flex flex-col gap-3 text-sm">
                <a
                  className="inline-flex items-center gap-2 hover:text-accent px-4 text-muted-foreground transition-colors mx-4"
                  href={`tel:${PHONE_TEL}`}
                >
                  <Phone className="size-4" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:text-accent px-4 text-muted-foreground transition-colors mx-4"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="size-4" />
                  Ver ubicación
                </a>
                <Button
                  asChild
                  className="mt-2 rounded-full bg-accent hover:bg-accent/70 text-accent-foreground mx-4 flex items-center justify-center"
                >
                  <a href={waLink} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 size-4" />
                    Pedir por WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
