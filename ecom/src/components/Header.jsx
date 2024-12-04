const Header = () => {
  return (
    <header className="bg-darkBlue text-cream py-4">
      <div className="flex items-center justify-between max-w-full px-6">
        {/* Logo completamente alineado a la izquierda */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-bold tracking-wide">FE</h1>
        </div>

        {/* Navbar centrado */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-8">
            <li><a href="#" className="hover:text-softYellow">Inicio</a></li>
            <li><a href="#" className="hover:text-softYellow">Tienda</a></li>
            <li><a href="#" className="hover:text-softYellow">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-softYellow">Colección</a></li>
          </ul>
        </nav>

        {/* Carrito completamente alineado a la derecha */}
        <div className="flex-shrink-0">
          <button className="text-cream hover:text-softYellow">🛒</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
