import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { HiBriefcase, HiAcademicCap, HiUserGroup } from "react-icons/hi";

import profile from "../../assets/img/profile.jpeg";

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream-500 via-cream-400 to-cream-500 px-6 pt-20 pb-12 relative overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-pastel/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-soft/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-5 relative z-10">
        <div
          className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-lg md:text-xl font-medium text-brown-light tracking-wide">
                Halo, saya
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark mt-2 leading-tight">
                Siti <span className="text-brown-warm">Solihah</span>
              </h1>
            </div>

            <p
              className="text-base md:text-lg text-neutral-light max-w-lg mx-auto lg:mx-0 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Seorang profesional yang berfokus pada komunikasi, organisasi,
              administrasi, dan media. Menciptakan solusi elegan dan efektif
              untuk setiap tantangan.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button
              className="bg-brown-warm text-white font-medium shadow-lg shadow-brown-warm/25 hover:shadow-xl hover:shadow-brown-warm/35 hover:scale-105 transition-all duration-300 px-8"
              radius="full"
              size="lg"
              startContent={<HiBriefcase size={18} />}
              onPress={() => scrollTo("experience")}
            >
              Lihat Pengalaman
            </Button>
            <Button
              className="border-2 border-brown-warm text-brown-warm bg-transparent hover:bg-brown-warm hover:text-white font-medium transition-all duration-300 px-8"
              radius="full"
              size="lg"
              variant="bordered"
              onPress={() => scrollTo("contact")}
            >
              Hubungi Saya
            </Button>
          </div>

          <div
            className="flex items-center gap-8 justify-center lg:justify-start pt-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-2">
                <HiBriefcase className="text-brown-warm" size={20} />
                <p className="text-2xl md:text-3xl font-bold text-brown-warm">
                  1+
                </p>
              </div>
              <p className="text-sm text-neutral-light">Pengalaman Kerja</p>
            </div>
            <div className="w-px h-12 bg-cream-700" />
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-2">
                <HiUserGroup className="text-brown-warm" size={20} />
                <p className="text-2xl md:text-3xl font-bold text-brown-warm">
                  4+
                </p>
              </div>
              <p className="text-sm text-neutral-light">Organisasi</p>
            </div>
            <div className="w-px h-12 bg-cream-700" />
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-2">
                <HiAcademicCap className="text-brown-warm" size={20} />
                <p className="text-2xl md:text-3xl font-bold text-brown-warm">
                  S1
                </p>
              </div>
              <p className="text-sm text-neutral-light">Ilmu Komunikasi</p>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center order-1 lg:order-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-rose-pastel/40 via-cream-600/30 to-brown-muted/20 rounded-full blur-2xl animate-pulse-soft" />

            <Card className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border-4 border-cream-200/80 shadow-soft-lg overflow-hidden relative">
              <Image
                removeWrapper
                alt="Siti Solihah"
                className="z-0 w-full h-full object-cover"
                src={profile}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-warm/10 to-transparent" />
            </Card>

            <div
              className="absolute -bottom-4 -left-4 bg-cream-100 border border-cream-600/30 rounded-2xl shadow-soft-lg p-4 animate-float"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-soft rounded-full flex items-center justify-center">
                  <HiBriefcase className="text-brown-warm" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-dark">
                    Broadcast
                  </p>
                  <p className="text-xs text-neutral-light">Monitoring</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-2 -right-2 bg-cream-100 border border-cream-600/30 rounded-2xl shadow-soft-lg p-4 animate-float"
              data-aos="zoom-in"
              data-aos-delay="700"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cream-600 rounded-full flex items-center justify-center">
                  <HiUserGroup className="text-brown-warm" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-dark">
                    Organization
                  </p>
                  <p className="text-xs text-neutral-light">Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        {/* <button
          className="flex flex-col items-center gap-2 text-brown-light hover:text-brown-warm transition-colors duration-300 group"
          onClick={() => scrollTo("about")}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-brown-light group-hover:border-brown-warm rounded-full flex justify-center transition-colors duration-300">
            <FaArrowDown
              className="text-brown-light group-hover:text-brown-warm mt-2 animate-bounce transition-colors duration-300"
              size={12}
            />
          </div>
        </button> */}
      </div>
    </section>
  );
};
