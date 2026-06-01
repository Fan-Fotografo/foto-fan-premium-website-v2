import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Eye } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'Ana & Carlos',
    location: 'Toledo',
    date: 'Junio 2024',
    image: '/images/portfolio1.jpg',
    description: 'Desde los preparativos nerviosos hasta el baile más loco de la noche. Una boda llena de risas auténticas y abrazos sin fin.',
    category: 'Boda Completa',
  },
  {
    id: 2,
    title: 'María & Javier',
    location: 'Madrid',
    date: 'Septiembre 2024',
    image: '/images/portfolio2.jpg',
    description: 'Ceremonia íntima en una iglesia histórica. El momento exacto en que se vieron por primera vez quedará para siempre.',
    category: 'Ceremonia',
  },
  {
    id: 3,
    title: 'Lucía & Andrés',
    location: 'Mora, Toledo',
    date: 'Agosto 2024',
    image: '/images/portfolio3.jpg',
    description: 'Fiesta sin fin. Confeti, bailes locos y una energía que contagió a todos los invitados hasta el amanecer.',
    category: 'Fiesta',
  },
  {
    id: 4,
    title: 'Elena & Pedro',
    location: 'Ciudad Real',
    date: 'Mayo 2024',
    image: '/images/portfolio4.jpg',
    description: 'Detalles que cuentan historias. Cada anillo, cada mano entrelazada, cada mirada cómplice capturada en su momento exacto.',
    category: 'Detalles',
  },
  {
    id: 5,
    title: 'Carmen & Luis',
    location: 'Toledo',
    date: 'Julio 2024',
    image: '/images/portfolio5.jpg',
    description: 'La tarta, los brindis, las carcajadas. Esos momentos que parecen pequeños pero son los que más recuerdas.',
    category: 'Celebración',
  },
  {
    id: 6,
    title: 'Sofía & Daniel',
    location: 'Talavera',
    date: 'Octubre 2024',
    image: '/images/portfolio6.jpg',
    description: 'Salida mágica entre bengalas y luces. Un final de cuento para un día que nunca olvidarán.',
    category: 'Momento Único',
  },
];

export default function Portfolio() {
  const [selectedStory, setSelectedStory] = useState<(typeof stories)[0] | null>(null);

  return (
    <section id="historias" className="relative py-24 md:py-32 bg-fan-black">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-fan-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-fan-cream mb-6">
            Historias <span className="text-fan-gold">by Foto Fan</span>
          </h2>
          <p className="text-fan-cream/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Cada boda es una historia única. Aquí te mostramos algunas de las nuestras, 
            capturadas con el sello fotoperiodístico de Foto Fan.
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedStory(story)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={story.image}
                  alt={`${story.title} - Foto Fan`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-fan-black via-fan-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-fan-gold text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {story.category}
                </span>
                <h3 className="text-2xl font-bold text-fan-cream mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {story.title}
                </h3>
                <p className="text-fan-cream/60 text-sm font-light translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {story.location} · {story.date}
                </p>
                
                {/* View icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-fan-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <Eye className="w-5 h-5 text-fan-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-fan-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl w-full bg-fan-dark rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-fan-black/60 flex items-center justify-center text-fan-cream hover:bg-fan-gold hover:text-fan-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-fan-gold text-xs tracking-widest uppercase mb-3">
                    {selectedStory.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-fan-cream mb-4">
                    {selectedStory.title}
                  </h3>
                  <p className="text-fan-cream/60 text-sm mb-2">
                    {selectedStory.location} · {selectedStory.date}
                  </p>
                  <p className="text-fan-cream/80 leading-relaxed mb-8">
                    {selectedStory.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://wa.me/34687703654"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-fan-gold text-fan-black font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-fan-gold-light transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      Quiero algo así
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
