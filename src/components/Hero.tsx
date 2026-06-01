import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Fotografía de boda Foto Fan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fan-black/70 via-fan-black/40 to-fan-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-fan-black/60 via-transparent to-fan-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 border border-fan-gold/50 text-fan-gold text-xs tracking-[0.3em] uppercase rounded-full">
            Fotografía de Bodas — Toledo, España
          </span>
        </motion.div>

        {/* Main Logo / Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="text-fan-cream">FOTO</span>{' '}
            <span className="text-fan-gold">FAN</span>
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl md:text-4xl lg:text-5xl font-light text-fan-cream mb-6 leading-tight"
        >
          Menos posados.
          <br />
          <span className="text-fan-gold font-normal">Más abrazos reales.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-fan-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Capturamos la esencia de tu boda tal y como sucede: sin filtros, sin interrupciones, 
          solo tú y tus personas favoritas disfrutando al máximo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#historias"
            className="group px-8 py-4 bg-fan-gold text-fan-black font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-fan-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-fan-gold/20"
          >
            Descubrir el universo Foto Fan
          </a>
          <a
            href="https://wa.me/34687703654"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 border border-fan-cream/30 text-fan-cream font-medium tracking-wider uppercase text-sm rounded-sm hover:border-fan-gold hover:text-fan-gold transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-fan-cream/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
