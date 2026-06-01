import { motion } from 'framer-motion';
import { MapPin, Camera, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32 bg-fan-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fan-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fan-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/images/camera.jpg"
                alt="Equipo profesional Foto Fan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fan-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-fan-gold text-fan-black px-6 py-4 rounded-sm shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Camera className="w-6 h-6" />
                <div>
                  <p className="text-xs font-bold tracking-wider uppercase">Tecnología</p>
                  <p className="text-sm font-semibold">Profesional</p>
                </div>
              </div>
            </motion.div>

            {/* Frame decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-fan-gold/30 rounded-tl-sm" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-fan-gold/30 rounded-br-sm" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-fan-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              El Alma de Foto Fan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-fan-cream mb-8">
              Sobre <span className="text-fan-gold">Foto Fan</span>
            </h2>
            
            <div className="space-y-6 text-fan-cream/80 leading-relaxed text-lg font-light">
              <p>
                Hola, soy <strong className="text-fan-cream font-semibold">Francisco</strong>. Siempre he pensado que las mejores fotografías no son las que se planean, sino las que te atrapan por sorpresa.
              </p>
              <p>
                Por eso en <span className="text-fan-gold font-medium">Foto Fan</span> no me vas a ver pidiéndote que mires a la cámara con una sonrisa forzada. Nuestro enfoque es el <strong className="text-fan-cream">fotoperiodismo de bodas</strong>: capturar la vida tal y como sucede.
              </p>
              <p>
                Me obsesionan las risas auténticas, los abrazos apretados y los bailes locos. Mi estudio está en <strong className="text-fan-cream">Mora</strong>, en plena provincia de Toledo, pero en Foto Fan nos movemos a donde esté vuestra historia.
              </p>
              <p className="text-fan-gold font-medium">
                En vuestra boda, quiero ser un invitado más que casualmente lleva una cámara.
              </p>
            </div>

            {/* Stats / Features */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-fan-cream/10">
              <div className="text-center">
                <Heart className="w-6 h-6 text-fan-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-fan-cream">200+</p>
                <p className="text-xs text-fan-cream/50 tracking-wider uppercase mt-1">Bodas</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-6 h-6 text-fan-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-fan-cream">10+</p>
                <p className="text-xs text-fan-cream/50 tracking-wider uppercase mt-1">Años</p>
              </div>
              <div className="text-center">
                <MapPin className="w-6 h-6 text-fan-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-fan-cream">Toledo</p>
                <p className="text-xs text-fan-cream/50 tracking-wider uppercase mt-1">Sede</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
