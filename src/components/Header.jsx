
import { Search, UserRound, ShoppingBag } from "lucide-react";

function Header() {
  return (
    <>
      <div className="announcement-bar">
        Complimentary shipping on orders over $75
      </div>

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#" className="brand">
            AURÉ
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#collection">Collection</a>
            <a href="#story">Our Story</a>
            <a href="#notes">Fragrance Notes</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-icons">
            <button type="button" aria-label="Search">
              <Search size={19} />
            </button>

            <button type="button" aria-label="Account">
              <UserRound size={19} />
            </button>

            <button type="button" aria-label="Shopping bag">
              <ShoppingBag size={19} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
