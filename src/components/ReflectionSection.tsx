import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Headphones, Sparkles } from "lucide-react";

export function ReflectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-amber-500" />
            <h2
              className="text-black"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Nuestra Reflexión
            </h2>
          </div>
          <p className="text-zinc-200 text-lg max-w-3xl mx-auto leading-relaxed">
            Escucha nuestro análisis profundo sobre el Subcaso Costa Caribe - Macrocaso 03 de la JEP, 
            donde exploramos las implicaciones de la justicia restaurativa y su impacto en la construcción de paz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 p-8 md:p-12 rounded-xl shadow-2xl border border-amber-700/30">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-8 h-8 text-amber-400" />
              <h3 
                style={{ fontFamily: 'Playfair Display, serif' }} 
                className="text-white text-2xl"
              >
                Subcaso Costa Caribe - Macrocaso 03 de la JEP
              </h3>
            </div>
            
            <div className="bg-black/40 rounded-lg p-6 mb-6">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/episode/6XsedagSrkG8qCtNUe9JdO?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>

            <div className="space-y-4 text-zinc-200">
              <p className="leading-relaxed text-lg">
                En este episodio, analizamos los detalles del caso del Batallón La Popa, 
                los falsos positivos en Cesar, y cómo la JEP está transformando la justicia 
                en Colombia a través de mecanismos restaurativos.
              </p>
              <div className="flex items-center gap-2 text-amber-400 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Duración: 6 minutos</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zinc-800/50 p-8 rounded-lg border-l-4 border-amber-600"
        >
          <p className="text-zinc-200 leading-relaxed text-center italic text-lg">
            "La justicia restaurativa no es un atajo, es un camino más difícil que transforma. 
            Escucha nuestra reflexión sobre cómo la JEP está construyendo paz desde el reconocimiento, 
            la reparación y la no repetición."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

