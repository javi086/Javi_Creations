"use client";

import Link from "next/link";
import Image from "next/image";
import { interests } from "../data/interests";
import { projects } from "../data/projects";
import { companies } from "../data/companies";
import { technologies } from "../data/technologies";
import { courses } from "../data/courses";
import { useState } from "react";

export default function Home() {
  // State to hold the current selected hobby, defaulting to the first item (Dancing)
  const [selectedInterest, setSelectedInterest] = useState(interests[0]);
  // State to hold the current selected project
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  //State to hold the current company 
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  // State to toggle between Professionally and Personally
  const [isPersonally, setIsPersonally] = useState(false);
  // State to manage the selected tab in the professional section (Profile or Courses)
  const [selectedProfessionalTab, setSelectedProfessionalTab] = useState('profile');
  // Tracks the currently expanded course image for the lightbox
  const [expandedCourse, setExpandedCourse] = useState<typeof courses[0] | null>(null);



  return (
    <main className="flex min-h-dvh w-full flex-col items-center pt-12 md:py-24 text-gray-200">

      {/* Initial banner*/}
      <section className="flex flex-col items-center text-center justify-center m-4 md:m-12 w-full max-w-5xl bg-deep-navy shadow-sm shadow-deep-gold rounded-3xl py-20 px-6 ">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-pale-gold  to-yellow-950">
          Hi, I&apos;m Javier!
        </h1>
        <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-primary via-pale-gold to-yellow-950 bg-clip-text text-transparent font-bold mb-6">
          Full Stack Software Developer
        </h2>
        <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
          I am a Toronto-based Full Stack Software Developer with over 15 years of experience in the IT industry. My unique professional background combines years of leadership as a Scrum Master and Project Manager at global organizations like Walmart, TATA and Scotiabank with a deep passion for building modern web and mobile solutions, always guided by SOLID, KISS, and DRY principles. I specialize in the full Software Development Life Cycle—from gathering requirements with stakeholders to moving solutions into production—bridging the gap between high-level project management and robust software engineering. </p>
        <div className="w-full mt-8 grid grid-cols-4 lg:flex lg:flex-row lg:justify-center lg:items-start gap-4">
          {technologies.map((technology) => (
            <div key={technology.id} className="flex flex-col items-center text-center gap-2 ">
              <div className="bg-white p-3 rounded-xl flex items-center justify-center animate-pulse w-16 h-16 shadow-md shadow-black/20 border">
                <Image
                  src={technology.path}
                  alt={technology.name}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 text-xs md:text-sm font-medium leading-tight">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 mb-24">
        <div className="flex flex-col sm:flex-row gap-4 space-x-4">
          <a href="#about" className="text-xl md:text-2xl border-2 border-primary rounded-full px-10 py-4 text-primary font-bold hover:bg-primary hover:text-deep-navy hover:shadow-[0_0_20px_rgba(181,142,79,0.4)] hover:-translate-y-1 transition-all duration-300">
            Let&apos;s Explore!
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full bg-deep-navy py-16 px-10 md:px-12 2xl:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {/* Left Column - Profile & Toggle */}
          <div className="flex flex-col items-center gap-6 p-8 bg-deep-navy shadow-sm border rounded-xl">
            <label className="inline-flex items-center cursor-pointer">
              <span className="select-none text-sm font-medium text-primary">Professional</span>
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isPersonally}
                onChange={(e) => setIsPersonally(e.target.checked)}
              />
              {/* Switch effect */}
              <div className="relative mx-3 w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              <span className="select-none text-sm font-medium text-primary">Personal</span>
            </label>
            {/* Image from professional to personal */}
            <Image
              src={isPersonally ? "/images/Me_Casual.png" : "/images/Me_Professional.png"}
              alt="Jose Javier"
              width={400}
              height={400}
              priority
              className="w-32 md:w-64 lg:w-96 rounded-md mx-auto object-cover border-2 border-secondary"
            />
          </div>


          {/* Right Column - Bio & Sections */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {isPersonally ? (
              <>
                {/* Bio Box */}
                <div className="py-5">
                  <h3 className="text-4xl font-bold text-secondary text-center mb-8 px-8 md:px-20 py-2 md:py-0 w-fit mx-auto bg-white bg-none md:bg-transparent md:bg-cover-letters-title-one bg-center bg-cover rounded-xl md:rounded-none">
                    Personal Profile
                  </h3>
                  <p className="w-full px-8 md:px-20 py-6 text-primary text-lg text-center leading-relaxed bg-white bg-none md:bg-transparent md:bg-cover-letters-general-one bg-cover bg-no-repeat bg-center overflow-hidden text-ellipsis rounded-xl md:rounded-none">
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
              </>
            ) : (
              <>
                {/* Professional Bio Box */}
                <div className="" id="professional_profile">
                  <ul className="flex flex-wrap text-lg font-medium text-center text-body border-b border-gray-700">
                    <li className="">
                      <a
                        href="#professional_profile"
                        aria-current={selectedProfessionalTab === 'profile' ? "page" : undefined}
                        onClick={() => setSelectedProfessionalTab('profile')}
                        className={`inline-block p-4 rounded-tl-lg ${selectedProfessionalTab === 'profile'
                          ? "bg-primary/10 border-primary text-secondary shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                          : "bg-transparent border-gray-700 text-gray-400 hover:bg-white/5 hover:text-gray-200"
                          }`}
                      >
                        Profile
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="#professional_profile"
                        onClick={() => setSelectedProfessionalTab('courses')}
                        className={`inline-block p-4 rounded-t-base ${selectedProfessionalTab === 'courses'
                          ? "bg-primary/10 border-primary text-secondary shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                          : "bg-transparent border-gray-700 text-gray-400 hover:bg-white/5 hover:text-gray-200"
                          }`}
                      > 
                        Courses
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="relative h-full ">
                  <div id="profile" className="py-2 px-8 md:px-10 bg-white/5 border border-white/10 rounded-2xl shadow-sm backdrop-blur-sm">
                    <p className="w-full text-gray-300 text-lg leading-relaxed text-justify">
                      As a Full Stack Software Developer, I am passionate about building scalable, user-friendly web and mobile applications. I specialize in modern web technologies and always aim to deliver high-quality software products. I enjoy tackling complex challenges and constantly learning new tools and frameworks.
                    </p>
                  </div>

                  <hr className="border-sm border-dashed border-gray-400 mt-8" />

                  {/* Companies */}
                  <div className="flex flex-col gap-6 pt-8 ">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                      {/* Project List */}
                      <div className="flex flex-col gap-3 ">
                        <h3 className="text-3xl font-semibold text-secondary pb-2">
                          Companies
                        </h3>
                        {companies.map((company) => (
                          <button
                            key={company.id}
                            onMouseOver={() => setSelectedCompany(company)}
                            className={`text-left px-6 py-4 mt-2 rounded-xl transition-all duration-300 border ${selectedCompany.id === company.id
                              ? "bg-primary/10 border-primary text-secondary shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                              : "bg-transparent border-gray-700 text-gray-400 hover:bg-white/5 hover:text-gray-200"
                              }`}
                          >
                            <span className="text-lg font-medium">{company.company_name}</span>
                          </button>
                        ))}
                      </div>
                      {/* Company Description Container */}
                      <div className="w-full lg:col-span-2 flex flex-col justify-center bg-deep-navy border border-white/10 rounded-2xl p-4 mb-4 shadow-inner">
                        <h2 className="font-bold mb-2">{selectedCompany.role}</h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                          {selectedCompany.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="border-sm border-dashed border-gray-400" />

                  {/* Projects */}
                  <div className="flex flex-col gap-6 pt-8">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Project List */}
                      <div className="flex flex-col gap-3">
                        <h3 className="text-3xl font-semibold text-secondary px-2">
                          Projects
                        </h3>
                        {projects.map((project) => (
                          <button
                            key={project.id}
                            onMouseOver={() => setSelectedProject(project)}
                            className={`text-left px-6 py-4 rounded-xl transition-all duration-300 border ${selectedProject.id === project.id
                              ? "bg-primary/10 border-primary text-secondary shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                              : "bg-transparent border-gray-700 text-gray-400 hover:bg-white/5 hover:text-gray-200"
                              }`}
                          >
                            <span className="text-lg font-medium">{project.project_name}</span>
                          </button>
                        ))}
                      </div>
                      {/* Project Description Container */}
                      <div className="w-full lg:col-span-2 flex flex-col bg-deep-navy border border-white/10 rounded-2xl p-4  shadow-inner">
                        <p className="text-gray-300 text-base leading-relaxed">
                          {selectedProject.description}
                        </p>
                        <Link href={selectedProject.project_name === "WBC Store" ? "/wbc_store/index.html" : ""} className="text-secondary hover:text-gray-500 underline transition duration-300">
                        Explore the project
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Courses */}
                  <div
                    id="courses"
                    className={`${selectedProfessionalTab === 'courses'
                      ? "absolute inset-0 z-10 w-full bg-deep-navy overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4"
                      : "hidden"
                      }`}
                  >
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        onClick={() => setExpandedCourse(course)} // Triggers expansion on click
                        className="flex flex-col items-stretch bg-zinc-900/40 p-3 rounded-xl border border-white/5 shadow-lg shadow-black/40 hover:border-brand-gold/30 transition-all duration-300 group cursor-zoom-in"
                      >
                        {/* The Frame Wrapper - Added h-full and flex-1 to distribute height evenly */}
                        <div className="relative aspect-[3/4] w-full flex-1 overflow-hidden rounded-lg bg-black/20 p-2 border border-white/10 group-hover:border-brand-gold/20 transition-colors duration-300">
                          <Image
                            src={course.path}
                            alt={course.name}
                            width={400}
                            height={400}
                            className="h-full w-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <p className="mt-3 text-xs md:text-sm text-center font-medium text-gray-400 group-hover:text-brand-gold transition-colors duration-300 px-1 truncate h-5 flex-shrink-0">
                          {course.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* LIGHTBOX MODAL OVERLAY */}
                  {expandedCourse && (
                    <div
                      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in cursor-zoom-out"
                      onClick={() => setExpandedCourse(null)} // Closes modal when clicking background
                    >
                      {/* Close Button */}
                      <button
                        className="absolute top-6 right-6 text-white text-4xl font-light hover:text-brand-gold transition-colors duration-200"
                        onClick={() => setExpandedCourse(null)}
                      >
                        &times;
                      </button>

                      {/* Expanded Image Frame */}
                      <div
                        className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking the actual picture
                      >
                        <Image
                          src={expandedCourse.path}
                          alt={expandedCourse.name}
                          width={1200} // High resolution render
                          height={900}
                          className="max-w-full max-h-full object-contain rounded-lg border border-white/10 shadow-2xl"
                          priority
                        />
                      </div>

                      {/* Subtitle inside the overlay */}
                      <p className="mt-4 text-white text-lg font-medium tracking-wide bg-zinc-900/80 px-6 py-2 rounded-full border border-white/5">
                        {expandedCourse.name}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
