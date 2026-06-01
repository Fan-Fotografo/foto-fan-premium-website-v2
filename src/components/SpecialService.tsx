import { motion } from 'framer-motion';
import { Monitor, Smartphone, Film, MessageCircle } from 'lucide-react';

export default function SpecialService() {
  return (
    <section className="relative py-20 md:py-28 bg-fan-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-fan-dark border border-fan-gold/20 rounded-sm p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-fan-gold/5 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-fan-gold/5 rounded-tr-full" />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 15, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-fan-gold/10 border border-fan-gold/20 flex items-center justify-center mx-auto mb-6"
            >
              <Film className="w-8 h-8 text-fan-gold" />
            </motion.div>

            <span className="text-fan-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              Servicio Especial Foto Fan
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fan-cream mb-6 leading-tight">
              En <span className="text-fan-gold">Foto Fan</span> salvamos tus recuerdos antes de que se pierdan
            </h2>

            <p className="text-fan-cream/70 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-10">
              ¿Tienes vídeos familiares antiguos o teléfonos viejos guardados en un cajón? 
              En el estudio <strong className="text-fan-cream">Foto Fan</strong> convertimos tus viejas cintas VHS 
              y formatos antiguos a digital. Además, <strong className="text-fan-cream">recuperamos tus fotografías 
              perdidas de dispositivos móviles antiguos</strong> para que puedas volver a disfrutarlas en tu móvil 
              actual, ordenador o TV.
            </p>

            {/* Service icons */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-10">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-fan-black border border-fan-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Film className="w-5 h-5 text-fan-gold" />
                </div>
                <p className="text-fan-cream/60 text-xs">VHS a Digital</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-fan-black border border-fan-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-5 h-5 text-fan-gold" />
                </div>
                <p className="text-fan-cream/60 text-xs">Móviles antiguos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-fan-black border border-fan-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-5 h-5 text-fan-gold" />
                </div>
                <p className="text-fan-cream/60 text-xs">TV y ordenador</p>
              </div>
            </div>

            <a
              href="https://wa.me/34687703654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-fan-gold text-fan-black font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-fan-gold-light transition-colors shadow-lg shadow-fan-gold/20"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar precios en Foto Fan vía WhatsApp
            </a>

            <p className="text-fan-cream/40 text-sm mt-4">
              ¡Consúltanos precios sin compromiso!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
