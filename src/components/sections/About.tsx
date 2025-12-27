import { Accordion, AccordionItem } from "@heroui/accordion";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import {
  HiUser,
  HiAcademicCap,
  HiSparkles,
  HiGlobe,
  HiLightBulb,
  HiUserGroup,
  HiPuzzle,
} from "react-icons/hi";
import { FaGraduationCap, FaHeart, FaLanguage } from "react-icons/fa";

export const About = () => {
  return (
    <section
      className="py-24 md:py-32 px-6 bg-cream-200 relative overflow-hidden"
      id="about"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-soft/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cream-600/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <Chip
            className="bg-rose-soft/60 text-brown-warm border-0 px-4 py-2 mb-4"
            size="sm"
            startContent={<HiUser className="text-brown-warm" size={16} />}
            variant="flat"
          >
            Tentang Saya
          </Chip>
          <h2 className="text-3xl md:text-5xl font-bold text-brown-warm mb-4 tracking-tight">
            Kenali Lebih Dekat
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto text-lg leading-relaxed">
            Sedikit cerita tentang perjalanan dan passion saya dalam dunia
            komunikasi dan media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right" data-aos-delay="100">
            <Card className="bg-gradient-to-br from-cream-400 to-cream-300 border border-cream-600/30 shadow-soft-lg overflow-visible">
              <CardBody className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-cream-100 rounded-2xl shadow-soft flex items-center justify-center">
                    <HiUser className="text-brown-warm" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark">
                      My Story
                    </h3>
                    <p className="text-sm text-neutral-light">
                      Perjalanan Karir
                    </p>
                  </div>
                </div>

                <p className="text-neutral-text leading-relaxed mb-6">
                  Saya adalah individu yang berdedikasi dengan ketertarikan
                  mendalam pada dunia komunikasi dan manajemen. Memiliki
                  kemampuan adaptasi yang tinggi dan selalu bersemangat untuk
                  mempelajari hal-hal baru.
                </p>
                <p className="text-neutral-text leading-relaxed mb-8">
                  Dengan latar belakang pendidikan yang kuat dan pengalaman
                  organisasi yang beragam, saya siap memberikan kontribusi
                  positif dan solusi kreatif dalam setiap proyek yang saya
                  kerjakan.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip
                    className="bg-cream-100/80 text-brown-warm border-0 shadow-sm"
                    startContent={
                      <HiPuzzle className="text-brown-light" size={14} />
                    }
                    variant="flat"
                  >
                    Problem Solver
                  </Chip>
                  <Chip
                    className="bg-cream-100/80 text-brown-warm border-0 shadow-sm"
                    startContent={
                      <HiLightBulb className="text-brown-light" size={14} />
                    }
                    variant="flat"
                  >
                    Creative Thinker
                  </Chip>
                  <Chip
                    className="bg-cream-100/80 text-brown-warm border-0 shadow-sm"
                    startContent={
                      <HiUserGroup className="text-brown-light" size={14} />
                    }
                    variant="flat"
                  >
                    Team Player
                  </Chip>
                </div>
              </CardBody>
            </Card>
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <Accordion
              className="gap-4"
              itemClasses={{
                base: "bg-cream-100 border border-cream-600/30 shadow-soft px-6 py-2 rounded-2xl data-[open=true]:shadow-soft-lg transition-all duration-300",
                title: "text-neutral-dark font-semibold text-base",
                trigger: "py-4",
                content: "pb-4 pt-0",
                indicator: "text-brown-warm",
              }}
              selectionMode="multiple"
              variant="splitted"
            >
              <AccordionItem
                key="1"
                aria-label="Pendidikan"
                title={
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-soft/50 rounded-xl flex items-center justify-center">
                      <FaGraduationCap className="text-brown-warm" size={18} />
                    </div>
                    <span>Latar Belakang Pendidikan</span>
                  </div>
                }
              >
                <div className="pl-13 space-y-4">
                  <div className="bg-cream-300/50 rounded-xl p-4">
                    <h4 className="font-semibold text-brown-warm text-base">
                      Universitas Mathla&apos;ul Anwar Banten
                    </h4>
                    <p className="text-sm text-neutral-light mt-1 flex items-center gap-2">
                      <HiAcademicCap className="text-brown-light" size={14} />
                      Sarjana Ilmu Komunikasi | 2021 - 2025
                    </p>
                    <p className="mt-3 text-neutral-text text-sm leading-relaxed">
                      Aktif dalam berbagai kegiatan kemahasiswaan dan organisasi
                      di bidang komunikasi dan administrasi.
                    </p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                key="2"
                aria-label="Minat"
                title={
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cream-600/50 rounded-xl flex items-center justify-center">
                      <HiSparkles className="text-brown-warm" size={18} />
                    </div>
                    <span>Minat & Fokus</span>
                  </div>
                }
              >
                <div className="pl-13">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        name: "Broadcast Monitoring",
                        icon: <HiSparkles size={14} />,
                      },
                      {
                        name: "Media Sosial",
                        icon: <HiGlobe size={14} />,
                      },
                      {
                        name: "Administrasi",
                        icon: <HiLightBulb size={14} />,
                      },
                      {
                        name: "Public Relations",
                        icon: <HiUserGroup size={14} />,
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-cream-300/50 rounded-xl p-3 flex items-center gap-2"
                      >
                        <span className="text-brown-warm">{item.icon}</span>
                        <span className="text-sm text-neutral-text">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                key="3"
                aria-label="Bahasa"
                title={
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brown-muted/30 rounded-xl flex items-center justify-center">
                      <FaLanguage className="text-brown-warm" size={18} />
                    </div>
                    <span>Kemampuan Bahasa</span>
                  </div>
                }
              >
                <div className="pl-13 space-y-3">
                  <div className="flex items-center justify-between bg-cream-300/50 rounded-xl p-3">
                    <span className="text-neutral-text text-sm">
                      Bahasa Indonesia
                    </span>
                    <Chip
                      className="bg-brown-warm/10 text-brown-warm border-0"
                      size="sm"
                      variant="flat"
                    >
                      Native
                    </Chip>
                  </div>
                  <div className="flex items-center justify-between bg-cream-300/50 rounded-xl p-3">
                    <span className="text-neutral-text text-sm">
                      Bahasa Inggris
                    </span>
                    <Chip
                      className="bg-cream-600/30 text-brown-light border-0"
                      size="sm"
                      variant="flat"
                    >
                      Intermediate
                    </Chip>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                key="4"
                aria-label="Nilai"
                title={
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-pastel/50 rounded-xl flex items-center justify-center">
                      <FaHeart className="text-brown-warm" size={18} />
                    </div>
                    <span>Nilai & Prinsip</span>
                  </div>
                }
              >
                <div className="pl-13">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Integritas",
                      "Dedikasi",
                      "Kolaborasi",
                      "Inovasi",
                      "Profesionalisme",
                    ].map((value, idx) => (
                      <Chip
                        key={idx}
                        className="bg-cream-300/50 text-neutral-text border-0"
                        size="sm"
                        variant="flat"
                      >
                        {value}
                      </Chip>
                    ))}
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
