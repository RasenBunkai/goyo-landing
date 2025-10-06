import {useState} from "react";
import {useCart} from "../context/CartContext";

const categories = [
  {id: "tortas", name: "Tortas", icon: "🥪"},
  {id: "hamburguesas", name: "Hamburguesas", icon: "🍔"},
  {id: "bebidas", name: "Bebidas", icon: "🥤"},
];

const menuItems = {
  tortas: [
    {
      name: "Torta Goyo Especial",
      description:
        "Milanesa, jamón, queso, aguacate, frijoles, jitomate, cebolla y chiles",
      price: 85,
      image:
        "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      popular: true,
    },
    {
      name: "Torta de Carnitas",
      description:
        "Carnitas de cerdo, frijoles, aguacate, cebolla, cilantro y salsa verde",
      price: 75,
      image:
        "https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Torta de Pollo",
      description:
        "Pechuga de pollo, lechuga, jitomate, aguacate, mayonesa y mostaza",
      price: 70,
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ],
  hamburguesas: [
    {
      name: "Hamburguesa Goyo",
      description:
        "Carne de res, queso americano, lechuga, jitomate, cebolla y papas",
      price: 95,
      image:
        "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      popular: true,
    },
    {
      name: "Hamburguesa Doble",
      description:
        "Doble carne, doble queso, tocino, lechuga, jitomate y papas",
      price: 120,
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Hamburguesa de Pollo",
      description:
        "Pechuga empanizada, queso, lechuga, jitomate, aguacate y papas",
      price: 85,
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ],
  bebidas: [
    {
      name: "Licuado de Fresa",
      description: "Fresas naturales, leche y azúcar al gusto",
      price: 35,
      image:
        "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Licuado de Mango",
      description: "Mango fresco, leche y un toque de canela",
      price: 35,
      image:
        "https://images.pexels.com/photos/5946071/pexels-photo-5946071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Agua de Horchata",
      description: "Refrescante agua de horchata con canela",
      price: 25,
      image:
        "https://images.pexels.com/photos/6542654/pexels-photo-6542654.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      popular: true,
    },
  ],
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("tortas");
  const {addItem} = useCart();

  return (
    <section id="menu" className="py-20 px-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestro <span className="text-orange-500">Menú</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros platillos preparados con amor y los mejores
            ingredientes
          </p>
        </div>
      </div>

      {/* Botones de categorías */}
      <div className="flex flex-wrap justify-center mb-12 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer 
              ${
                selectedCategory === category.id
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600"
              }`}>
            <span className="text-2xl mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Productos filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {menuItems[selectedCategory].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              {item.popular && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <span className="text-2xl font-bold text-orange-500">
                  ${item.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.description}
              </p>
              <button
                onClick={() =>
                  addItem({
                    id: `${selectedCategory}-${index}`,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    category: selectedCategory,
                  })
                }
                className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer">
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <a
          href="/menu"
          className="bg-gray-800 text-white text-center px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
          Ver menú completo
        </a>
      </div>
    </section>
  );
}
