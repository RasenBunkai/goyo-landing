import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Phone, MapPin, MessageCircle } from "lucide-react";

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Menú", href: "/menu" },
  { name: "Sucursales", href: "/sucursales" },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props: {
  pathname: string;
  phoneDisplay: string;      // "998 888 42 97"
  phoneTel: string;          // "529988884297"
  mapsUrl: string;           // link google maps
  waText?: string;           // mensaje precargado
}) {
  const { pathname, phoneDisplay, phoneTel, mapsUrl, waText } = props;

  const waLink = React.useMemo(() => {
    const text = encodeURIComponent(
      waText ?? "Hola, quiero hacer un pedido. ¿Me compartes el menú y horarios?"
    );
    return `https://wa.me/${phoneTel}?text=${text}`;
  }, [phoneTel, waText]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold">
            TG
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold text-gray-900">Tortas Goyo</div>
            <div className="text-xs text-gray-500">Desde 1995</div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
          <a className="inline-flex items-center gap-2 hover:text-orange-600" href={`tel:${phoneTel}`}>
            <Phone className="h-4 w-4" />
            {phoneDisplay}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-orange-600" href={mapsUrl} target="_blank" rel="noreferrer">
            <MapPin className="h-4 w-4" />
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
                  ? "bg-orange-50 text-orange-700"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.name}
            </a>
          ))}

          <Button asChild className="ml-2 rounded-full">
            <a href={waLink} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href) ? "bg-orange-50 text-orange-700" : "hover:bg-gray-100"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="flex flex-col gap-3 text-sm">
                <a className="inline-flex items-center gap-2 hover:text-orange-600" href={`tel:${phoneTel}`}>
                  <Phone className="h-4 w-4" />
                  {phoneDisplay}
                </a>
                <a className="inline-flex items-center gap-2 hover:text-orange-600" href={mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin className="h-4 w-4" />
                  Ver ubicación
                </a>

                <Button asChild className="mt-2 rounded-full">
                  <a href={waLink} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
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
