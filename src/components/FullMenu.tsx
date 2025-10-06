import React, {useState} from "react";
import {useCart} from "../context/CartContext";

const {addItem} = useCart();

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState("hamburguesas");
  const [searchTerm, setSearchTerm] = useState("");
  const {addItem} = useCart();

  const categories = [
    {id: "hamburguesas", name: "Hamburguesas", icon: "🍔"},
    {id: "especiales", name: "Especiales", icon: "⭐"},
    {id: "sencillas", name: "Sencillas", icon: "🥪"},
    {id: "aguas", name: "Aguas Frescas", icon: "🥤"},
    {id: "licuados", name: "Licuados", icon: "🥛"},
  ];

  const menuData = {
    hamburguesas: [
      {
        name: "ORDEN DE PAPAS GOYO",
        description: "Deliciosas papas fritas estilo Goyo",
        price: 90,
      },
      {
        name: "HAMBURGUESA GOYO NORMAL CON PAPAS",
        description: "Hamburguesa clásica con papas fritas",
        price: 75,
      },
      {
        name: "HAMBURGUESA GOYO HAWAIANA CON PAPAS",
        description: "Hamburguesa con piña y papas fritas",
        price: 80,
      },
      {
        name: "HAMBURGUESA GOYO DE MILANESA CON PAPAS",
        description: "Hamburguesa con milanesa y papas fritas",
        price: 80,
      },
      {
        name: "HAMBURGUESA GOYO DE PIERNA CON PAPAS",
        description: "Hamburguesa con pierna de cerdo y papas fritas",
        price: 80,
      },
      {
        name: "ORDEN DE PAPAS GOYO CON QUESO AMARILLO",
        description: "Papas fritas cubiertas con queso amarillo derretido",
        price: 100,
      },
    ],
    especiales: [
      {
        name: "TORTA GOYO DE SALCHICHA",
        description: "Salchicha, Jamón y Queso",
        price: 100,
      },
      {
        name: "TORTA GOYO DE CHORIZO",
        description: "Chorizo, Jamón y Queso Oaxaca",
        price: 100,
      },
      {
        name: "TORTA GOYO",
        description: "Pierna, Jamón y Queso Oaxaca",
        price: 100,
      },
      {
        name: "TORTA GOYO DE BISTEC",
        description: "Bistec, Jamón y Queso Oaxaca",
        price: 100,
      },
      {
        name: "TORTA GOYO DE CHAMPIÑONES",
        description: "Champiñones, Jamón y Queso",
        price: 100,
      },
      {
        name: "TORTA GOYO AL PASTOR",
        description: "Pastor, Queso Oaxaca y Piña",
        price: 100,
      },
      {
        name: "ORDEN DE TOSTADAS GOYO DE PIERNA",
        description: "Tostadas crujientes con pierna de cerdo",
        price: 100,
      },
      {
        name: "TORTA GOYO CON PIÑA",
        description: "Pierna, Jamón, Queso Oaxaca Y Piña",
        price: 110,
      },
      {
        name: "TORTA GOYO DE BISTEC CON PIÑA",
        description: "Bistec, Jamón, Queso Oaxaca y Piña",
        price: 110,
      },
      {
        name: "TORTA GOYO VEGETARIANA",
        description:
          "Champiñones, Lechuga, Pepino, Zanahoria, Cebolla Morada, Aguacate y Tomate",
        price: 110,
      },
      {
        name: "TORTA GOYO HAWAIANA",
        description: "Pierna, Jamón, Queso Oaxaca, Piña, y Pimiento Morrón",
        price: 115,
      },
      {
        name: "TORTA GOYO MARTELL",
        description:
          "Pierna, Jamón, Queso Oaxaca, Queso Amarillo y Queso de Puerco",
        price: 115,
      },
      {
        name: "TORTA GOYO TORITO",
        description: "Champiñones, Jamón, Chorizo, Queso Oaxaca Y Piña",
        price: 115,
      },
      {
        name: "TORTA GOYO CANCUN",
        description: "Champiñones, Jamón, Salchicha, Queso Oaxaca Y Piña",
        price: 115,
      },
      {
        name: "TORTA GOYO MEXICANA",
        description:
          "Bistec, Chorizo, Queso Oaxaca, Tocino, Pimiento Morrón, Jalapeños y Queso Amarillo",
        price: 115,
      },
      {
        name: "TORTA GOYO DE MILANESA DE POLLO",
        description: "Milanesa, Jamón y Queso",
        price: 115,
      },
      {
        name: "TORTA GOYO CUBANA",
        description: "Pierna, Jamón, Queso Oaxaca, Bistec y Chorizo",
        price: 115,
      },
      {
        name: "TORTA GOYO CARIBE",
        description:
          "Bistec, Milanesa, Chorizo, Queso Oaxaca, Queso Amarillo y Piña",
        price: 130,
      },
      {
        name: "TORTA GOYO AMERICA",
        description:
          "Pierna, Milanesa, Jamón, Queso Oaxaca, Salchicha y Champiñones",
        price: 130,
      },
      {
        name: "TORTA SUPER GOYO",
        description: "Pierna, Milanesa, Jamón, Queso Oaxaca, Salchicha y Piña",
        price: 130,
      },
      {
        name: "TORTA GOYO CHIVA",
        description: "Milanesa, Salchicha, Queso Oaxaca, Chorizo y Piña",
        price: 130,
      },
      {
        name: "ORDEN DE CLUB SANDWICH GOYO",
        description: "Pierna, Jamón y Queso Oaxaca",
        price: 150,
      },
      {
        name: "TORTA GOYO GIGANTE",
        description:
          "Salchicha, Queso Oaxaca, Queso Amarillo, Piña, Tocino, Queso de Puerco, Huevo, Chorizo y Pierna",
        price: 150,
      },
    ],
    sencillas: [
      {
        name: "TORTA DE JAMÓN Y QUESO",
        description: "Clásica torta con jamón y queso",
        price: 70,
      },
      {
        name: "TORTA DE HUEVO CON CHORIZO",
        description: "Huevo revuelto con chorizo",
        price: 70,
      },
      {
        name: "TORTA DE HUEVO CON JAMÓN",
        description: "Huevo revuelto con jamón",
        price: 70,
      },
      {
        name: "TORTA DE HUEVO CON SALCHICHA",
        description: "Huevo revuelto con salchicha",
        price: 70,
      },
      {
        name: "TORTA DE PIERNA DE PUERCO",
        description: "Pierna de puerco jugosa",
        price: 75,
      },
      {
        name: "TORTA DE BISTEC DE PUERCO",
        description: "Bistec de puerco a la plancha",
        price: 75,
      },
      {
        name: "TORTA DE CHORIZO",
        description: "Chorizo mexicano tradicional",
        price: 75,
      },
      {
        name: "TORTA DE SALCHICHA",
        description: "Salchicha de la mejor calidad",
        price: 75,
      },
      {
        name: "TORTA DE MILANESA DE POLLO",
        description: "Milanesa de pollo crujiente",
        price: 90,
      },
      {
        name: "TORTA DE PIERNA CON JAMÓN",
        description: "Pierna de puerco con jamón",
        price: 90,
      },
      {
        name: "TORTA DE PIERNA CON QUESO DE PUERCO",
        description: "Pierna con queso de puerco",
        price: 90,
      },
      {
        name: "TORTA DE BISTEC CON QUESO OAXACA",
        description: "Bistec con queso Oaxaca derretido",
        price: 90,
      },
      {
        name: "TORTA DE BISTEC CON CHORIZO",
        description: "Bistec combinado con chorizo",
        price: 90,
      },
      {
        name: "TORTA DE BISTEC CON JAMÓN",
        description: "Bistec con jamón de calidad",
        price: 90,
      },
      {
        name: "TORTA DE CHORIZO CON QUESO",
        description: "Chorizo con queso derretido",
        price: 90,
      },
      {
        name: "TORTA DE PIERNA CON QUESO OAXACA",
        description: "Pierna con queso Oaxaca",
        price: 90,
      },
      {
        name: "TORTA DE MILANESA DE POLLO CON QUESO OAXACA",
        description: "Milanesa de pollo con queso Oaxaca",
        price: 110,
      },
    ],
    aguas: [
      {
        name: "PAPAYA",
        description: "Agua fresca natural de papaya",
        price: 50,
      },
      {
        name: "MELÓN",
        description: "Agua fresca natural de melón",
        price: 50,
      },
      {
        name: "SANDÍA",
        description: "Agua fresca natural de sandía",
        price: 50,
      },
      {
        name: "PIÑA",
        description: "Agua fresca natural de piña",
        price: 50,
      },
      {
        name: "LIMONADA",
        description: "Limonada fresca y natural",
        price: 50,
      },
      {
        name: "NARANJA",
        description: "Agua fresca natural de naranja",
        price: 50,
      },
      {
        name: "JAMAICA",
        description: "Agua de jamaica tradicional",
        price: 50,
      },
      {
        name: "HORCHATA",
        description: "Horchata cremosa con canela",
        price: 50,
      },
      {
        name: "TAMARINDO",
        description: "Agua fresca de tamarindo",
        price: 50,
      },
      {
        name: "MANGO",
        description: "Agua fresca natural de mango",
        price: 50,
      },
      {
        name: "PEPINO",
        description: "Agua fresca refrescante de pepino",
        price: 50,
      },
      {
        name: "REFRESCOS EMBOTELLADOS",
        description: "Variedad de refrescos embotellados",
        price: 30,
      },
      {
        name: "LIMONADA CON MINERAL",
        description: "Limonada con agua mineral",
        price: 80,
      },
      {
        name: "NARANJADA CON MINERAL",
        description: "Naranjada con agua mineral",
        price: 80,
      },
      {
        name: "REFRESCO 2.5 LTS.",
        description: "Refresco familiar de 2.5 litros",
        price: 80,
      },
    ],
    licuados: [
      {
        name: "PAPAYA",
        description: "Licuado cremoso de papaya",
        price: 70,
      },
      {
        name: "MELÓN",
        description: "Licuado cremoso de melón",
        price: 70,
      },
      {
        name: "PLÁTANO",
        description: "Licuado cremoso de plátano",
        price: 70,
      },
      {
        name: "AVENA",
        description: "Licuado nutritivo de avena",
        price: 70,
      },
      {
        name: "GRANOLA",
        description: "Licuado con granola crujiente",
        price: 70,
      },
      {
        name: "CHOCOMILK",
        description: "Licuado de chocolate con leche",
        price: 70,
      },
      {
        name: "COCO",
        description: "Licuado tropical de coco",
        price: 80,
      },
      {
        name: "MAMEY",
        description: "Licuado cremoso de mamey",
        price: 80,
      },
      {
        name: "FRESA",
        description: "Licuado dulce de fresa",
        price: 80,
      },
      {
        name: "ROMPOPE",
        description: "Licuado tradicional de rompope",
        price: 80,
      },
      {
        name: "COCTEL DE FRUTAS",
        description: "Especial con granola y yogurt",
        price: 80,
      },
      {
        name: "INGREDIENTES EXTRAS",
        description: "Agrega ingredientes adicionales a tu licuado",
        price: 15,
      },
    ],
  };

  const filteredItems = menuData[
    activeCategory as keyof typeof menuData
  ].filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="full-menu" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Menú <span className="text-orange-500">Completo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre todos nuestros deliciosos platillos y bebidas
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar en el menú..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => {
            const itemCount =
              menuData[category.id as keyof typeof menuData].length;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-orange-100 shadow-md"
                }`}>
                <span className="text-xl mr-2">{category.icon}</span>{" "}
                {itemCount} {category.name}
              </button>
            );
          })}
        </div>
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-orange-500 ml-4">
                  ${item.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              <button
                onClick={() =>
                  addItem({
                    id: `${activeCategory}-${index}`,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    category: activeCategory,
                  })
                }
                className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer">
                Agregar
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-gray-600">
              Intenta con otros términos de búsqueda
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para ordenar?</h3>
            <p className="mb-6">
              Llámanos o visítanos para disfrutar de nuestros deliciosos
              platillos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Llamar Ahora
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300">
                Ver Ubicación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullMenu;
