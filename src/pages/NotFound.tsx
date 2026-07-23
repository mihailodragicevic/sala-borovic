import { Link } from "react-router-dom";
import { Seo } from "@/components/site/Seo";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-muted px-5">
    <Seo
      title="404 | Svečana sala Borović, Bogatić"
      description="Stranica koju tražite ne postoji. Vratite se na početnu stranicu sajta Svečane sale Borović u Bogatiću."
      pathname="/404"
      robots="noindex, nofollow"
    />
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-4 text-xl text-muted-foreground">Stranica nije pronađena</p>
      <Link to="/" className="text-primary underline hover:text-primary/90">
        Povratak na početnu
      </Link>
    </div>
  </div>
);

export default NotFound;
