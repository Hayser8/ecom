const BrandSection = () => {
    const brands = ["Adidas", "Gucci", "Puma", "Nike", "Louis Vuitton"];
    
    return (
      <section className="bg-gray-900 text-white py-10 px-6 text-center">
        <h3 className="text-xl font-semibold mb-6">Our Brands</h3>
        <div className="flex justify-center gap-8">
          {brands.map((brand, index) => (
            <span key={index} className="text-lg">{brand}</span>
          ))}
        </div>
      </section>
    );
  };
  
  export default BrandSection;
  