const productos = [
  { id: 1, image: "/product1.jpg", name: "Abrigo de Lujo" },
  { id: 2, image: "/product2.jpg", name: "Chaqueta Exclusiva" },
  { id: 3, image: "/product3.jpg", name: "Blazer Premium" },
];

const TrendingSection = () => {
  return (
    <section className="bg-cream py-16 px-6">
      <h3 className="text-3xl font-bold text-darkBlue text-center mb-12 uppercase tracking-wider">Nuestra Colección</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={producto.image} alt={producto.name} className="w-full h-64 object-cover" />
            <div className="p-6 bg-white">
              <h4 className="text-xl font-semibold mb-2 text-forestGreen">{producto.name}</h4>
              <button className="bg-darkBlue text-cream py-2 px-4 rounded-full hover:bg-forestGreen transition-all duration-300">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
