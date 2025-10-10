"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaHeartbeat,
  FaHandsHelping,
  FaPills,
  FaDonate,
  FaShieldAlt, 
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { AnimatePresence, motion, Variants } from "framer-motion"; 



const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 }, 
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, 
      ease: [0.42, 0, 0.58, 1], 
    },
  },
};

const textVariants: Variants = {
  hidden: { x: -60, opacity: 0 }, 
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1, 
      ease: [0.42, 0, 0.58, 1], 
    },
  },
};

const missionPillarVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};


const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// const modalVariants: Variants = {
//   hidden: { y: "-100vh", opacity: 0 },
//   visible: { 
//     y: "0", 
//     opacity: 1,
//     transition: { delay: 0.2, duration: 0.4, type: "spring", stiffness: 100, damping: 20 }
//   },
//   exit: { y: "100vh", opacity: 0, transition: { duration: 0.3 } },
// };



const heroSlides = [
  {
    title: "Essential Healthcare Access",
    subtitle:
      "Ensuring continuous supply of monthly medicines and crucial treatment assistance for bedridden patients.",
    bg: "/images/gallery/15.jpg", 
    cta: "See Our Work",
  },
  {
    title: "Food & Nutritional Support",
    subtitle:
      "Distributing nourishing food and essential supplies every month to alleviate misery and distress.",
    bg: "/images/gallery/16.jpg", 
    cta: "Support Our Patients",
  },
  {
    title: "Welfare & Special Care",
    subtitle:
      "Providing clothing and personal essentials on special occasions to uphold dignity for those suffering from chronic illnesses.",
    bg: "/images/gallery/11.jpg", 
    cta: "Donate Now",
  },

];

const projects = [
  {
    title: "Healthcare",
    img: "/images/projects/healthcare.jpg",
    desc: "Early detection of cancer, medical camps, and free checkups for communities.",
    icon: <FaHeartbeat className="text-amber-500 w-8 h-8 mx-auto mb-2" />,
    placeholderImg: "/images/gallery/16.jpg", 
  },
  {
    title: "Community Welfare",
    img: "/images/projects/community-welfare.jpg",
    desc: "Substance abuse awareness, youth support programs, and women empowerment initiatives.",
    icon: <FaHandsHelping className="text-amber-500 w-8 h-8 mx-auto mb-2" />,
    placeholderImg: "/images/gallery/1.jpg", 
  },
  {
    title: "Patient Support",
    img: "/images/projects/patient-support.jpg",
    desc: "Monthly medicines, food, treatment assistance, and clothing for patients in need.",
    icon: <FaPills className="text-amber-500 w-8 h-8 mx-auto mb-2" />,
    placeholderImg: "/images/gallery/15.jpg", 
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

const missionPillars = [
  {
    title: "Drug-Free India Initiative",
    icon: <FaShieldAlt className="w-10 h-10 mb-3" />,
    description: "Forming service committees at all local levels (wards, panchayats, districts) to identify and support youth using intoxicants.",
  },
  {
    title: "Extensive Awareness Programs",
    icon: <FaGraduationCap className="w-10 h-10 mb-3" />,
    description: "Conducting educational sessions in schools, colleges, and households to inform students and families about the harmful consequences of drug use.",
  },
  {
    title: "Collaborative Action",
    icon: <FaUsers className="w-10 h-10 mb-3" />,
    description: "Jointly executing programs with Police, Excise, Health, and Education Departments, along with local governmental bodies and community associations.",
  },
];



const primaryColor = '#3C467B'; 
const secondaryColor = '#50589C'; 
const buttonBaseColor = '#6E8CFB'; 
const buttonHoverColor = '#636CCB'; 
const bodyTextColor = '#4A4A4A'; 
const COLOR_BG_LIGHT = "#F7F8FC";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Hero carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // const openModal = (index: number) => {
  //   setSelectedImageIndex(index);
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };



  return (
    <main className="text-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: bodyTextColor }}>
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
           <a href="#top" className="flex items-center space-x-4 cursor-pointer">
            <Image src="/images/logo.png" alt="Jyothir Ayush Mission Logo" width={55} height={55} />
            <h1 className="text-xl font-semibold tracking-tight" style={{ color: primaryColor }}>
              Jyothir Ayush Mission
            </h1>
          </a>
          </div>
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            {["About", "Mission", "Projects", "Gallery", "Donate"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="cursor-pointer hover:text-amber-500 transition-colors duration-300"
                >
                  {section}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[95vh] overflow-hidden">
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
              className="object-cover w-full h-full filter brightness-75 contrast-125 scale-105" 
            />
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
              <h2 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-xl tracking-tight leading-snug">
                {slide.title}
              </h2>
              <p className="text-xl md:text-3xl text-gray-200 mb-10 drop-shadow-lg font-light tracking-wide">
                {slide.subtitle}
              </p>
              <button
                style={{ backgroundColor: buttonBaseColor, transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonBaseColor)}
                className="text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-[1.03] transition-all duration-500 tracking-wider"
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
      <section className="relative bg-white py-32" id="about">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-12 tracking-wide" style={{ color: primaryColor }}>About Us</h2>

            <div className="p-10 rounded-xl shadow-xl border-l-8 border-amber-500 hover:shadow-2xl transition-shadow duration-300 mb-12"
              style={{ backgroundColor: 'rgba(110, 140, 251, 0.05)', borderColor: buttonBaseColor }} 
            >
              <p className="text-2xl font-semibold italic tracking-tight leading-relaxed" style={{ color: secondaryColor }}>
                "Our mission is to foster a healthier India by providing
                **compassionate care** and **sustainable support** to those most
                in need."
              </p>
              <p className="text-base text-gray-500 mt-4">
                — Jyothir Ayush Mission Trust Leadership
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed">
              <p className="pl-6 border-l-4" style={{ borderLeftColor: buttonBaseColor }}>
                Jyothir Ayush Mission Trust is a registered charitable
                organization in India, focused on **healthcare, community
                welfare**, and **patient support**. We strive to be the bridge
                between need and resource.
              </p>
              <p className="pl-6 border-l-4" style={{ borderLeftColor: buttonBaseColor }}>
                The Trust ensures effective treatment by screening communities
                for cancer, confirming disease presence, and providing
                appropriate care. We also run awareness and intervention
                programs to tackle substance abuse among youth, helping them
                integrate into mainstream society.
              </p>
              <p className="pl-6 border-l-4" style={{ borderLeftColor: buttonBaseColor }}>
                Patients suffering from cancer and other chronic diseases
                receive crucial assistance, including **monthly medicines, food,
                treatment assistance**, and clothing on special occasions,
                ensuring dignity and hope.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative w-full h-[300px] rounded-2xl shadow-2xl overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <Image
                  src="/images/gallery/14.jpg"
                  alt="Community Work Image Placeholder 1"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{  scale: 1 }}
              animate={{ scale: [1, 1.03, 1] }}
              // whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              viewport={{ once: true, amount: 0.5 }} 
              className="relative w-full h-[350px] rounded-2xl shadow-2xl overflow-hidden"
            >
              <Image
                src="/images/gallery/8.jpg"
                alt="Community Work Image Placeholder 2"
                fill
                // className="object-cover "
              />
            </motion.div>
          </div>
        </div>
      </section>

      
      <section className="py-32" id="mission" style={{ backgroundColor: '#F9FAFF' }}>
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-wide" style={{ color: primaryColor }}>Our Mission: A Drug-Free India 🇮🇳</h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-10 mb-16 rounded-2xl shadow-xl mx-auto max-w-5xl"
            style={{ 
                background: `linear-gradient(135deg, ${secondaryColor}10, ${buttonBaseColor}10)`, 
                border: `1px solid ${secondaryColor}30`
            }}
          >
            <p className="text-xl italic font-medium leading-relaxed" style={{ color: primaryColor }}>
              "Under the leadership of Jyothir Ayush Mission, our core mission is to achieve a **Drug-Free India** by promoting **peace, responsibility, and exemplary citizenship** among youth, families, and communities."
            </p>
          </motion.div>

          
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {missionPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={missionPillarVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="p-8 rounded-2xl shadow-lg border-t-4 text-center"
                style={{ 
                    borderColor: buttonBaseColor, 
                    backgroundColor: 'white',
                    transition: 'border-color 0.3s'
                }}
              >
                <span className="inline-block" style={{ color: secondaryColor }}>
                  {pillar.icon}
                </span>
                <h3 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>
                  {pillar.title}
                </h3>
                <p className="text-base text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
          
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-12 max-w-4xl p-8 rounded-xl shadow-lg border-2 border-dashed"
            style={{ 
                borderColor: secondaryColor,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <h3 className="text-3xl font-extrabold mb-3" style={{ color: buttonBaseColor }}>
                🚫 SAY NO TO DRUGS 🚫
            </h3>
            <p className="text-xl font-medium" style={{ color: primaryColor }}>
                Our commitment involves **direct intervention, education, and rehabilitation support** to guide youth away from substance abuse and back toward a path of positive civic engagement and leadership.
            </p>
          </motion.div>


         
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-base text-center max-w-4xl mx-auto p-6 rounded-xl"
            style={{ backgroundColor: 'rgba(60, 70, 123, 0.05)' }}
          >
            <p className="font-semibold text-lg mb-2" style={{ color: primaryColor }}>Leadership & Affiliation</p>
            <p className="text-gray-600">
                This program is carried out jointly under the banner of Jyothir Ayush Mission, established by **Sri Mookambika Mission Charitable Trust India** (Registration No: 41/IV/2024).
            </p>
            <p className="mt-4">
              <span className="font-semibold" style={{ color: secondaryColor }}>Chairman:</span> Biju Balan Nambiar, Kannur <br />
              <span className="font-semibold" style={{ color: secondaryColor }}>Trust Acharya:</span> Mookambika Sajipotti Rudramatham
            </p>
          </motion.div>

        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-32" id="projects">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-wide" style={{ color: primaryColor }}>
            Focus Areas
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-10"
          >
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                style={{ backgroundColor: 'rgba(80, 88, 156, 0.03)', borderTop: `5px solid ${secondaryColor}` }} 
              >
               
                <div className="relative w-full h-[250px] rounded-xl mb-6 overflow-hidden shadow-lg">
                  <Image
                    src={proj.placeholderImg}
                    alt={`${proj.title} image`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {proj.icon} 
                <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>{proj.title}</h3>
                <p className="leading-relaxed">{proj.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION  */}
      <section className="py-32" id="gallery" style={{ backgroundColor: '#F9FAFF' }}>
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-wide" style={{ color: primaryColor }}>Our Moments in Action</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative w-full h-[300px] rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
                // onClick={() => openModal(idx)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  {/* <p className="text-white text-xl font-semibold drop-shadow-lg">Event {idx + 1}</p> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Modal */}
        {/* <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 cursor-pointer"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={closeModal} // Close modal when clicking on backdrop
            >
              <motion.div
                className="relative bg-white p-4 rounded-xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden flex flex-col items-center justify-center"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 text-xl hover:bg-red-600 transition-colors z-10"
                >
                  <FaTimes />
                </button>
                <div className="relative w-full h-[60vh] md:h-[70vh] rounded-lg overflow-hidden">
                  <Image
                    src={galleryImages[selectedImageIndex]}
                    alt={`Full Image ${selectedImageIndex + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain" // Use object-contain to ensure image fits without cropping
                  />
                </div>
                <div className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 rounded-b-xl">
                  <button
                    onClick={showPrevImage}
                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-lg"
                  >
                    <FaArrowLeft />
                  </button>
                  <p className="text-lg font-medium text-gray-700">Image {selectedImageIndex + 1} of {galleryImages.length}</p>
                  <button
                    onClick={showNextImage}
                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-lg"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </section>

      {/* Donate Section  */}
      <section className="bg-white py-32 text-center" id="donate">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-10 tracking-wide" style={{ color: primaryColor }}>Support Us</h2>
          <div className="mx-auto mb-10">
            <Image
              src="/images/gallery/donate.png"
              alt="Donate"
              width={250} 
              height={60}
              className="mx-auto"
            />
          </div>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hands with us to make a difference. Your contribution fuels our mission. You can donate, volunteer, or partner with us to empower communities.
          </p>
          
          <a
            href="mailto:info@jyothirayushmission.org"
            style={{ backgroundColor: buttonBaseColor, transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonBaseColor)}
            className="text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl transform hover:scale-[1.03] transition-all duration-500 flex items-center justify-center space-x-3 mx-auto w-max tracking-wider"
          >
            <FaDonate />
            <span>Donate / Contact</span>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-base text-gray-600"
        style={{
          background: `${COLOR_BG_LIGHT}`
        }}
      >
        © 2025 Jyothir Ayush Mission Trust | Registered under Charitable Trusts
        Act.
      </footer>
    </main>
  );
}