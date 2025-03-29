
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Error 404: El usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linky-background px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-linky-primary/10 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-linky-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-linky-primary to-linky-secondary bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-linky-text mb-8">
          ¡Ups! No pudimos encontrar la página que estás buscando.
        </p>
        <Link to="/">
          <Button className="bg-linky-primary hover:bg-linky-primary/90">
            Volver al Inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
