import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function VoicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 text-white"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          El Compromiso de los Responsables
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/156xO5x9j3Y?si=ykgpRvo6xqUiA2c0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4">
              <p className="text-zinc-400 text-sm italic">
                Audiencia de Reconocimiento de Responsabilidad, Macrocaso 03, JEP.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-zinc-300"
          >
            <h3 
              style={{ fontFamily: 'Playfair Display, serif' }} 
              className="text-amber-500 text-3xl"
            >
              ¿Qué, Cómo y Quiénes Restauran?
            </h3>
            
            <p className="leading-relaxed">
              El TOAR solo es posible porque 12 miembros retirados del Ejército, incluyendo altos oficiales, reconocieron su responsabilidad. Este es el primer sonido de la reparación: la verdad dicha en voz alta en una audiencia pública.
            </p>

            <p className="leading-relaxed">
              El TOAR solo es posible porque 12 miembros retirados del Ejército reconocieron su responsabilidad. Se restaura la verdad, la dignidad y el territorio. ¿Cómo? A través del trabajo físico y espiritual. ¿Quiénes restauran? Los mismos que causaron el daño, como un compromiso real con las víctimas y la sociedad.
            </p>
          </motion.div>
        </div>

        {/* Additional Context */}

      </div>
    </section>
  );
}
