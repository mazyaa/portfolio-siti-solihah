import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiHeart, HiMail } from "react-icons/hi";

import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";

export default function IndexPage() {
  return (
    <div className="min-h-screen font-sans text-neutral-text bg-cream-500 antialiased">
      <PortfolioNavbar />

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gradient-to-b from-cream-600 to-brown-warm py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-rose-pastel/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cream-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <p className="font-semibold text-xl text-white tracking-wide">
                SITI SOLIHAH
              </p>
            </div>

            <p className="text-white/80 max-w-md mx-auto leading-relaxed mb-8">
              Profesional di bidang komunikasi & media. Selalu siap untuk
              kolaborasi dan peluang baru.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                aria-label="Email"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                href="mailto:ssolihah467@gmail.com"
              >
                <HiMail className="text-white" size={20} />
              </a>
              <a
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                href="https://wa.me/6287722033963"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaWhatsapp className="text-white" size={20} />
              </a>
              <a
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                href="https://www.linkedin.com/in/siti-solihah-11527a387/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin className="text-white" size={20} />
              </a>
              <a
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                href="https://www.instagram.com/lihah_12/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Siti Solihah. All rights reserved.
              </p>
              <p className="text-white/50 text-sm flex items-center gap-2">
                Create with <HiHeart className="text-rose-pastel" size={16} />{" "}
                by{" "}
                <a
                  className="underline hover:text-white"
                  href="https://github.com/mazyaa"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  mazyaa
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
