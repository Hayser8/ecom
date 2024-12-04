const productosMasVendidos = [
  { id: 1, image: "/product1.jpg", name: "OG Puffer Jacket Black", price: "$329", colors: ["#000000", "#555555", "#1E90FF", "#F5F5DC"] },
  { id: 2, image: "/product1.jpg", name: "OG Puffer Jacket Grey", price: "$329", colors: ["#808080", "#C0C0C0", "#1E90FF", "#F5F5DC"] },
  { id: 3, image: "/product1.jpg", name: "OG Puffer Jacket Blue", price: "$329", colors: ["#1E90FF", "#000080", "#F5F5DC"] },
  { id: 4, image: "/product1.jpg", name: "OG Puffer Jacket Marshmallow", price: "$329", colors: ["#F5F5DC", "#000000", "#808080"] },
];

const TrendingSection = () => {
  return (
    <section className="bg-cream py-16 px-6">
      {/* Encabezado de la sección */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-darkBlue tracking-wider">Nuevos lanzamientos</h3>
        <button className="text-darkBlue text-sm underline hover:text-forestGreen transition-all duration-300">
          Ver todo
        </button>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {productosMasVendidos.map((producto) => (
          <div key={producto.id} className="text-center">
            {/* Imagen del producto */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img src={producto.image} alt={producto.name} className="w-full h-80 object-cover" />
              <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-lg uppercase font-semibold tracking-wider">
                Nuevo
              </div>
            </div>

            {/* Detalles del producto */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-darkBlue">{producto.name}</h4>
              <p className="text-sm text-gray-500">{producto.price}</p>
              <div className="flex justify-center mt-2 space-x-2">
                {producto.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
