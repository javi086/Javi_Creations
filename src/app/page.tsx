"use client";

import Link from "next/link";
import Image from "next/image";
import { interests } from "../data/interests";
import { useState } from "react";

export default function Home() {
  // State to hold the currently selected hobby, defaulting to the first item (Dancing)
  const [selectedInterest, setSelectedInterest] = useState(interests[0]);

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
      <section id="about_Personally" className="w-full bg-deep-navy py-16 px-10 md:px-12 2xl:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {/* Left Column - Profile & Toggle */}
          <div className="flex flex-col items-center gap-6 p-8 bg-deep-navy shadow-sm border rounded-xl">
            <label className="inline-flex items-center cursor-pointer">
              <span className="select-none text-sm font-medium text-primary">Professionally</span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative mx-3 w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              <span className="select-none text-sm font-medium text-primary">Personally</span>
            </label>
             {/* Image from professional to personal */}
             <Image 
              src="/images/Me_Professional.png"
              alt="Jose Javier"
              width={400}
              height={400}
              priority
              className="w-32 md:w-64 lg:w-96 rounded-md mx-auto object-cover border-2 border-secondary"
              />
            <Image
              src="/images/Me_Casual.png"
              alt="Jose Javier"
              width={400}
              height={400}
              priority
              className="w-32 md:w-64 lg:w-96 rounded-md mx-auto object-cover border-2 border-secondary invisible"
            />
          </div>


          {/* Right Column - Bio & Sections */}
          <div className="lg:col-span-2 flex flex-col gap-8 ">

            {/* Bio Box */}
            <div className="py-5 ">
              <h3 className="text-4xl font-bold text-secondary text-center mb-8 px-8 md:px-22 py-2 md:py-0 w-fit mx-auto bg-white bg-none md:bg-transparent md:bg-cover-letters-title-one bg-center bg-cover rounded-xl md:rounded-none">
                Personally
              </h3>
              <p className="w-full px-8 md:px-22 py-6 text-primary text-lg  text-center  leading-relaxed bg-white bg-none md:bg-transparent md:bg-cover-letters-general-one bg-cover bg-no-repeat bg-center overflow-hidden text-ellipsis rounded-xl md:rounded-none">
                Beyond the screen, I am an active person who loves dancing, working out, and regular exercise to stay energized. When I am not moving, you can find me analyzing my next move in a game of chess. I also deeply enjoy sipping a great coffee or a fine wine while spending quality time with my friends and beloved family.
              </p>
            </div>

            {/* Hobbies & Passions */}
            <h3 className="text-4xl font-bold text-secondary text-center mb-8 px-8 md:px-38 py-2 md:py-0 w-fit mx-auto bg-white bg-none md:bg-transparent md:bg-cover-letters-title-one bg-center bg-cover rounded-xl md:rounded-none">
              Hobbies & Passions
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 ">
              <div className="flex flex-col ">
                <ul className="space-y-4 md:space-y-11  list-none text-3xl font-bold text-center text-primary">
                  {interests.map((interest) => (
                    <li
                      key={interest.id}
                      onMouseOver={() => setSelectedInterest(interest)}
                      className={`bg-white bg-none md:bg-transparent md:bg-cover-letters-title-two bg-cover bg-no-repeat bg-center overflow-hidden cursor-pointer transition-transform hover:scale-105 py-3 md:py-0 rounded-lg md:rounded-none ${selectedInterest.id === interest.id ? "text-secondary drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" : "text-primary opacity-80"
                        }`}
                    >
                      {interest.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:col-span-2 flex flex-col  justify-center items-center bg-white bg-none md:bg-transparent md:bg-cover-letters-general-two bg-center bg-contain bg-no-repeat rounded-xl md:rounded-none">
                <p className="px-8 md:px-12 py-6 text-primary text-base text-center  leading-relaxed">
                  {selectedInterest.description}
                </p>
              </div>
            </div>

          </div>



        </div>
      </section>

    </main>
  );
}
