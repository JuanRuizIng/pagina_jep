import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart } from "lucide-react";

export function PsychosocialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen bg-stone-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Heart className="w-12 h-12 text-amber-700 mx-auto mb-6" />
          <h2
            className="mb-6 text-zinc-900"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            El Enfoque Psicosocial: Sanar la Herida
          </h2>
          <p className="text-zinc-700 text-lg mb-12">
            ¿Por qué esto es más que solo construir un muro?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 mb-12"
        >
          <p className="text-zinc-700 leading-relaxed text-lg max-w-3xl mx-auto">
            De acuerdo con los planteamientos de <strong>Carlos Martín Beristain (2024)</strong>, un enfoque psicosocial es fundamental. Un TOAR sin él sería una simple obra de infraestructura; con él, se convierte en un proceso terapéutico y transformador.
          </p>

          <p className="text-zinc-700 leading-relaxed text-lg max-w-3xl mx-auto">
            Durante años, las víctimas fueron estigmatizadas como "madres de guerrilleros". El TOAR, como acto público, valida su dolor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-amber-600 to-orange-700 p-10 md:p-16 rounded-lg shadow-2xl text-center"
        >
          <blockquote className="space-y-6">
            <p
              className="text-white italic leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
            >
              "Un enfoque psicosocial busca devolverle a la víctima la <strong>agencia</strong> que el crimen le quitó. En este caso, las víctimas (acompañadas por CAJAR) no recibieron pasivamente la sanción; participaron activamente en su diseño."
            </p>
            <footer className="text-amber-100">
              — Inspirado en Carlos Martín Beristain (2024)
            </footer>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-600">
            <h3 className="text-amber-700 mb-4 text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Validación del Dolor
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              El reconocimiento público rompe el silencio y el estigma. Las víctimas recuperan su voz y su narrativa es oficialmente reconocida como verdad.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-600">
            <h3 className="text-orange-700 mb-4 text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Recuperación de Agencia
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              Las víctimas no son pasivas en el proceso. Participan activamente en el diseño de la reparación, recuperando el control que el crimen les arrebató.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
