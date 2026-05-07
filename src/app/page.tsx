import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-col items-center pt-12 md:py-24 text-gray-200">

      {/* Initial banner*/}
      <section className="flex flex-col items-center text-center justify-center m-4 md:m-12 w-full max-w-5xl bg-deep-navy shadow-sm shadow-deep-gold rounded-3xl py-20 px-6 ">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-pale-gold to-general-body bg-clip-text text-transparent  ">
          Hi, I'm Javier
        </h1>
        <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-primary via-pale-gold to-general-body bg-clip-text text-transparent font-bold mb-6">
          Full Stack Software Developer
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          I build high-quality web and mobile applications. Welcome to my personal portfolio where you can explore my projects, learn more about my background, and try out my interactive web applications.
        </p>
      </section>

      <section className="mt-8 mb-24">
        <div className="flex flex-col sm:flex-row gap-4 space-x-4">
          <Link href="#about" className="text-xl md:text-2xl border-2 border-primary rounded-full px-10 py-4 text-primary font-bold hover:bg-primary hover:text-deep-navy hover:shadow-[0_0_20px_rgba(181,142,79,0.4)] hover:-translate-y-1 transition-all duration-300">
            Let's Explore!
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full bg-deep-navy py-16 px-10 md:px-12 2xl:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-10 border">
          {/* Left Column - Profile & Info */}
          <div className="flex flex-col gap-6 p-8 bg-deep-navy  shadow-sm border">
            <Image 
              src="/images/Me_Casual.png" 
              alt="Jose Javier" 
              width={400} 
              height={400} 
              className="w-32 md:w-64 lg:w-96 rounded-md mx-auto object-cover border-2 border-secondary"
            />
          </div>
         

          {/* Right Column - Bio & Sections */}
          <div className="lg:col-span-2 flex flex-col gap-8 border border-red-300 ">
            {/* Bio Box */}
            <div className="p-15 border">
              <h3 className="text-4xl font-bold text-secondary text-center mb-8 px-22 w-fit mx-auto bg-cover-letters-title bg-center bg-cover">About me</h3>
              <p className="text-primary text-lg  text-center  leading-relaxed  bg-cover-letters-general bg-cover bg-no-repeat bg-center px-20 py-8 ">
                Beyond the screen, I am an active person who loves dancing, working out, and regular exercise to stay energized. When I am not moving, you can find me analyzing my next move in a game of chess. I also deeply enjoy sipping a great coffee or a fine wine while spending quality time with my friends and beloved family.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
