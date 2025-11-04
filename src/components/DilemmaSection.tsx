import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Scale, Heart } from "lucide-react";

export function DilemmaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen bg-stone-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 text-zinc-900"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          ¿Justicia es Cárcel o Reparación?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16 text-zinc-700 text-lg max-w-3xl mx-auto"
        >
          El modelo de la JEP es restaurativo, no punitivo. Esta es la diferencia clave.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Justicia Punitiva */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-800 p-8 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-red-400" />
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-2xl">
                Justicia Retributiva (Ordinaria)
              </h3>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Se centra en el pasado, identifica una ley rota y pregunta: ¿Quién lo hizo? ¿Qué castigo merece (cárcel)? La víctima es, a menudo, un mero testigo.
            </p>
          </motion.div>

          {/* Justicia Restaurativa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-amber-700 to-orange-800 p-8 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-amber-200" />
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-2xl">
                Justicia Restaurativa (JEP)
              </h3>
            </div>
            <p className="text-amber-50 leading-relaxed">
              Se centra en el futuro y en el daño causado. Pregunta: ¿Quién fue herido? ¿Cómo reparamos el daño? La víctima es participante activa y la sanción <em>es</em> la reparación.
            </p>
          </motion.div>
        </div>

        {/* Nuestra Postura */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-amber-600 p-8 md:p-12 rounded-lg text-center"
        >
          <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-2xl md:text-3xl mb-4">
            Nuestra Postura
          </h3>
          <p className="text-amber-50 text-lg leading-relaxed max-w-4xl mx-auto">
            Creemos que la verdadera justicia no se mide en años de cárcel, sino en la capacidad de 
            restaurar dignidad, reconstruir territorios y transformar el dolor en memoria activa. 
            La justicia restaurativa de la JEP representa una oportunidad histórica para que Colombia 
            construya paz desde el reconocimiento, la reparación y la no repetición.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
