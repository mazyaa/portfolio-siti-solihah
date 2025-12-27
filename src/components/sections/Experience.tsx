import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Tab, Tabs } from "@heroui/tabs";
import {
  HiBriefcase,
  HiCalendar,
  HiClipboardList,
  HiOfficeBuilding,
  HiStar,
} from "react-icons/hi";
import { FaBuilding, FaCogs, FaPray, FaUsers } from "react-icons/fa";
import { MdGroups, MdWork } from "react-icons/md";

interface WorkExperience {
  icon: React.ReactNode;
  title: string;
  role: string;
  period: string;
  responsibilities: string[];
}

interface OrgExperience {
  icon: React.ReactNode;
  title: string;
  role: string;
  period: string;
}

const workExperiences: WorkExperience[] = [
  {
    icon: <FaBuilding size={24} />,
    title: "KPID Banten",
    role: "Divisi Pemantauan dan Pengawasan Penyiaran",
    period: "2025",
    responsibilities: [
      "Mencatat dan mendokumentasikan pelanggaran siaran TV dan radio",
      "Mengumpulkan data pelanggaran untuk evaluasi dan laporan",
      "Membantu monitoring isi siaran",
    ],
  },
];

const orgExperiences: OrgExperience[] = [
  {
    icon: <FaCogs size={20} />,
    title: "Himpunan Mahasiswa Ilmu Komunikasi",
    role: "Ketua Divisi PAO (Pengembangan Administrasi dan Organisasi)",
    period: "2024 - 2025",
  },
  {
    icon: <FaPray size={20} />,
    title: "Himpunan Mahasiswa Ilmu Komunikasi",
    role: "Ketua Divisi Keagamaan",
    period: "2023 - 2024",
  },
  {
    icon: <HiStar size={20} />,
    title: "Hari Jadi Kabupaten Lebak ke-194",
    role: "Panitia Pelaksana",
    period: "26 Nov - 4 Des 2022",
  },
  {
    icon: <FaUsers size={20} />,
    title: "Garda Bersama Desa",
    role: "Panitia Pelaksana",
    period: "27 Jun - 2 Jul 2022",
  },
];

const WorkExperienceContent = () => (
  <div className="space-y-6">
    {workExperiences.map((exp, index) => (
      <Card
        key={index}
        className="bg-cream-100 border border-cream-600/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 overflow-visible"
      >
        <CardHeader className="flex gap-4 items-start pb-2 pt-6 px-6">
          <div className="w-14 h-14 bg-gradient-to-br from-rose-soft to-cream-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft text-brown-warm">
            {exp.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
              <h4 className="text-lg font-bold text-neutral-dark">
                {exp.title}
              </h4>
              <Chip
                className="bg-cream-600/50 text-brown-warm border-0 font-medium self-start sm:self-auto"
                size="sm"
                startContent={
                  <HiCalendar className="text-brown-light" size={14} />
                }
                variant="flat"
              >
                {exp.period}
              </Chip>
            </div>
            <p className="text-sm text-brown-warm font-medium flex items-center gap-2">
              <HiBriefcase className="text-brown-light" size={14} />
              {exp.role}
            </p>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-3">
          <ul className="space-y-2">
            {exp.responsibilities.map((item, idx) => (
              <li
                key={idx}
                className="text-neutral-light text-sm leading-relaxed flex items-start gap-2"
              >
                <HiClipboardList
                  className="text-rose-pastel mt-0.5 flex-shrink-0"
                  size={16}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    ))}
  </div>
);

const OrgExperienceContent = () => (
  <div className="space-y-4">
    {orgExperiences.map((exp, index) => (
      <Card
        key={index}
        className="bg-cream-100 border border-cream-600/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 overflow-visible"
      >
        <CardBody className="flex gap-4 items-center p-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cream-600 to-cream-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft text-brown-warm">
            {exp.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h4 className="text-base font-bold text-neutral-dark">
                  {exp.role}
                </h4>
                <p className="text-sm text-neutral-light flex items-center gap-2 mt-1">
                  <HiOfficeBuilding className="text-brown-light" size={14} />
                  {exp.title}
                </p>
              </div>
              <Chip
                className="bg-rose-soft/50 text-brown-warm border-0 font-medium self-start sm:self-auto"
                size="sm"
                startContent={
                  <HiCalendar className="text-brown-light" size={14} />
                }
                variant="flat"
              >
                {exp.period}
              </Chip>
            </div>
          </div>
        </CardBody>
      </Card>
    ))}
  </div>
);

export const Experience = () => {
  return (
    <section
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream-500 via-cream-400 to-cream-500 relative overflow-hidden"
      id="experience"
    >
      <div className="absolute top-20 left-0 w-80 h-80 bg-rose-soft/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cream-700/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <Chip
            className="bg-cream-200/80 text-brown-warm border border-cream-600/30 px-4 py-2 mb-4 shadow-soft"
            size="sm"
            startContent={<HiBriefcase className="text-brown-warm" size={16} />}
            variant="flat"
          >
            Pengalaman
          </Chip>
          <h2 className="text-3xl md:text-5xl font-bold text-brown-warm mb-4 tracking-tight">
            Perjalanan Karir Saya
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto text-lg leading-relaxed">
            Pengalaman profesional dan organisasi yang telah membentuk keahlian
            saya.
          </p>
        </div>

        <div
          className="flex w-full flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Tabs
            aria-label="Experience Options"
            classNames={{
              base: "w-full",
              tabList:
                "gap-4 w-full max-w-lg mx-auto bg-cream-200/80 backdrop-blur-sm p-2 rounded-2xl shadow-soft border border-cream-600/30",
              cursor: "bg-brown-warm rounded-xl shadow-lg",
              tab: "px-6 py-3 font-medium text-sm",
              tabContent:
                "group-data-[selected=true]:text-white text-neutral-light",
              panel: "w-full pt-8",
            }}
            color="primary"
            defaultSelectedKey="work"
            radius="lg"
            variant="light"
          >
            <Tab
              key="work"
              title={
                <div className="flex items-center gap-2">
                  <MdWork size={18} />
                  <span>Pengalaman Kerja</span>
                </div>
              }
            >
              <WorkExperienceContent />
            </Tab>
            <Tab
              key="organization"
              title={
                <div className="flex items-center gap-2">
                  <MdGroups size={18} />
                  <span>Organisasi</span>
                </div>
              }
            >
              <OrgExperienceContent />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
