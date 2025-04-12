
const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-linky-primary to-linky-secondary bg-clip-text text-transparent">
              Linky
            </div>
          </div>
          <div className="text-sm text-linky-muted">
            © {new Date().getFullYear()} Linky. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
