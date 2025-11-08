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
              <strong>Beristain, Carlos Martín</strong> (2024). “Justicia restaurativa: los desafíos del Estado y la JEP”,
              disponible en:{" "}
              <a
                href="https://www.lasillavacia.com/red-de-expertos/red-de-la-paz/justicia-restaurativa-los-desafios-del-estado-y-la-jep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.lasillavacia.com/red-de-expertos/red-de-la-paz/justicia-restaurativa-los-desafios-del-estado-y-la-jep/
              </a>{" "}
              (Fecha de consulta: octubre 28 de 2025)
            </p>
            <p className="pl-6 -indent-6">
              <strong>Coll, J. F.</strong> (2025, 3 noviembre). <em>Exguerrilleros y militares se unen para construir 500
              osarios de víctimas de desaparición forzada en Colombia</em>. EL PAÍS América Colombia.{" "}
              <a
                href="https://elpais.com/america-colombia/2025-11-03/exguerrilleros-y-militares-se-unen-para-construir-500-osarios-de-victimas-de-desaparicion-forzada-en-colombia.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://elpais.com/america-colombia/2025-11-03/exguerrilleros-y-militares-se-unen-para-construir-500-osarios-de-victimas-de-desaparicion-forzada-en-colombia.html
              </a>
            </p>
            <p className="pl-6 -indent-6">
              <strong>Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición – CEVCNR</strong>{" "}
              (2022). Hay futuro si hay verdad: Informe Final de la Comisión para el Esclarecimiento de la Verdad, la
              Convivencia y la No Repetición. Bogotá: CEVCNR. (Versión digital – agosto de 2022). Disponible en:{" "}
              <a
                href="https://www.comisiondelaverdad.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.comisiondelaverdad.co
              </a>{" "}
              (Fecha de consulta: octubre 28 de 2025)
            </p>
            <p className="pl-6 -indent-6">
              <strong>JEP</strong> (2024). “Acuerdo AOG No. 011 de 2024 (20 de marzo)”, disponible en:{" "}
              <a
                href="https://www.jep.gov.co/organosgobierno/Acuerdo%20AOG%20011%20de%202024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.jep.gov.co/organosgobierno/Acuerdo%20AOG%20011%20de%202024.pdf
              </a>{" "}
              (Fecha de consulta: octubre 28 de 2025)
            </p>
            <p className="pl-6 -indent-6">
              <strong>Jurisdicción Especial para la Paz</strong> (2021). Auto 033 de 2021: Apertura del Macrocaso 03 –
              Asesinatos y desapariciones forzadas presentados como bajas en combate por agentes del Estado. Bogotá:
              JEP.
            </p>
            <p className="pl-6 -indent-6">
              <strong>Jurisdicción Especial para la Paz – JEP</strong>. (2025, 7 de junio). La JEP y autoridades de Cesar y
              La Guajira articulan esfuerzos para preparar la implementación de la sentencia que se emita por ‘falsos
              positivos’ en estos departamentos. Sala de Prensa de la JEP.{" "}
              <a
                href="https://www.jep.gov.co/Sala-de-Prensa/Paginas/la-jep-y-autoridades-de-cesar-y-la-guajira-articulan-esfuerzos-para-preparar-la-implementacion-de-la-sentencia-que-se-emita.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.jep.gov.co/Sala-de-Prensa/Paginas/la-jep-y-autoridades-de-cesar-y-la-guajira-articulan-esfuerzos-para-preparar-la-implementacion-de-la-sentencia-que-se-emita.aspx
              </a>
            </p>
            <p className="pl-6 -indent-6">
              <strong>Jurisdicción Especial para la Paz</strong>. (2025, 18 de septiembre). JEP emite primera sentencia
              por asesinatos y desapariciones forzadas... [Comunicado de prensa].{" "}
              <a
                href="https://www.jep.gov.co/Sala-de-Prensa/Paginas/-jep-emite-primera-sentencia-por-asesinatos-y-desapariciones-forzadas-ilegitimamente-presentadas-como-bajas-en-combate-en-l.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.jep.gov.co/Sala-de-Prensa/Paginas/-jep-emite-primera-sentencia-por-asesinatos-y-desapariciones-forzadas-ilegitimamente-presentadas-como-bajas-en-combate-en-l.aspx
              </a>
            </p>
            <p className="pl-6 -indent-6">
              <strong>Jurisdicción Especial para la Paz – JEP</strong> (Sin fecha). “Lineamientos en materia de sanción
              propia y Trabajos, Obras y Actividades con contenido Reparador–Restaurador y protocolo para la adecuada
              articulación de los componentes del Mecanismo de Monitoreo y Verificación de Sanciones Propias”,
              disponible en:{" "}
              <a
                href="https://www.jep.gov.co/Polticas%20y%20Lineamientos/Lineamientos%20en%20materia%20de%20sanci%C3%B3n%20propia%20y%20Trabajos,%20Obras%20y%20Actividades%20con%20contenido%20Reparador%20-%20Restaurador%20y%20protocolo%20para%20la%20adecuada%20articulaci%C3%B3n%20de%20los%20componentes%20del%20Mecanismo%20de%20Monitoreo%20y%20Verificaci%C3%B3n%20de%20Sanciones%20Propias.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.jep.gov.co/.../Lineamientos...
              </a>{" "}
              (Fecha de consulta: octubre 28 de 2025)
            </p>
            <p className="pl-6 -indent-6">
              <strong>Jurisdicción Especial para la Paz [JEP]</strong>. (2023). <em>Audiencia de Reconocimiento de
              Responsabilidad - Macrocaso 03, Batallón La Popa</em> [Video]. YouTube.
            </p>
            <p className="pl-6 -indent-6">
              <strong>Mesa de Conversaciones para la Terminación del Conflicto y la Construcción de una Paz Estable y
              Duradera</strong> (2016). Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz
              Estable y Duradera. Bogotá: Teatro Colón.
            </p>
            <p className="pl-6 -indent-6">
              <strong>Orozco Tascón, C.</strong> (2025, 17 de agosto). Dice el presidente de la JEP: “No queremos
              sentencias de papel”. El Espectador.{" "}
              <a
                href="https://www.elespectador.com/judicial/dice-el-presidente-de-la-jep-no-queremos-sentencias-de-papel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.elespectador.com/judicial/dice-el-presidente-de-la-jep-no-queremos-sentencias-de-papel/
              </a>
            </p>
            <p className="pl-6 -indent-6">
              <strong>Redacción Colombia 2020</strong>. (2022, 20 de julio). Falsos positivos en Cesar: los detalles de la
              imputación de la JEP a militares del Batallón La Popa. El Espectador.{" "}
              <a
                href="https://www.elespectador.com/colombia-20/jep-colombia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.elespectador.com/colombia-20/jep-colombia/
              </a>
            </p>
            <p className="pl-6 -indent-6">
              <strong>Redacción Judicial</strong>. (2025, 18 de septiembre). En vivo: la JEP condena a exmilitares por
              ‘falsos positivos’ en Cesar. El Espectador.{" "}
              <a
                href="https://www.elespectador.com/judicial/en-vivo-la-jep-condena-a-exmilitares-por-falsos-positivos-en-cesar-valledupar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.elespectador.com/judicial/en-vivo-la-jep-condena-a-exmilitares-por-falsos-positivos-en-cesar-valledupar/
              </a>
            </p>
            <p className="pl-6 -indent-6">
              <strong>Rutas del Conflicto</strong>. (2022, 11 de julio). La JEP imputó al general (r) Paulino Coronado y
              a otros 24 militares por 'falsos positivos'.{" "}
              <a
                href="https://rutasdelconflicto.com/actualidad/la-jep-imputo-al-general-paulino-coronado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://rutasdelconflicto.com/actualidad/la-jep-imputo-al-general-paulino-coronado
              </a>
            </p>
            <p className="pl-6 -indent-6">
              <strong>Suárez Aldana, Camilo Andrés</strong> (2020). “La justicia transicional, restaurativa y su proyección
              en el procedimiento dialógico dispuesto para la Jurisdicción Especial para la Paz”, en: La JEP vista por
              sus jueces (2018–2019). Bogotá: XPRESS estudio gráfico y digital SAS, pp. 135–155.
            </p>
            <p className="pl-6 -indent-6">
              <strong>Van Zyl, P.</strong> (2011). Promoviendo la justicia transicional en sociedades post–conflicto. En:
              Reátegui, F. (Ed.), Justicia transicional: Manual para América Latina (pp.47–72). Brasilia: Comisión de
              Amnistía – Ministerio de Justicia / Nueva York: ICTJ.
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
