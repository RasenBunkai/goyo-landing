import type * as React from "react";
import {
  UtensilsCrossed,
  Star,
  Sandwich,
  CupSoda,
  Milk,
  Sparkles,
  Timer,
  MapPin,
} from "lucide-react";
import Aguas from "@/assets/menu/Aguas.png";
import Hamburguesa from "@/assets/menu/Hamburguesa.png";
import Licuados from "@/assets/menu/Licuados.png";
import TortasEspeciales from "@/assets/menu/TortasEspeciales.png";
import TortasSencillas from "@/assets/menu/TortasSencillas.png";

export const categoryImages: Record<CategoryId, { src: string; alt: string }> =
  {
    hamburguesas: { src: Hamburguesa.src, alt: "Hamburguesas" },
    especiales: { src: TortasEspeciales.src, alt: "Tortas especiales" },
    sencillas: { src: TortasSencillas.src, alt: "Tortas sencillas" },
    aguas: { src: Aguas.src, alt: "Aguas frescas" },
    licuados: { src: Licuados.src, alt: "Licuados" },
  };

export type CategoryId =
  | "hamburguesas"
  | "especiales"
  | "sencillas"
  | "aguas"
  | "licuados";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export const WA_PHONE = "525500000000";

export const categories: Array<{
  id: CategoryId;
  name: string;
  Icon: React.ElementType;
}> = [
  { id: "hamburguesas", name: "Hamburguesas", Icon: UtensilsCrossed },
  { id: "especiales", name: "Especiales", Icon: Star },
  { id: "sencillas", name: "Sencillas", Icon: Sandwich },
  { id: "aguas", name: "Aguas Frescas", Icon: CupSoda },
  { id: "licuados", name: "Licuados", Icon: Milk },
];

export const promos = [
  {
    badge: "Promo",
    title: "Delivery disponible",
    description: "Pide por WhatsApp y te confirmamos cobertura y tiempos.",
    Icon: Timer,
  },
  {
    badge: "Recomendado",
    title: "Especiales más pedidos",
    description: "Explora nuestra categoría de Especiales.",
    Icon: Sparkles,
  },
  {
    badge: "Sucursales",
    title: "Encuentra la más cercana",
    description: "Ubicaciones y teléfonos por sucursal.",
    Icon: MapPin,
  },
] as const;

export const menuData: Record<CategoryId, MenuItem[]> = {
  hamburguesas: [
    {
      name: "Orden De Papas Goyo",
      description: "Deliciosas papas fritas estilo Goyo",
      price: 90,
    },
    {
      name: "Hamburguesa Goyo Normal Con Papas",
      description: "Hamburguesa clásica con papas fritas",
      price: 75,
    },
    {
      name: "Hamburguesa Goyo Hawaiana Con Papas",
      description: "Hamburguesa con piña y papas fritas",
      price: 80,
    },
    {
      name: "Hamburguesa Goyo De Milanesa Con Papas",
      description: "Hamburguesa con milanesa y papas fritas",
      price: 80,
    },
    {
      name: "Hamburguesa Goyo De Pierna Con Papas",
      description: "Hamburguesa con pierna de cerdo y papas fritas",
      price: 80,
    },
    {
      name: "Orden De Papas Goyo Con Queso Amarillo",
      description: "Papas fritas cubiertas con queso amarillo derretido",
      price: 100,
    },
  ],

  especiales: [
    {
      name: "Torta Goyo De Salchicha",
      description: "Salchicha, Jamón y Queso",
      price: 100,
    },
    {
      name: "Torta Goyo De Chorizo",
      description: "Chorizo, Jamón y Queso Oaxaca",
      price: 100,
    },
    {
      name: "Torta Goyo",
      description: "Pierna, Jamón y Queso Oaxaca",
      price: 100,
    },
    {
      name: "Torta Goyo De Bistec",
      description: "Bistec, Jamón y Queso Oaxaca",
      price: 100,
    },
    {
      name: "Torta Goyo De Champiñones",
      description: "Champiñones, Jamón y Queso",
      price: 100,
    },
    {
      name: "Torta Goyo Al Pastor",
      description: "Pastor, Queso Oaxaca y Piña",
      price: 100,
    },
    {
      name: "Orden De Tostadas Goyo De Pierna",
      description: "Tostadas crujientes con pierna de cerdo",
      price: 100,
    },
    {
      name: "Torta Goyo Con Piña",
      description: "Pierna, Jamón, Queso Oaxaca Y Piña",
      price: 110,
    },
    {
      name: "Torta Goyo De Bistec Con Piña",
      description: "Bistec, Jamón, Queso Oaxaca y Piña",
      price: 110,
    },
    {
      name: "Torta Goyo Vegetariana",
      description:
        "Champiñones, Lechuga, Pepino, Zanahoria, Cebolla Morada, Aguacate y Tomate",
      price: 110,
    },
    {
      name: "Torta Goyo Hawaiana",
      description: "Pierna, Jamón, Queso Oaxaca, Piña, y Pimiento Morrón",
      price: 115,
    },
    {
      name: "Torta Goyo Martell",
      description:
        "Pierna, Jamón, Queso Oaxaca, Queso Amarillo y Queso de Puerco",
      price: 115,
    },
    {
      name: "Torta Goyo Torito",
      description: "Champiñones, Jamón, Chorizo, Queso Oaxaca Y Piña",
      price: 115,
    },
    {
      name: "Torta Goyo Cancun",
      description: "Champiñones, Jamón, Salchicha, Queso Oaxaca Y Piña",
      price: 115,
    },
    {
      name: "Torta Goyo Mexicana",
      description:
        "Bistec, Chorizo, Queso Oaxaca, Tocino, Pimiento Morrón, Jalapeños y Queso Amarillo",
      price: 115,
    },
    {
      name: "Torta Goyo De Milanesa De Pollo",
      description: "Milanesa, Jamón y Queso",
      price: 115,
    },
    {
      name: "Torta Goyo Cubana",
      description: "Pierna, Jamón, Queso Oaxaca, Bistec y Chorizo",
      price: 115,
    },
    {
      name: "Torta Goyo Caribe",
      description:
        "Bistec, Milanesa, Chorizo, Queso Oaxaca, Queso Amarillo y Piña",
      price: 130,
    },
    {
      name: "Torta Goyo America",
      description:
        "Pierna, Milanesa, Jamón, Queso Oaxaca, Salchicha y Champiñones",
      price: 130,
    },
    {
      name: "Torta Super Goyo",
      description: "Pierna, Milanesa, Jamón, Queso Oaxaca, Salchicha y Piña",
      price: 130,
    },
    {
      name: "Torta Goyo Chiva",
      description: "Milanesa, Salchicha, Queso Oaxaca, Chorizo y Piña",
      price: 130,
    },
    {
      name: "Orden De Club Sandwich Goyo",
      description: "Pierna, Jamón y Queso Oaxaca",
      price: 150,
    },
    {
      name: "Torta Goyo Gigante",
      description:
        "Salchicha, Queso Oaxaca, Queso Amarillo, Piña, Tocino, Queso de Puerco, Huevo, Chorizo y Pierna",
      price: 150,
    },
  ],

  sencillas: [
    {
      name: "Torta De Jamón Y Queso",
      description: "Clásica torta con jamón y queso",
      price: 70,
    },
    {
      name: "Torta De Huevo Con Chorizo",
      description: "Huevo revuelto con chorizo",
      price: 70,
    },
    {
      name: "Torta De Huevo Con Jamón",
      description: "Huevo revuelto con jamón",
      price: 70,
    },
    {
      name: "Torta De Huevo Con Salchicha",
      description: "Huevo revuelto con salchicha",
      price: 70,
    },
    {
      name: "Torta De Pierna De Puerco",
      description: "Pierna de puerco jugosa",
      price: 75,
    },
    {
      name: "Torta De Bistec De Puerco",
      description: "Bistec de puerco a la plancha",
      price: 75,
    },
    {
      name: "Torta De Chorizo",
      description: "Chorizo mexicano tradicional",
      price: 75,
    },
    {
      name: "Torta De Salchicha",
      description: "Salchicha de la mejor calidad",
      price: 75,
    },
    {
      name: "Torta De Milanesa De Pollo",
      description: "Milanesa de pollo crujiente",
      price: 90,
    },
    {
      name: "Torta De Pierna Con Jamón",
      description: "Pierna de puerco con jamón",
      price: 90,
    },
    {
      name: "Torta De Pierna Con Queso De Puerco",
      description: "Pierna con queso de puerco",
      price: 90,
    },
    {
      name: "Torta De Bistec Con Queso Oaxaca",
      description: "Bistec con queso Oaxaca derretido",
      price: 90,
    },
    {
      name: "Torta De Bistec Con Chorizo",
      description: "Bistec combinado con chorizo",
      price: 90,
    },
    {
      name: "Torta De Bistec Con Jamón",
      description: "Bistec con jamón de calidad",
      price: 90,
    },
    {
      name: "Torta De Chorizo Con Queso",
      description: "Chorizo con queso derretido",
      price: 90,
    },
    {
      name: "Torta De Pierna Con Queso Oaxaca",
      description: "Pierna con queso Oaxaca",
      price: 90,
    },
    {
      name: "Torta De Milanesa De Pollo Con Queso Oaxaca",
      description: "Milanesa de pollo con queso Oaxaca",
      price: 110,
    },
  ],

  aguas: [
    { name: "Papaya", description: "Agua fresca natural de papaya", price: 50 },
    { name: "Melón", description: "Agua fresca natural de melón", price: 50 },
    { name: "Sandía", description: "Agua fresca natural de sandía", price: 50 },
    { name: "Piña", description: "Agua fresca natural de piña", price: 50 },
    { name: "Limonada", description: "Limonada fresca y natural", price: 50 },
    {
      name: "Naranja",
      description: "Agua fresca natural de naranja",
      price: 50,
    },
    { name: "Jamaica", description: "Agua de jamaica tradicional", price: 50 },
    { name: "Horchata", description: "Horchata cremosa con canela", price: 50 },
    { name: "Tamarindo", description: "Agua fresca de tamarindo", price: 50 },
    { name: "Mango", description: "Agua fresca natural de mango", price: 50 },
    {
      name: "Pepino",
      description: "Agua fresca refrescante de pepino",
      price: 50,
    },
    {
      name: "Refrescos Embotellados",
      description: "Variedad de refrescos embotellados",
      price: 30,
    },
    {
      name: "Limonada Con Mineral",
      description: "Limonada con agua mineral",
      price: 80,
    },
    {
      name: "Naranjada Con Mineral",
      description: "Naranjada con agua mineral",
      price: 80,
    },
    {
      name: "Refresco 2.5 Lts.",
      description: "Refresco familiar de 2.5 litros",
      price: 80,
    },
  ],

  licuados: [
    { name: "Papaya", description: "Licuado cremoso de papaya", price: 70 },
    { name: "Melón", description: "Licuado cremoso de melón", price: 70 },
    { name: "Plátano", description: "Licuado cremoso de plátano", price: 70 },
    { name: "Avena", description: "Licuado nutritivo de avena", price: 70 },
    {
      name: "Granola",
      description: "Licuado con granola crujiente",
      price: 70,
    },
    {
      name: "Chocomilk",
      description: "Licuado de chocolate con leche",
      price: 70,
    },
    { name: "Coco", description: "Licuado tropical de coco", price: 80 },
    { name: "Mamey", description: "Licuado cremoso de mamey", price: 80 },
    { name: "Fresa", description: "Licuado dulce de fresa", price: 80 },
    {
      name: "Rompope",
      description: "Licuado tradicional de rompope",
      price: 80,
    },
    {
      name: "Coctel De Frutas",
      description: "Especial con granola y yogurt",
      price: 80,
    },
  ],
};