import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { useState, useEffect } from "react";

export const PortfolioNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = menuItems.map((item) => item.href.slice(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      className={`fixed top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-soft border-b border-cream-600/20"
          : "bg-transparent"
      }`}
      height="5rem"
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-brown-warm"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="hidden lg:flex font-semibold text-lg tracking-wide text-brown-warm">
            SITI SOLIHAH
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand className="mr-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-pastel to-cream-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <p className="font-semibold text-xl tracking-wide text-brown-warm">
              SITI SOLIHAH
            </p>
          </div>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <button
              className={`relative text-sm font-medium transition-all duration-300 py-2 ${
                activeSection === item.href.slice(1)
                  ? "text-brown-warm"
                  : "text-neutral-light hover:text-brown-warm"
              }`}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-rose-pastel rounded-full transition-transform duration-300 origin-left ${
                  activeSection === item.href.slice(1)
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarItem>
          <Button
            className="bg-brown-warm text-white font-medium shadow-lg shadow-brown-warm/20 hover:shadow-xl hover:shadow-brown-warm/30 transition-all duration-300 hover:scale-105"
            radius="full"
            size="md"
            onPress={() => scrollToSection("#contact")}
          >
            Hire Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-cream-500/98 backdrop-blur-lg pt-8 gap-0">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            className="border-b border-cream-600/30 last:border-0"
          >
            <button
              className={`w-full text-left py-4 text-lg font-medium transition-colors duration-300 ${
                activeSection === item.href.slice(1)
                  ? "text-brown-warm"
                  : "text-neutral-light"
              }`}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
