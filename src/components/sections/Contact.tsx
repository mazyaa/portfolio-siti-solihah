import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiSparkles,
  HiHeart,
} from "react-icons/hi";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  buttonHref: string;
  buttonColor: string;
  delay: string;
  isExternal?: boolean;
}

const ContactCard = ({
  icon,
  title,
  value,
  buttonText,
  buttonIcon,
  buttonHref,
  buttonColor,
  delay,
  isExternal = false,
}: ContactCardProps) => (
  <Card
    className="bg-cream-100 border border-cream-600/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <CardBody className="flex flex-col items-center justify-center p-8">
      <div className="w-16 h-16 bg-gradient-to-br from-cream-400 to-cream-500 rounded-2xl flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform duration-300 text-brown-warm">
        {icon}
      </div>
      <h4 className="font-bold text-neutral-dark text-lg mb-2">{title}</h4>
      <p className="text-sm text-neutral-light mb-6 text-center">{value}</p>
      <Button
        as="a"
        className={`${buttonColor} font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6`}
        href={buttonHref}
        radius="full"
        rel={isExternal ? "noopener noreferrer" : undefined}
        size="md"
        startContent={buttonIcon}
        target={isExternal ? "_blank" : undefined}
      >
        {buttonText}
      </Button>
    </CardBody>
  </Card>
);

export const Contact = () => {
  return (
    <section
      className="py-24 md:py-32 px-6 bg-cream-200 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream-500 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-soft/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cream-600/30 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <Chip
            className="bg-rose-soft/60 text-brown-warm border-0 px-4 py-2 mb-4"
            data-aos="fade-up"
            size="sm"
            startContent={<HiMail className="text-brown-warm" size={16} />}
            variant="flat"
          >
            Hubungi Saya
          </Chip>
          <h2
            className="text-3xl md:text-5xl font-bold text-brown-warm mb-4 tracking-tight"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Mari Berkolaborasi
          </h2>
          <p
            className="text-neutral-light max-w-2xl mx-auto text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu
            untuk menghubungi saya melalui channel berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            buttonColor="bg-brown-warm text-white shadow-brown-warm/25"
            buttonHref="mailto:ssolihah467@gmail.com"
            buttonIcon={<HiMail size={18} />}
            buttonText="Kirim Email"
            delay="100"
            icon={<FaEnvelope size={28} />}
            title="Email"
            value="ssolihah467@gmail.com"
          />
          <ContactCard
            isExternal
            buttonColor="bg-green-600 text-white shadow-green-600/25"
            buttonHref="https://wa.me/6287722033963"
            buttonIcon={<HiPhone size={18} />}
            buttonText="Chat WhatsApp"
            delay="200"
            icon={<FaWhatsapp size={28} />}
            title="WhatsApp"
            value="+62 877-2203-3963"
          />
          <ContactCard
            isExternal
            buttonColor="bg-cream-600 text-brown-warm shadow-cream-600/25 hover:bg-brown-warm hover:text-white"
            buttonHref="https://www.google.com/maps/place/banten/data=!4m2!3m1!1s0x2e418ad6c40db999:0xbed39aab8b1ab3e9?sa=X&ved=1t:155783&ictx=111"
            buttonIcon={<HiLocationMarker size={18} />}
            buttonText="Lihat Peta"
            delay="300"
            icon={<FaMapMarkerAlt size={28} />}
            title="Lokasi"
            value="Banten, Indonesia"
          />
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Card className="bg-gradient-to-br from-cream-400 to-cream-300 border border-cream-600/30 shadow-soft-lg inline-block">
            <CardBody className="px-12 py-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <HiSparkles className="text-brown-warm" size={28} />
                <h3 className="text-2xl font-bold text-neutral-dark">
                  Ready to Start?
                </h3>
                <HiSparkles className="text-brown-warm" size={28} />
              </div>
              <p className="text-neutral-light mb-6 max-w-md">
                Saya selalu terbuka untuk peluang baru dan kolaborasi yang
                menarik.
              </p>
              <Button
                as="a"
                className="bg-brown-warm text-white font-medium shadow-lg shadow-brown-warm/25 hover:shadow-xl hover:shadow-brown-warm/35 hover:scale-105 transition-all duration-300 px-10"
                href="mailto:ssolihah467@gmail.com"
                radius="full"
                size="lg"
                startContent={<HiHeart size={18} />}
              >
                Let&apos;s Talk
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
