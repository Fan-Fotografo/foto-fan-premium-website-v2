import { motion } from 'framer-motion';
import { Calendar, Camera, Image, Gift, Star, Check } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Antes del gran día',
    description: 'Nos conocemos, hablamos de vuestra historia y planificamos los momentos clave. Sin estrés, sin prisas. Quiero entender qué es lo que más os emociona.',
  },
  {
    icon: Camera,
    title: 'Durante la boda',
    description: 'Soy invisible cuando debo serlo y presente cuando cuenta. No interrumpo, no poso, solo capturo la magia natural de cada instante con el sello Foto Fan.',
  },
  {
    icon: Image,
    title: 'Después de la boda',
    description: 'Selección cuidadosa de cada imagen, edición artística con mi estilo fotoperiodístico, y entrega en galería privada online para que la disfrutéis desde cualquier lugar.',
  },
];

const packages = [
  {
    name: 'Esencia Foto Fan',
    description: 'Lo esencial para no perderse nada',
    features: [
      'Cobertura de 6 horas',
      'Fotógrafo profesional',
      'Galería online privada',
      '200+ fotos editadas',
      'Entrega en 30 días',
    ],
    highlight: false,
  },
  {
    name: 'Historia Completa',
    description: 'Desde los preparativos hasta la fiesta',
    features: [
      'Cobertura de 10 horas',
      'Fotógrafo profesional',
      'Galería online privada',
      '400+ fotos editadas',
      'Álbum digital de lujo',
      'Entrega en 20 días',
      'Sesión pre-boda incluida',
    ],
    highlight: true,
  },
  {
    name: 'Experiencia Total',
    description: 'Todo lo que soñasteis y más',
    features: [
      'Cobertura ilimitada',
      'Fotógrafo + Asistente',
      'Galería online privada',
      '600+ fotos editadas',
      'Álbum físico de lujo',
      'Álbum digital premium',
      'Sesión pre-boda',
      'Entrega en 15 días',
      'Vídeo resumen 3-5 min',
    ],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32 bg-fan-black">
      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-fan-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            Cómo trabajamos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-fan-cream mb-6">
            La Experiencia <span className="text-fan-gold">Foto Fan</span>
          </h2>
          <p className="text-fan-cream/60 max-w-2xl mx-auto text-lg font-light">
            Un proceso pensado para que disfrutéis cada momento sin preocuparos por nada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-fan-dark border border-fan-cream/5 rounded-sm p-8 h-full hover:border-fan-gold/30 transition-colors duration-500">
                <div className="w-14 h-14 rounded-full bg-fan-gold/10 flex items-center justify-center mb-6 group-hover:bg-fan-gold/20 transition-colors">
                  <step.icon className="w-7 h-7 text-fan-gold" />
                </div>
                <div className="text-fan-gold/40 text-5xl font-bold absolute top-6 right-6">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-fan-cream mb-4">{step.title}</h3>
                <p className="text-fan-cream/60 leading-relaxed font-light">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-fan-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            Tarifas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-fan-cream mb-6">
            Elige tu <span className="text-fan-gold">experiencia</span>
          </h2>
          <p className="text-fan-cream/60 max-w-2xl mx-auto text-lg font-light">
            Cada boda es única. Elige el paquete que mejor se adapte a vuestra historia 
            y consultadnos para personalizarlo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-sm overflow-hidden ${
                pkg.highlight
                  ? 'bg-fan-gold text-fan-black scale-105 shadow-2xl shadow-fan-gold/20 z-10'
                  : 'bg-fan-dark border border-fan-cream/5'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-fan-black text-fan-gold text-center py-2 text-xs font-bold tracking-widest uppercase">
                  <Star className="w-3 h-3 inline mr-1" />
                  Más solicitado
                </div>
              )}
              
              <div className={`p-8 ${pkg.highlight ? 'pt-14' : ''}`}>
                <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-fan-black' : 'text-fan-cream'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.highlight ? 'text-fan-black/70' : 'text-fan-cream/50'}`}>
                  {pkg.description}
                </p>
                
                <div className="mb-8">
                  <span className={`text-3xl font-bold ${pkg.highlight ? 'text-fan-black' : 'text-fan-cream'}`}>
                    Consultar
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-fan-black' : 'text-fan-gold'}`} />
                      <span className={`text-sm ${pkg.highlight ? 'text-fan-black/80' : 'text-fan-cream/70'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/34687703654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-sm font-semibold tracking-wider uppercase text-sm transition-colors ${
                    pkg.highlight
                      ? 'bg-fan-black text-fan-gold hover:bg-fan-dark'
                      : 'bg-fan-gold text-fan-black hover:bg-fan-gold-light'
                  }`}
                >
                  Solicitar presupuesto
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gift note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-fan-dark border border-fan-gold/20 rounded-full">
            <Gift className="w-5 h-5 text-fan-gold" />
            <span className="text-fan-cream/70 text-sm">
              ¿Buscas un regalo original? Consulta nuestros <strong className="text-fan-gold">vouchers de regalo</strong> para sesiones fotográficas.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
