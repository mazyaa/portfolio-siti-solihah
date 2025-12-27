import { Chip } from "@heroui/chip";
import { Card, CardBody } from "@heroui/card";
import {
  HiDesktopComputer,
  HiPencilAlt,
  HiSearch,
  HiCalendar,
  HiBriefcase,
  HiColorSwatch,
  HiMicrophone,
  HiNewspaper,
  HiDatabase,
  HiChat,
  HiUserGroup,
  HiClock,
  HiLightBulb,
  HiRefresh,
  HiStar,
  HiEye,
  HiCog,
} from "react-icons/hi";
import { FaLaptopCode, FaBrain, FaHandshake } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillGroupProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  delay: string;
  gradient: string;
}

const SkillGroup = ({
  title,
  subtitle,
  icon,
  skills,
  delay,
  gradient,
}: SkillGroupProps) => (
  <Card
    className="bg-cream-100 border border-cream-600/30 shadow-soft hover:shadow-soft-lg transition-all duration-300"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <CardBody className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 ${gradient} rounded-2xl flex items-center justify-center shadow-soft text-brown-warm`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-dark">{title}</h3>
          <p className="text-sm text-neutral-light">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Chip
            key={index}
            className="bg-cream-300/80 hover:bg-cream-600 text-neutral-text border-0 px-4 py-5 transition-all duration-300 hover:scale-105 hover:shadow-soft cursor-default"
            size="lg"
            startContent={
              <span className="text-brown-light">{skill.icon}</span>
            }
            variant="flat"
          >
            {skill.name}
          </Chip>
        ))}
      </div>
    </CardBody>
  </Card>
);

export const Skills = () => {
  const hardSkills: SkillItem[] = [
    { name: "Social Media Management", icon: <HiDesktopComputer size={16} /> },
    { name: "Content Writing", icon: <HiPencilAlt size={16} /> },
    { name: "Media Monitoring", icon: <HiSearch size={16} /> },
    { name: "Event Planning", icon: <HiCalendar size={16} /> },
    { name: "Microsoft Office Suite", icon: <HiBriefcase size={16} /> },
    { name: "Canva Design", icon: <HiColorSwatch size={16} /> },
    { name: "Public Speaking", icon: <HiMicrophone size={16} /> },
    { name: "Media Relations", icon: <HiNewspaper size={16} /> },
    { name: "Data Entry", icon: <HiDatabase size={16} /> },
    { name: "Administrasi", icon: <MdAdminPanelSettings size={16} /> },
  ];

  const softSkills: SkillItem[] = [
    { name: "Komunikasi Efektif", icon: <HiChat size={16} /> },
    { name: "Kerjasama Tim", icon: <HiUserGroup size={16} /> },
    { name: "Manajemen Waktu", icon: <HiClock size={16} /> },
    { name: "Problem Solving", icon: <HiLightBulb size={16} /> },
    { name: "Adaptabilitas", icon: <HiRefresh size={16} /> },
    { name: "Kepemimpinan", icon: <HiStar size={16} /> },
    { name: "Detail Oriented", icon: <HiEye size={16} /> },
    { name: "Organisasi", icon: <HiCog size={16} /> },
  ];

  return (
    <section
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream-500 via-cream-400 to-cream-500 relative overflow-hidden"
      id="skills"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-rose-soft/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cream-700/30 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <Chip
            className="bg-cream-200/80 text-brown-warm border border-cream-600/30 px-4 py-2 mb-4 shadow-soft"
            size="sm"
            startContent={<HiStar className="text-brown-warm" size={16} />}
            variant="flat"
          >
            Keahlian
          </Chip>
          <h2 className="text-3xl md:text-5xl font-bold text-brown-warm mb-4 tracking-tight">
            Skill & Kompetensi
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto text-lg leading-relaxed">
            Kemampuan teknis dan interpersonal yang saya miliki untuk memberikan
            hasil terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillGroup
            delay="100"
            gradient="bg-gradient-to-br from-rose-soft to-rose-pastel/50"
            icon={<FaLaptopCode size={24} />}
            skills={hardSkills}
            subtitle="Kemampuan Teknis"
            title="Hard Skills"
          />
          <SkillGroup
            delay="200"
            gradient="bg-gradient-to-br from-cream-600 to-cream-700"
            icon={<FaBrain size={24} />}
            skills={softSkills}
            subtitle="Kemampuan Interpersonal"
            title="Soft Skills"
          />
        </div>

        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Card className="bg-cream-200/60 backdrop-blur-sm border border-cream-600/30 shadow-soft inline-block">
            <CardBody className="px-8 py-6">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                <div className="text-center flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <FaLaptopCode className="text-brown-warm" size={20} />
                    <p className="text-3xl font-bold text-brown-warm">10+</p>
                  </div>
                  <p className="text-sm text-neutral-light">Hard Skills</p>
                </div>
                <div className="w-px h-12 bg-cream-700 hidden md:block" />
                <div className="text-center flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <FaBrain className="text-brown-warm" size={20} />
                    <p className="text-3xl font-bold text-brown-warm">8+</p>
                  </div>
                  <p className="text-sm text-neutral-light">Soft Skills</p>
                </div>
                <div className="w-px h-12 bg-cream-700 hidden md:block" />
                <div className="text-center flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <FaHandshake className="text-brown-warm" size={20} />
                    <p className="text-3xl font-bold text-brown-warm">100%</p>
                  </div>
                  <p className="text-sm text-neutral-light">Dedikasi</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
