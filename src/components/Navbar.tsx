import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-sm border-b">
      <Link href="/" className="text-xl font-bold text-gray-800 tracking-tight">
        Javi's Portfolio
      </Link>
      
      <div className="flex items-center gap-6">
        <Link href="../app/AboutPage" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About Me</Link>
        <Link href="../app/projects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
        <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
        
        <span className="text-gray-300">|</span>
        
        <Link href="/app" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">Web App</Link>
      </div>
    </nav>
  );
}

