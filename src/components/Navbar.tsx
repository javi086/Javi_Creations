import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-deep-navy shadow-sm  shadow-golden-shadow">
      <Link href="/" className="text-2xl text-primary text-shadow-lg  font-bold ">
        Javier's Portfolio
      </Link>
      
      <div className="flex items-center gap-6 text-secondary">
        <Link href="/" className="text-base font-medium  hover:text-zinc-300 transition-colors">Home</Link>
        <span className="text-gray-300">|</span>
        <Link href="#about" className="text-base font-medium   hover:text-zinc-300 transition-colors">About Me</Link>
        <span className="text-gray-300">|</span>
        <Link href="/projects" className="text-base font-medium   hover:text-zinc-300 transition-colors">Projects</Link>
        <span className="text-gray-300">|</span>
        <Link href="/contact" className="text-base font-medium   hover:text-zinc-300 transition-colors">Contact</Link>
        </div>
    </nav>
  );
}
