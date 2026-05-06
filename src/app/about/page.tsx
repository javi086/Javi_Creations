import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center p-8 md:p-24 text-gray-200 motion-preset-fade motion-duration-1000">
      
      <div className="w-full max-w-5xl flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center motion-preset-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 drop-shadow-sm">About Me</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A glimpse into my professional journey and what I love doing when I step away from the keyboard.
          </p>
        </div>

        {/* Professional Background Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center bg-deep-navy p-8 md:p-12 rounded-3xl shadow-sm shadow-deep-gold motion-preset-slide-up motion-delay-200">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-secondary">Professional Background</h2>
            <p className="text-gray-300 leading-relaxed">
              I am a Full Stack Software Developer dedicated to building clean, scalable, and highly interactive applications. My journey in tech is fueled by a constant curiosity and a desire to solve real-world problems through elegant code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether I am designing an intuitive frontend interface or architecting a robust backend, I focus on delivering high-quality user experiences.
            </p>
          </div>
          {/* Placeholder for Professional Image */}
          <div className="w-full md:w-1/2 aspect-video bg-[#1a2a47] rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-inner">
            <span className="text-5xl mb-3">💻</span>
            <span className="text-gray-400 font-medium text-sm uppercase tracking-widest">[ Workspace Image ]</span>
          </div>
        </section>

        {/* Personal Life & Hobbies Section */}
        <section className="flex flex-col md:flex-row-reverse gap-8 items-center bg-deep-navy p-8 md:p-12 rounded-3xl shadow-sm shadow-deep-gold motion-preset-slide-up motion-delay-300">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-secondary">Beyond the Screen</h2>
            <p className="text-gray-300 leading-relaxed">
              When I'm not writing code, I love to stay active and express myself creatively. One of my greatest passions is dancing! It keeps me energized, helps me disconnect, and allows me to express a completely different side of myself.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe that maintaining a healthy balance between logic-driven software development and creative physical hobbies is the key to staying inspired and focused.
            </p>
          </div>
          {/* Placeholder for Personal Image */}
          <div className="w-full md:w-1/2 aspect-video bg-[#1a2a47] rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-inner">
            <span className="text-5xl mb-3">🕺</span>
            <span className="text-gray-400 font-medium text-sm uppercase tracking-widest">[ Dancing Image ]</span>
          </div>
        </section>
        
        {/* Navigation to Next Page */}
        <div className="flex justify-center mt-8 motion-preset-slide-up motion-delay-500">
          <Link href="/projects" className="text-xl border-2 border-primary rounded-full px-10 py-4 text-primary font-bold hover:bg-primary hover:text-deep-navy hover:shadow-[0_0_20px_rgba(181,142,79,0.4)] hover:-translate-y-1 transition-all duration-300">
            Check Out My Projects
          </Link>
        </div>

      </div>
    </main>
  );
}
