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
      <section id="about" className="w-full bg-deep-navy py-16 px-6 md:px-12 2xl:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Column - Profile & Info */}
          <div className="flex flex-col gap-6 p-8 bg-deep-navy  shadow-sm border border-red">

            <Image 
              src="/images/Me.jpeg" 
              alt="Jose Javier" 
              width={400} 
              height={400} 
              className="w-32 md:w-64 lg:w-96 rounded-md mx-auto object-cover border-2 border-secondary"
            />

          </div>

          {/* Right Column - Bio & Sections */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Bio Box */}
            <div className="bg-[#1B1B1C] rounded-2xl rounded-tr-[50px] rounded-bl-[50px] p-8 border-l-4 border-primary shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-4">About me</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a dedicated and passionate software developer with a strong foundation in front-end technologies such as HTML, CSS, and JavaScript. I enjoy creating user-friendly and accessible web applications. Currently pursuing a post-graduate degree in Information Technology Solutions at Humber College. I am eager to apply my skills in real-world projects and continue learning about the latest industry trends.
              </p>
            </div>

            {/* Two Column Grid for Hobbies & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1B1B1C] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-700 pb-2">Hobbies & Passions</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-primary"><li>Dancing</li><li>Travel</li><li>Technology</li><li>Drawing</li></ul>
              </div>
              <div className="bg-[#1B1B1C] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-700 pb-2">Experience</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-primary"><li>Walmart</li><li>TATA</li><li>Infotec</li><li>Scotiabank</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
