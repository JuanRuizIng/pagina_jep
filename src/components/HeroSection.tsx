import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-800" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1
          className="text-white mb-8 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          LA OBRA: Del Terror al Territorio
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="space-y-6 text-zinc-300"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-amber-500">
            135 asesinatos y desapariciones forzadas.
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
            Un análisis de la sanción restaurativa impuesta al Batallón La Popa y cómo la justicia, guiada por las víctimas, puede construir la paz.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-amber-600" />
      </motion.div>
    </section>
  );
}
