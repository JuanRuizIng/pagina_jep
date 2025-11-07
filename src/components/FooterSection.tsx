import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, BookOpen, Users } from "lucide-react";
import camilaImage from "../images/Camila .png";
import juanImage from "../images/Juan .png";

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-stone-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Pedagogía */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <BookOpen className="w-10 h-10 text-amber-700" />
            <h2 
              style={{ fontFamily: 'Playfair Display, serif' }} 
              className="text-zinc-900 text-4xl"
            >
              Una Pedagogía para las PACES
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-zinc-700 text-lg leading-relaxed">
              Esta página web es nuestra <strong>Iniciativa Pedagógica</strong>. Busca demostrar que la justicia restaurativa no es impunidad, sino un camino más difícil que transforma.
            </p>
            <p className="text-zinc-700 text-lg leading-relaxed">
              Al mostrar este caso, hacemos pedagogía: combatimos la desinformación y promovemos una postura autónoma sobre la importancia de la JEP para la paz de Colombia.
            </p>
            <p className="text-zinc-700 text-lg leading-relaxed italic text-amber-800">
              La justicia, entonces, no es un martillo. Es una pala, es una semilla y es un ritual. Es una obra en construcción.
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-amber-700" />
            <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-zinc-900 text-2xl">
              Créditos
            </h3>
          </div>
          <p className="text-zinc-700 text-lg mb-2">
            Iniciativa Pedagógica - Cátedra Nacional "La Justicia Transicional de la JEP"
          </p>
          <p className="text-zinc-600">
            Universidad Autónoma de Occidente (UAO)
          </p>
        </motion.div>

        {/* Estudiantes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 
            style={{ fontFamily: 'Playfair Display, serif' }} 
            className="text-zinc-900 text-3xl mb-12 text-center"
          >
            Desarrolladores del Proyecto
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Camila */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-xl text-center"
            >
              <div className="mb-6">
                <img 
                  src={camilaImage} 
                  alt="María Camila Orozco Romero"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-amber-600 shadow-lg"
                />
              </div>
              <h4 
                style={{ fontFamily: 'Playfair Display, serif' }} 
                className="text-zinc-900 text-2xl mb-3"
              >
                María Camila Orozco Romero
              </h4>
              <div className="space-y-2 text-zinc-700">
                <p className="text-sm">
                  <strong>Email:</strong> maria_cam.orozco@uao.edu.co
                </p>
                <p className="text-sm">
                  <strong>Código:</strong> 2226220
                </p>
              </div>
            </motion.div>

            {/* Juan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-xl text-center"
            >
              <div className="mb-6">
                <img 
                  src={juanImage} 
                  alt="Juan Andrés Ruiz Muñoz"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-amber-600 shadow-lg"
                />
              </div>
              <h4 
                style={{ fontFamily: 'Playfair Display, serif' }} 
                className="text-zinc-900 text-2xl mb-3"
              >
                Juan Andrés Ruiz Muñoz
              </h4>
              <div className="space-y-2 text-zinc-700">
                <p className="text-sm">
                  <strong>Email:</strong> juan_andres.ruiz@uao.edu.co
                </p>
                <p className="text-sm">
                  <strong>Código:</strong> 2230557
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bibliografía */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h3 
            style={{ fontFamily: 'Playfair Display, serif' }} 
            className="text-zinc-900 text-2xl mb-6 text-center"
          >
            Bibliografía y Fuentes
          </h3>
          <div className="space-y-4 text-sm text-zinc-700 max-w-4xl mx-auto">
            <p className="pl-6 -indent-6">
              Beristain, C. M. (2024). <em>Enfoque Psicosocial en Procesos de Justicia Transicional: 
              Agencia y Dignidad de las Víctimas</em>. Instituto de Estudios sobre Conflictos y Acción 
              Humanitaria.
            </p>
            <p className="pl-6 -indent-6">
              Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición. (2022). 
              <em>Hay Futuro si Hay Verdad: Informe Final</em>. Bogotá: Comisión de la Verdad.
            </p>
            <p className="pl-6 -indent-6">
              Jurisdicción Especial para la Paz. (s.f.). <em>Lineamientos en materia de sanción propia</em>. 
              Bogotá: JEP. Recuperado de https://www.jep.gov.co
            </p>
            <p className="pl-6 -indent-6">
              Jurisdicción Especial para la Paz. (2024). <em>Acuerdo AOG No. 011: Plan Integral de 
              Proyectos Restaurativos - Batallón La Popa, Macrocaso 03</em>. Bogotá: JEP.
            </p>
            <p className="pl-6 -indent-6">
              Suárez Aldana, C. A. (2020). <em>Justicia Restaurativa y Construcción de Paz en Colombia</em>. 
              Revista Colombiana de Ciencias Sociales, 11(2), 620-645.
            </p>
            <p className="pl-6 -indent-6">
              Jurisdicción Especial para la Paz [JEP]. (2023). <em>Audiencia de Reconocimiento de 
              Responsabilidad - Macrocaso 03, Batallón La Popa</em> [Video]. YouTube.
            </p>
            <p className="pl-6 -indent-6">
            Redacción Judicial. (2025, 18 de septiembre). En vivo: la JEP condena a exmilitares por ‘falsos positivos’ en Cesar. El Espectador. https://www.elespectador.com/judicial/en-vivo-la-jep-condena-a-exmilitares-por-falsos-positivos-en-cesar-valledupar/
            </p>
            <p className="pl-6 -indent-6">
            Coll, J. F. (2025, 3 noviembre). *Exguerrilleros y militares se unen para construir 500 osarios de víctimas de desaparición forzada en Colombia*. EL PAÍS América Colombia. [https://elpais.com/america-colombia/2025-11-03/exguerrilleros-y-militares-se-unen-para-construir-500-osarios-de-victimas-de-desaparicion-forzada-en-colombia.html](https://elpais.com/america-colombia/2025-11-03/exguerrilleros-y-militares-se-unen-para-construir-500-osarios-de-victimas-de-desaparicion-forzada-en-colombia.html)
            </p>
            <p className="pl-6 -indent-6">
            Jurisdicción Especial para la Paz – JEP. (2025, 7 de junio). La JEP y autoridades de Cesar y La Guajira articulan esfuerzos para preparar la implementación de la sentencia que se emita por ‘falsos positivos’ en estos departamentos. Sala de Prensa de la JEP. https://www.jep.gov.co/Sala-de-Prensa/Paginas/la-jep-y-autoridades-de-cesar-y-la-guajira-articulan-esfuerzos-para-preparar-la-implementacion-de-la-sentencia-que-se-emita.aspx
            </p>
          </div>
        </motion.div>

        {/* Footer final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-8 border-t border-zinc-300"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-amber-700" />
            <p className="text-zinc-600">
              Pedagogía para las Paces
            </p>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2025 Universidad Autónoma de Occidente - JEP
          </p>
          <p className="text-zinc-400 text-xs mt-2">
            Este sitio es una iniciativa educativa sin ánimo de lucro. El contenido se basa en 
            documentos públicos de la JEP y la Comisión de la Verdad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
