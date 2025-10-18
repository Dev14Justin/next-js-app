import Link from "next/link";

export default function Navbar() {
  return (
    <div>
        <h2 className="text-center">Navigation Bar</h2>
        <nav>
            <Link href="/">Accueil</Link> | <Link href="/about">À propos</Link>
        </nav>
    </div>
    
  );
}
