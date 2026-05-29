"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Historia", href: "#historia" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    id: "vhs",
    title: "Digitalización de Cintas VHS",
    subtitle: "Tus recuerdos en videocasete, eternos en digital",
    description:
      "Convertimos tus cintas VHS, Hi8, MiniDV y Betamax en archivos digitales de alta calidad. Cada cinta es tratada con cuidado artesanal, limpiada y transferida fotograma a fotograma para que nada se pierda.",
    price: "Desde 20€ — 40€",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 4v4" />
        <path d="M2 8h20" />
        <path d="M6 4v4" />
      </svg>
    ),
  },
  {
    id: "fotos",
    title: "Revelado de Fotos",
    subtitle: "Cada imagen merece nacer con luz propia",
    description:
      "Revelamos tus fotografías con equipos profesionales y químicos de la más alta calidad. Tus recuerdos impresos merecen un tratamiento cuidadoso, con colores fieles y una nitidez que el tiempo respetará.",
    price: "0,50€ por foto",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-4.5-4.5L12 15" />
        <path d="M3 16l4.5-4.5L15 19" />
      </svg>
    ),
  },
  {
    id: "negativos",
    title: "Escaneo de Negativos",
    subtitle: "Lo que el ojo no ve, nosotros lo revelamos",
    description:
      "Digitalizamos negativos y carretes analógicos con escáneres de alta resolución. Recuperamos la luz, el detalle y la emoción de fotografías que creías perdidas en el tiempo.",
    price: "0,50€ por negativo",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    id: "restauracion",
    title: "Restauración Digital",
    subtitle: "Devolvemos la vida a tus fotografías dañadas",
    description:
      "Restauramos digitalmente fotografías dañadas, desgastadas o descoloridas. Corregimos roturas, manchas, decoloración y pérdida de detalle con técnicas profesionales que respetan la esencia original.",
    price: "Desde 10€ — 20€",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "domicilio",
    title: "Recogida y Entrega a Domicilio",
    subtitle: "Sin moverte de casa. Tus recuerdos viajan seguros",
    description:
      "Recogemos tus cintas, fotos y negativos directamente en tu hogar y te los devolvemos una vez digitalizados. Con envases protectores y seguros para que tus recuerdos viajen sin riesgo.",
    price: "Desde 12€",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Trae tus recuerdos",
    description:
      "Acércate a nuestro estudio en Mora o solicita la recogida a domicilio. Cintas VHS, fotos, negativos… todo es bienvenido.",
  },
  {
    number: "02",
    title: "Restauramos y digitalizamos",
    description:
      "Con cuidado artesanal y tecnología profesional, convertimos cada recuerdo en un archivo digital eterno.",
  },
  {
    number: "03",
    title: "Recibe tu archivo digital",
    description:
      "Te entregamos tus recuerdos preservados en formato digital, listos para compartir, ver y atesorar para siempre.",
  },
];

const STATS = [
  { number: "15+", label: "años de experiencia" },
  { number: "5000+", label: "recuerdos preservados" },
  { number: "98%", label: "clientes satisfechos" },
  { number: "Local", label: "negocio de confianza" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white text-matte-black font-sans overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className={`text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase transition-all duration-500 ${
                scrolled ? "text-matte-black" : "text-white"
              }`}
            >
              Foto Fan
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 hover:text-gold ${
                    scrolled ? "text-matte-black/70" : "text-white/80"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-matte-black text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Escríbenos</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${
                scrolled ? "text-matte-black" : "text-white"
              }`}
              aria-label="Menú"
            >
              <span
                className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-8 pt-2 space-y-2 bg-warm-white/95 backdrop-blur-xl border-t border-black/5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm tracking-widest uppercase text-matte-black/70 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 w-full px-5 py-3 bg-gold text-matte-black text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-matte-black">
        {/* Cinematic overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent z-10" />

        {/* Animated grain texture */}
        <div className="absolute inset-0 opacity-[0.04] z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

        {/* Hero background */}
        <div className="absolute inset-0 z-[1]">
          <div className="w-full h-full bg-gradient-to-br from-charcoal via-black to-charcoal" />
        </div>

        {/* Gold accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/60 to-transparent z-20" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <p className="text-gold/80 text-xs lg:text-sm tracking-[0.3em] uppercase mb-6 lg:mb-8 font-light">
              Estudio de Preservación de Memorias
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light tracking-tight text-white leading-[1.05] mb-8 animate-fade-in-up">
            Tus recuerdos
            <br />
            <span className="italic font-serif text-gold">merecen</span>{" "}
            <span className="font-light">siempre.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animation-delay-200">
            En FOTO FAN convertimos tus cintas VHS, fotos y negativos en archivos digitales eternos.
            <br className="hidden md:block" />
            Porque hay recuerdos que el tiempo no debe borrar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-400">
            <a
              href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-matte-black text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
            >
              <span>Solicitar información</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 text-sm tracking-[0.15em] uppercase font-light hover:border-white/40 hover:text-white transition-all duration-500"
            >
              Nuestros servicios
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-fade-in animation-delay-600">
          <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-light">Desplázate</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="bg-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-light text-gold mb-1">{stat.number}</p>
                <p className="text-white/50 text-xs tracking-[0.15em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="servicios" className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
              Servicios Premium
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-matte-black leading-tight mb-6">
              Preservamos lo que el tiempo no puede reemplazar
            </h2>
            <p className="text-matte-black/50 text-base lg:text-lg leading-relaxed max-w-xl mx-auto font-light">
              Cada servicio está diseñado con un solo propósito: que tus recuerdos vivan para siempre con la máxima calidad y el mayor cuidado.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white p-8 lg:p-10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 border border-black/5 hover:border-gold/20"
              >
                {/* Gold accent on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gold/0 group-hover:bg-gold/60 transition-all duration-700" />

                <div className="text-gold/70 mb-6 group-hover:text-gold transition-colors duration-500">
                  {service.icon}
                </div>

                <h3 className="text-xl lg:text-2xl font-medium text-matte-black mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gold/70 font-serif italic mb-4">
                  {service.subtitle}
                </p>
                <p className="text-matte-black/50 text-sm leading-relaxed font-light mb-6">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <span className="text-sm tracking-[0.1em] text-matte-black/60 font-light">{service.price}</span>
                  <a
                    href={`https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20${encodeURIComponent(service.title.toLowerCase())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.15em] uppercase text-gold group-hover:text-matte-black transition-colors duration-300 font-medium"
                  >
                    Consultar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EMOTIONAL STORYTELLING ===== */}
      <section id="historia" className="relative py-28 lg:py-40 bg-matte-black overflow-hidden">
        {/* Cinematic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Emotional Text */}
            <div>
              <p className="text-gold/60 text-xs tracking-[0.25em] uppercase mb-4 font-medium">
                La historia de tus recuerdos
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
                El tiempo no espera.
                <br />
                <span className="italic font-serif text-gold">Tus recuerdos, tampoco.</span>
              </h2>

              <div className="space-y-5 text-white/50 text-base lg:text-lg leading-relaxed font-light">
                <p>
                  Cada día que pasa, tus cintas VHS se degradan un poco más. El polvo, la humedad y el tiempo 
                  borran lentamente lo que un día grabaste con tanta emoción.
                </p>
                <p>
                  Esa primera comunión. La boda de tus padres. Los cumpleaños de tus hijos cuando eran pequeños. 
                  Las vacaciones familiares que marcaron tu infancia.
                </p>
                <p className="text-white/70">
                  No son solo cintas. Son historias. Son emociones. Es tu historia familiar esperando ser preservada.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <blockquote className="text-white/40 text-sm italic font-serif leading-relaxed">
                  "Lo que no se preserva, se pierde para siempre. Pero lo que se digitaliza, vive por generaciones."
                </blockquote>
              </div>
            </div>

            {/* Right: Visual metaphor */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-charcoal via-black to-charcoal border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6 p-12">
                    {/* Decorative frame */}
                    <div className="w-20 h-px bg-gold/40 mx-auto" />
                    <p className="text-gold/30 text-xs tracking-[0.3em] uppercase font-light">
                      Preservado para siempre
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M10 4v4" />
                          <path d="M2 8h20" />
                        </svg>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                        </svg>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-20 h-px bg-gold/40 mx-auto" />
                  </div>
                </div>
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-gold/30" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-gold/30" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-gold/30" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-gold/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY FOTO FAN ===== */}
      <section id="nosotros" className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
              Por qué FOTO FAN
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-matte-black leading-tight mb-6">
              No solo digitalizamos.
              <br />
              <span className="italic font-serif text-gold">Cuidamos.</span>
            </h2>
            <p className="text-matte-black/50 text-base lg:text-lg leading-relaxed max-w-xl mx-auto font-light">
              Detrás de cada cinta, cada foto y cada negativo, hay una historia que merece respeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
            {/* Left column */}
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-matte-black mb-2">Negocio local de confianza</h3>
                  <p className="text-matte-black/50 text-sm leading-relaxed font-light">
                    Estamos en Mora, Toledo. Nos conoces, nos saludas por la calle. Detrás de FOTO FAN hay 
                    personas reales que cuidan tus recuerdos como si fueran propios.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-matte-black mb-2">Trato personal y cercano</h3>
                  <p className="text-matte-black/50 text-sm leading-relaxed font-light">
                    No somos una franquicia ni un servicio automatizado. Te atenderemos personalmente, 
                    resolveremos tus dudas y te guiaremos en cada paso.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-matte-black mb-2">Proceso profesional y cuidadoso</h3>
                  <p className="text-matte-black/50 text-sm leading-relaxed font-light">
                    Utilizamos equipos profesionales y técnicas de preservación digital para garantizar 
                    la máxima calidad en cada conversión.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-matte-black mb-2">Más de 15 años protegiendo recuerdos</h3>
                  <p className="text-matte-black/50 text-sm leading-relaxed font-light">
                    La experiencia no se improvisa. Llevamos más de una década ayudando a familias de Mora, 
                    Toledo y toda la comarca a preservar su legado emocional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-matte-black text-warm-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-charcoal transition-all duration-500"
            >
              <span>Habla con nosotros</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section id="proceso" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black/50 to-charcoal" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-gold/60 text-xs tracking-[0.25em] uppercase mb-4 font-medium">
              Cómo funciona
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Tres pasos sencillos para
              <br />
              <span className="italic font-serif text-gold">preservar tus recuerdos</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />

            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="relative text-center group">
                <div className="relative z-10 w-20 h-20 mx-auto mb-8 rounded-full border border-gold/30 flex items-center justify-center bg-charcoal group-hover:border-gold/60 transition-all duration-500">
                  <span className="text-2xl font-light text-gold">{step.number}</span>
                </div>
                <h3 className="text-xl lg:text-2xl text-white font-medium mb-4">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Reassurance */}
          <div className="mt-16 lg:mt-20 text-center">
            <p className="text-white/30 text-sm tracking-[0.1em] font-light">
              Todo el proceso es supervisado personalmente. Tus recuerdos nunca están solos.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PREMIUM CTA SECTION (WHATSAPP) ===== */}
      <section className="relative py-28 lg:py-40 bg-matte-black overflow-hidden">
        {/* Cinematic lighting effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.04] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

        {/* Gold borders */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <p className="text-gold/60 text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Da el primer paso
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-white leading-tight mb-8 animate-fade-in-up">
            ¿Listo para preservar
            <br />
            <span className="italic font-serif text-gold">tus recuerdos</span> para siempre?
          </h2>

          <p className="text-white/50 text-base lg:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animation-delay-200">
            Escríbenos por WhatsApp y te responderemos personalmente. Sin prisas, sin compromiso.
            Solo el cuidado que tus recuerdos merecen.
          </p>

          <div className="animate-fade-in-up animation-delay-400">
            <a
              href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-matte-black text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Escríbenos por WhatsApp</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT & LOCATION ===== */}
      <section id="contacto" className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Contact Info */}
            <div>
              <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
                Visítanos
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-matte-black leading-tight mb-10">
                Tu estudio de confianza
                <br />
                <span className="italic font-serif text-gold">en Mora, Toledo</span>
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/20 text-gold">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-matte-black/40 tracking-[0.1em] uppercase mb-1 font-medium">Dirección</p>
                    <p className="text-matte-black leading-relaxed">
                      Plaza Castilla La Mancha Nº5
                      <br />
                      Mora, Toledo
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/20 text-gold">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-matte-black/40 tracking-[0.1em] uppercase mb-1 font-medium">Teléfono</p>
                    <a
                      href="tel:687703654"
                      className="text-matte-black hover:text-gold transition-colors leading-relaxed"
                    >
                      687 70 36 54
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/20 text-gold">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-matte-black/40 tracking-[0.1em] uppercase mb-1 font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-matte-black hover:text-gold transition-colors leading-relaxed"
                    >
                      687 70 36 54
                    </a>
                  </div>
                </div>

                {/* Hours - suggested */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/20 text-gold">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-matte-black/40 tracking-[0.1em] uppercase mb-1 font-medium">Horario</p>
                    <p className="text-matte-black/50 text-sm leading-relaxed font-light">
                      Te recomendamos contactarnos antes de visitarnos
                      <br />
                      para asegurarte de que te atenderemos personalmente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5">
                <a
                  href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-matte-black text-warm-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-charcoal transition-all duration-500"
                >
                  <span>Escíbenos ahora</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Map placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-beige/50 border border-black/5 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-16 h-16 mx-auto mb-4 border border-gold/30 flex items-center justify-center text-gold">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <p className="text-matte-black/40 text-sm font-light mb-2">
                      Plaza Castilla La Mancha Nº5
                    </p>
                    <p className="text-matte-black/30 text-xs font-light">
                      Mora, Toledo
                    </p>
                    <div className="mt-6 w-24 h-px bg-gold/30 mx-auto" />
                    <p className="text-matte-black/30 text-xs tracking-[0.1em] uppercase mt-4 font-light">
                      Te esperamos
                    </p>
                  </div>
                </div>
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-gold/40" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-gold/40" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-gold/40" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-gold/40" />

              {/* Map link suggestion */}
              <div className="mt-4 text-right">
                <a
                  href="https://maps.google.com/?q=Plaza+Castilla+La+Mancha+5+Mora+Toledo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-matte-black/30 hover:text-gold tracking-[0.1em] uppercase transition-colors font-light"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-matte-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <p className="text-2xl font-light tracking-[0.2em] uppercase text-white mb-4">
                Foto Fan
              </p>
              <p className="text-white/30 text-sm leading-relaxed font-light max-w-xs">
                Estudio de preservación de memorias en Mora, Toledo. Cuidamos tus recuerdos como si fueran nuestros.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-white/40 text-xs tracking-[0.15em] uppercase mb-5 font-medium">
                Navegación
              </p>
              <div className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-white/50 text-sm hover:text-gold transition-colors font-light"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white/40 text-xs tracking-[0.15em] uppercase mb-5 font-medium">
                Contacto
              </p>
              <div className="space-y-3 text-white/50 text-sm font-light">
                <p>Plaza Castilla La Mancha Nº5</p>
                <p>Mora, Toledo</p>
                <a href="tel:687703654" className="block hover:text-gold transition-colors">
                  687 70 36 54
                </a>
                <a
                  href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gold hover:text-gold-light transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs font-light">
              © {new Date().getFullYear()} FOTO FAN — Estudio de Preservación de Memorias
            </p>
            <p className="text-white/10 text-[10px] tracking-[0.15em] uppercase font-light">
              Mora · Toledo
            </p>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a
        href="https://wa.me/34687703654?text=Hola%20FOTO%20FAN,%20quiero%20información%20sobre%20digitalizar%20mis%20cintas%20o%20fotos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gold text-matte-black flex items-center justify-center shadow-2xl hover:bg-gold-light hover:scale-105 transition-all duration-300 animate-fade-in"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
