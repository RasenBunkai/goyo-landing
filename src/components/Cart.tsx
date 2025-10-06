import React from "react";
import {useCart} from "../context/CartContext";
import {Minus, Plus, Trash2, ShoppingBag, FileText} from "lucide-react";
import jsPDF from "jspdf";

const Cart = () => {
  const {items, updateQuantity, removeItem, clearCart, getTotalPrice} =
    useCart();

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // Header
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("TORTAS GOYO", pageWidth / 2, 20, {align: "center"});

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Resumen de Pedido", pageWidth / 2, 30, {align: "center"});

    // Date
    const currentDate = new Date().toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    doc.setFontSize(10);
    doc.text(`Fecha: ${currentDate}`, 20, 45);

    // Line separator
    doc.line(20, 50, pageWidth - 20, 50);

    // Items header
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("PRODUCTO", 20, 65);
    doc.text("CANT.", 120, 65);
    doc.text("PRECIO", 140, 65);
    doc.text("TOTAL", 170, 65);

    doc.line(20, 68, pageWidth - 20, 68);

    // Items
    let yPosition = 80;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    items.forEach((item) => {
      const itemTotal = item.price * item.quantity;

      // Product name (with text wrapping if needed)
      const splitName = doc.splitTextToSize(item.name, 90);
      doc.text(splitName, 20, yPosition);

      // Quantity
      doc.text(item.quantity.toString(), 120, yPosition);

      // Unit price
      doc.text(`$${item.price.toFixed(2)}`, 140, yPosition);

      // Total
      doc.text(`$${itemTotal.toFixed(2)}`, 170, yPosition);

      yPosition += splitName.length * 5 + 5;

      // Add new page if needed
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
    });

    // Total section
    yPosition += 10;
    doc.line(20, yPosition, pageWidth - 20, yPosition);
    yPosition += 10;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(
      `TOTAL: $${getTotalPrice().toFixed(2)}`,
      pageWidth - 20,
      yPosition,
      {align: "right"}
    );

    // Footer
    yPosition += 20;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("¡Gracias por tu preferencia!", pageWidth / 2, yPosition, {
      align: "center",
    });
    doc.text("Tortas Goyo - Desde 1995", pageWidth / 2, yPosition + 10, {
      align: "center",
    });

    // Save PDF
    doc.save(`pedido-tortas-goyo-${Date.now()}.pdf`);
  };

  if (items.length === 0) {
    return (
      <section id="cart" className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 mb-8">
              ¡Agrega algunos productos deliciosos a tu carrito!
            </p>
            <a
              href="#menu"
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 inline-block">
              Ver Menú
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cart" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tu <span className="text-orange-500">Carrito</span>
          </h1>
          <p className="text-xl text-gray-600">
            Revisa tu pedido antes de continuar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Cart Items */}
            <div className="p-8">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                      <p className="text-orange-500 font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-300 mt-2">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-50 p-8 border-t border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-gray-800">Total:</span>
                <span className="text-3xl font-bold text-orange-500">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                  Vaciar Carrito
                </button>

                <button
                  onClick={generatePDF}
                  className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generar PDF y Pagar</span>
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                Al hacer clic en "Generar PDF y Pagar" se descargará un resumen
                de tu pedido
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl mb-3">🚚</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Entrega a Domicilio
              </h4>
              <p className="text-sm text-gray-600">30-45 minutos</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Pago en Efectivo
              </h4>
              <p className="text-sm text-gray-600">Al recibir tu pedido</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Confirma tu Pedido
              </h4>
              <p className="text-sm text-gray-600">Llámanos después del PDF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
