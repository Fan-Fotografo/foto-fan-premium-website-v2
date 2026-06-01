import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', date: '', message: '' });
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-fan-dark overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fan-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-fan-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-fan-cream mb-6">
            Contacta con <span className="text-fan-gold">Foto Fan</span>
          </h2>
          <p className="text-fan-cream/60 max-w-2xl mx-auto text-lg font-light">
            Cuéntanos vuestra historia. Estamos en Mora, Toledo, pero nos movemos a donde esté vuestra boda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/34687703654"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-fan-black border border-fan-cream/5 rounded-sm hover:border-fan-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-fan-gold/10 flex items-center justify-center group-hover:bg-fan-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-fan-gold" />
                </div>
                <div>
                  <p className="text-xs text-fan-cream/50 tracking-wider uppercase mb-1">WhatsApp</p>
                  <p className="text-fan-cream font-medium">687 703 654</p>
                </div>
              </a>

              <a
                href="mailto:fanprofesional@gmail.com"
                className="group flex items-center gap-4 p-5 bg-fan-black border border-fan-cream/5 rounded-sm hover:border-fan-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-fan-gold/10 flex items-center justify-center group-hover:bg-fan-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-fan-gold" />
                </div>
                <div>
                  <p className="text-xs text-fan-cream/50 tracking-wider uppercase mb-1">Email</p>
                  <p className="text-fan-cream font-medium text-sm">fanprofesional@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-fan-black border border-fan-cream/5 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-fan-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-fan-gold" />
                </div>
                <div>
                  <p className="text-xs text-fan-cream/50 tracking-wider uppercase mb-1">Estudio</p>
                  <p className="text-fan-cream font-medium text-sm">Plaza Castilla-La Mancha, 5</p>
                  <p className="text-fan-cream/50 text-xs">Mora, 45400, Toledo</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-fan-black border border-fan-cream/5 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-fan-gold/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-fan-gold" />
                </div>
                <div>
                  <p className="text-xs text-fan-cream/50 tracking-wider uppercase mb-1">Horario</p>
                  <p className="text-fan-cream font-medium text-sm">Lun - Vie: 10h - 20h</p>
                  <p className="text-fan-cream/50 text-xs">Sábados: Con cita previa</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden border border-fan-cream/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.5!2d-3.775!3d39.684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd45d5e1a5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sPlaza%20Castilla-La%20Mancha%2C%205%2C%2045400%20Mora%2C%20Toledo!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
                width="100%"
                height="300"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Foto Fan - Plaza Castilla-La Mancha, 5, Mora, Toledo"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34687703654"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-fan-gold text-fan-black font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-fan-gold-light transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbenos por WhatsApp
              </a>
              <a
                href="mailto:fanprofesional@gmail.com"
                className="flex items-center justify-center gap-3 px-6 py-4 border border-fan-cream/20 text-fan-cream font-medium tracking-wider uppercase text-sm rounded-sm hover:border-fan-gold hover:text-fan-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                Enviar email
              </a>
            </div>

            <p className="text-fan-cream/40 text-sm text-center">
              Te invitamos a pasar por el estudio a ver álbumes físicos y conocernos en persona.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-fan-black border border-fan-cream/5 rounded-sm p-8 md:p-10">
              <h3 className="text-2xl font-bold text-fan-cream mb-2">Reserva tu fecha</h3>
              <p className="text-fan-cream/50 text-sm mb-8">
                Cuéntanos los detalles de vuestra boda y te contactaremos en menos de 24h.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-fan-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-fan-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-fan-cream mb-2">¡Mensaje enviado!</h4>
                  <p className="text-fan-cream/60">
                    Gracias por contactar con Foto Fan. Te responderemos muy pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs text-fan-cream/50 tracking-wider uppercase mb-2">
                      Nombre de los novios
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-fan-dark border border-fan-cream/10 rounded-sm px-4 py-3 text-fan-cream placeholder-fan-cream/30 focus:outline-none focus:border-fan-gold/50 transition-colors"
                      placeholder="Ej: Ana y Carlos"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-fan-cream/50 tracking-wider uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-fan-dark border border-fan-cream/10 rounded-sm px-4 py-3 text-fan-cream placeholder-fan-cream/30 focus:outline-none focus:border-fan-gold/50 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-fan-cream/50 tracking-wider uppercase mb-2">
                      Fecha de la boda
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-fan-dark border border-fan-cream/10 rounded-sm px-4 py-3 text-fan-cream placeholder-fan-cream/30 focus:outline-none focus:border-fan-gold/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-fan-cream/50 tracking-wider uppercase mb-2">
                      Cuéntanos vuestra historia
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-fan-dark border border-fan-cream/10 rounded-sm px-4 py-3 text-fan-cream placeholder-fan-cream/30 focus:outline-none focus:border-fan-gold/50 transition-colors resize-none"
                      placeholder="¿Dónde será la boda? ¿Qué tenéis en mente?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-fan-gold text-fan-black font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-fan-gold-light transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar mensaje a Foto Fan
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
