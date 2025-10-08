"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaHeartbeat,
  FaHandsHelping,
  FaPills,
  FaLightbulb,
  FaDonate,
} from "react-icons/fa";
import { motion } from "framer-motion";

const heroSlides = [
  {
    title: "Empowering Communities",
    subtitle:
      "Supporting healthcare, education, and welfare for a healthier India.",
    bg: "/images/gallery/9.jpg",
    cta: "Support Us",
  },
  {
    title: "Fighting Cancer",
    subtitle:
      "Providing timely treatment, medicines, and awareness to communities.",
    bg: "/images/gallery/11.jpg",
    cta: "Join Us",
  },
  {
    title: "Community Welfare",
    subtitle:
      "Empowering youth, women, and underprivileged through social programs.",
    bg: "/images/gallery/7.jpg",
    cta: "Donate Now",
  },
];

const projects = [
  {
    title: "Healthcare",
    img: "/images/projects/healthcare.jpg",
    desc: "Early detection of cancer, medical camps, and free checkups for communities.",
    icon: <FaHeartbeat className="text-amber-500 w-8 h-8 mx-auto mb-2" />,
  },
  {
    title: "Community Welfare",
    img: "/images/projects/community-welfare.jpg",
    desc: "Substance abuse awareness, youth support programs, and women empowerment initiatives.",
    icon: <FaHandsHelping className="text-amber-500 w-8 h-8 mx-auto mb-2" />,
  },
  {
    title: "Patient Support",
    img: "/images/projects/patient-support.jpg",
    desc: "Monthly medicines, food, treatment assistance, and clothing for patients in need.",
    icon: <FaPills className="text-amber-500 w-8 h-8 mx-auto mb-2" />,
  },
];

const galleryImages = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hero carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll gallery
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    let scrollPos = 0;

    const animate = () => {
      if (!container) return;

      scrollPos += 1;
      if (scrollPos >= totalWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      const id = requestAnimationFrame(animate);
      return id;
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <main className="font-sans text-gray-700">
      <header className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold text-blue-800">
              Jyothir Ayush Mission
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            {["About", "Mission", "Projects", "Gallery", "Donate"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="cursor-pointer hover:text-amber-500 font-medium transition-colors duration-300"
                >
                  {section}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.bg}
              alt={slide.title}
              fill
              className="object-contain w-full h-full filter blur-lg scale-105"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>
              <button
                className="bg-amber-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-amber-600 shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const donateSection = document.getElementById("donate");
                  donateSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {slide.cta}
              </button>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-4 h-4 rounded-full ${
                idx === currentSlide ? "bg-amber-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-white py-24" id="about">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-8">About Us</h2>

            <div className="p-8 bg-indigo-50 rounded-xl shadow-xl border-l-8 border-amber-500 hover:shadow-2xl transition-shadow duration-300 mb-8">
              <p className="text-xl font-semibold italic text-gray-800 mb-3">
                "Our mission is to foster a healthier India by providing
                **compassionate care** and **sustainable support** to those most
                in need."
              </p>
              <p className="text-sm text-gray-600">
                — Jyothir Ayush Mission Trust Leadership
              </p>
            </div>

            <div className="space-y-4">
              <p className="border-l-4 border-blue-200 pl-4">
                Jyothir Ayush Mission Trust is a registered charitable
                organization in India, focused on **healthcare, community
                welfare**, and **patient support**. We strive to be the bridge
                between need and resource.
              </p>
              <p className="border-l-4 border-blue-200 pl-4">
                The Trust ensures effective treatment by screening communities
                for cancer, confirming disease presence, and providing
                appropriate care. We also run awareness and intervention
                programs to tackle substance abuse among youth, helping them
                integrate into mainstream society.
              </p>
              <p className="border-l-4 border-blue-200 pl-4">
                Patients suffering from cancer and other chronic diseases
                receive crucial assistance, including **monthly medicines, food,
                treatment assistance**, and clothing on special occasions,
                ensuring dignity and hope.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }} 
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="mx-auto mb-8"
    >
            <Image
              src="/images/logo.png"
              alt="Community Work"
              width={450}
              height={450}
              className="rounded-xl shadow-2xlobject-contain w-full h-full max-h-[500px] animate-heartbeat"
            />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-indigo-50 py-24" id="mission">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-blue-800 ">Our Mission</h2>

    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }} 
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="mx-auto mb-8"
    >
      <Image
        src="/images/gallery/13.png"
        alt="Say No to Drugs"
        width={600}
        height={150}
        className="mx-auto"
      />
    </motion.div>

    <p className="text-lg md:text-xl text-center">
      Under the leadership of Jyothir Ayush Mission, this initiative aims
      for a drug-free India by promoting peace in schools, colleges, and
      families. Service committees against drug abuse have been formed at
      all levels — wards, panchayats, corporations, blocks, taluks, and
      districts — to identify children and youth using intoxicants and
      other substances. Awareness programs are conducted to educate them
      about the harmful effects of drug use and help them refrain from it.
      In schools and colleges, students are informed about the future
      consequences of drug use and are encouraged to take a pledge against
      it, fostering responsible and exemplary citizens of India.
      <br />
      <br />
      For this initiative, the organization collaborates with the Police
      Department, Excise, Health and Education Departments, central and
      state governments, residents’ associations, Kudumbashree units,
      colleges, schools, and other organizations. The program is carried
      out jointly under the banner of Jyothir Ayush Mission, established
      by Sri Mookambika Mission Charitable Trust India (Registration No:
      41/IV/2024). The mission also involves visiting households to
      educate families about the harmful consequences of drug use and
      guide them towards building a brighter future for the younger
      generation.
      <br />
      <br />
      <span className="font-semibold">Chairman:</span> Biju Balan Nambiar, Kannur <br />
      <span className="font-semibold">Trust Acharya:</span> Mookambika Sajipotti Rudramatham
    </p>
  </div>
</section>

      {/* Projects Section */}
      <section className="bg-white py-24" id="projects">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-indigo-50 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500 cursor-pointer"
              >
                {proj.icon}
                {/* <Image
                  src={proj.img}
                  alt={proj.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                /> */}
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Auto-scroll */}
      <section className="bg-indigo-50 py-24" id="gallery">
        <div className="max-w-auto mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">Gallery</h2>
          <div ref={scrollRef} className="flex space-x-6 overflow-hidden">
            {[...galleryImages, ...galleryImages].map((src, idx) => (
              <div
                key={idx}
                className="min-w-[300px] flex-shrink-0 relative rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  width={400}
                  height={300}
                  className="rounded-xl transform hover:scale-105 transition-transform duration-500 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="bg-white py-24 text-center" id="donate">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Support Us</h2>
         <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }} 
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="mx-auto mb-8"
    >
        <Image
          src="/images/gallery/donate.png"
          alt="Donate"
          width={200}
          height={50}
          className="mx-auto "
        />
        </motion.div>
        <p className="text-lg mb-6">
          Join hands with us to make a difference. You can donate, volunteer, or
          partner with us.
        </p>
        <a
          href="mailto:info@jyothirayushmission.org"
          className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto w-max"
        >
          <FaDonate />
          <span>Donate / Contact</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-200 to-blue-100 text-center py-6 text-gray-700">
        © 2025 Jyothir Ayush Mission Trust | Registered under Charitable Trusts
        Act
      </footer>
    </main>
  );
}
