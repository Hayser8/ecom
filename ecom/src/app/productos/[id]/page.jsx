import Image from "next/image";

export default function ProductPage({ params }) {
  const products = {
    "1": {
      name: "OG Puffer Jacket Blue",
      price: "$329",
      description: "A premium jacket with stylish design.",
      mainImage: "/product1.jpg",
      images: ["/product1.jpg", "/product2.jpg", "/product3.jpg"],
      colors: ["#0000FF", "#000000", "#BEBEBE"],
      sizes: ["XS", "S", "M", "L", "XL"],
      details: "Made with premium materials.",
      sizeGuide: "See our size guide for details.",
      shippingInfo: "Free returns within 30 days.",
    },
  };

  const product = products[params.id];

  if (!product) {
    return <h1 className="text-gray-800">Producto no encontrado</h1>;
  }

  return (
    <div className="container mx-auto py-10 px-6 bg-gray-100 text-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección de imágenes */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden relative">
            <Image
              src={product.mainImage}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative"
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index}`}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sección de detalles */}
        <div className="relative p-6 bg-white rounded-lg shadow-md">
          {/* Línea superior decorativa */}
          <div className="border-t border-gray-300 mb-6"></div>

          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-6">{product.price}</p>
          <p className="mb-6">{product.description}</p>

          {/* Variantes (colores, tallas) */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Colores</h3>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Tallas</h3>
            <div className="flex gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="border py-2 px-4 rounded bg-gray-800 text-white hover:bg-gray-700"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botones en columna */}
          <div className="flex flex-col gap-4 mb-6">
            <button className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-all">
              Añadir al carrito
            </button>
            <button className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-all">
              Comprar con Shop Pay
            </button>
          </div>

          {/* Línea inferior decorativa */}
          <div className="border-t border-gray-300 mt-6"></div>

          {/* Detalles adicionales */}
          <div>
            <details className="mb-4">
              <summary className="font-bold cursor-pointer">Detalles</summary>
              <p className="mt-2">{product.details}</p>
            </details>
            <details className="mb-4">
              <summary className="font-bold cursor-pointer">Guía de tallas</summary>
              <p className="mt-2">{product.sizeGuide}</p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">
                Envíos y devoluciones
              </summary>
              <p className="mt-2">{product.shippingInfo}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
