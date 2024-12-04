const categories = [
    {
      id: 1,
      image: "/hoodies.jpg",
      title: "Hoodies",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "/crewnecks.jpg",
      title: "Crewnecks",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      image: "/tshirts.jpg",
      title: "T-Shirts",
      buttonText: "Shop Now",
    },
  ];
  
  const CategoriesSection = () => {
    return (
      <section className="bg-cream py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Imagen */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Fondo oscuro sobre la imagen */}
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-70"></div>
  
              {/* Título y botón */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-bold uppercase tracking-wider">
                  {category.title}
                </h3>
                <button className="mt-4 bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-200 transition-all duration-300">
                  {category.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CategoriesSection;
  