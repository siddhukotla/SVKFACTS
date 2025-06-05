import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-card shadow-lg sticky top-0 z-50 border-b border-border/70">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/facts/1" className="text-2xl sm:text-3xl font-headline text-primary hover:text-primary/80 transition-colors font-bold mb-2 sm:mb-0">
          SVKFACTS
        </Link>
        <div className="space-x-3 sm:space-x-4 text-sm sm:text-base">
          <Link href="/about" className="font-medium text-foreground/80 hover:text-accent transition-colors duration-200">
            About Us
          </Link>
          <Link href="/contact" className="font-medium text-foreground/80 hover:text-accent transition-colors duration-200">
            Contact Us
          </Link>
          <Link href="/privacy" className="font-medium text-foreground/80 hover:text-accent transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
