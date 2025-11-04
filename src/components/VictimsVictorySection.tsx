import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Scale, Heart, Users, Shield } from "lucide-react";

export function VictimsVictorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="min-h-screen bg-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            La Victoria de las Víctimas
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            El rol del Colectivo CAJAR y cómo el TOAR satisface los derechos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-gray-200 leading-relaxed text-lg max-w-4xl mx-auto text-center">
            Este TOAR no apareció de la nada. Es el resultado de décadas de lucha de las víctimas y sus representantes, como el <strong className="text-amber-500">Colectivo de Abogados José Alvear Restrepo (CAJAR)</strong>. El TOAR no es un 'beneficio', es la materialización de la justicia por la que lucharon. Así es como el TOAR contribuye a las acciones que CAJAR y las víctimas adelantaron:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg shadow-xl border border-blue-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-blue-300" />
              <h3 
                style={{ fontFamily: 'Playfair Display, serif' }} 
                className="text-white text-2xl"
              >
                VERDAD
              </h3>
            </div>
            <div className="space-y-4 text-blue-100">
              <p className="leading-relaxed">
                <strong>La Lucha de CAJAR:</strong> Litigó para que se reconociera que las víctimas no eran guerrilleros.
              </p>
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="italic">
                  <strong>Contribución del TOAR:</strong> La construcción del mausoleo por los propios militares es la <strong>aceptación pública e irrefutable</strong> de esa verdad, combatiendo el negacionismo.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-lg shadow-xl border border-purple-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-purple-300" />
              <h3 
                style={{ fontFamily: 'Playfair Display, serif' }} 
                className="text-white text-2xl"
              >
                JUSTICIA
              </h3>
            </div>
            <div className="space-y-4 text-purple-100">
              <p className="leading-relaxed">
                <strong>La Lucha de CAJAR:</strong> Promovieron una justicia más allá de la cárcel.
              </p>
              <div className="border-l-4 border-purple-400 pl-4">
                <p className="italic">
                  <strong>Contribución del TOAR:</strong> La justicia se materializa al ver a un coronel <strong>rendir cuentas ante los Mamos Wiwa</strong>, sometiéndose a una ley ancestral. Eso es justicia restaurativa visible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-amber-900 to-amber-800 p-8 rounded-lg shadow-xl border border-amber-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-amber-300" />
              <h3 
                style={{ fontFamily: 'Playfair Display, serif' }} 
                className="text-white text-2xl"
              >
                REPARACIÓN
              </h3>
            </div>
            <div className="space-y-4 text-amber-100">
              <p className="leading-relaxed">
                <strong>La Lucha de CAJAR:</strong> Insistió en la reparación diferenciada, especialmente para los pueblos indígenas.
              </p>
              <div className="border-l-4 border-amber-400 pl-4">
                <p className="italic">
                  <strong>Contribución del TOAR:</strong> El "Pagamento" (Etno-reparación) <strong>es esa reparación diferenciada</strong>. Es un logro directo de la incidencia de las víctimas para que la JEP reparara el daño espiritual y territorial.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-lg shadow-xl border border-green-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-300" />
              <h3 
                style={{ fontFamily: 'Playfair Display, serif' }} 
                className="text-white text-2xl"
              >
                NO REPETICIÓN
              </h3>
            </div>
            <div className="space-y-4 text-green-100">
              <p className="leading-relaxed">
                <strong>La Lucha de CAJAR:</strong> Lucha contra la impunidad y la doctrina militar que permitió los crímenes.
              </p>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="italic">
                  <strong>Contribución del TOAR:</strong> El mausoleo se vuelve un <strong>monumento público contra el olvido</strong>. La pedagogía de los militares funciona como garantía de no repetición ante la sociedad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 bg-zinc-800 p-8 rounded-lg border-l-4 border-amber-600"
        >
          <p className="text-gray-200 leading-relaxed text-center text-lg italic">
            "El TOAR no es una concesión del Estado. Es una <strong className="text-amber-400">victoria de las víctimas</strong> que exigieron verdad, justicia, reparación y garantías de no repetición. CAJAR fue el puente entre el dolor de las familias y la sala de justicia."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
