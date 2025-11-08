import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Landmark, Sprout, Mountain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const monumentImg = "https://imagenes.elpais.com/resizer/v2/QE57INLLYBG2LIHVEC4NR2JFVI.jpg?auth=110fbf542ebb6897854c61d9e7a16b52f71936909b32e4f9b7d51a35e37f03a0&width=1960";
const plantingImg = "https://www.semana.com/resizer/v2/VOHIAIPMY5G7RFVLNCMIAVTSYY.jpg?auth=f40751a7e35e7d3cf55d55ba0c10fb9ba060327aac0fb864280f12f6a17f9d2f&smart=true&quality=75&width=1280&height=720";
const ceremonyImg = "https://www.semana.com/resizer/v2/CE7LSJXEXZHPFIB2WQQDWH4TWE.jpg?auth=07e08d74796cf15d864e1cea271bc93012787044ecac453a151d9608d7f8c994&smart=true&quality=75&width=1280&fitfill=false";

export function ToarSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("mausoleo");

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-stone-200 to-stone-300 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 text-zinc-900"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          LA OBRA: La Sanción Restaurativa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-zinc-700 mb-12 text-lg max-w-3xl mx-auto"
        >
          El Plan Integral de Proyectos Restaurativos para 12 exmiembros del Batallón 'La Popa'.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 bg-white p-8 rounded-lg shadow-xl border-l-4 border-amber-700 max-w-4xl mx-auto"
        >
          <h3 
            style={{ fontFamily: 'Playfair Display, serif' }} 
            className="text-zinc-900 text-2xl mb-6 text-center"
          >
            Datos Básicos del TOAR
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-zinc-700">
            <div>
              <p className="mb-3">
                <strong className="text-amber-800">Proyecto:</strong> Plan Integral de Sanción Propia, Batallón 'La Popa' (Septiembre 2025)
              </p>
              <p className="mb-3">
                <strong className="text-amber-800">Lugar:</strong> Cesar y La Guajira (Valledupar y Sierra Nevada)
              </p>
              <p className="mb-3">
                <strong className="text-amber-800">Líneas de Acción:</strong> Reparación simbólica, material y etno-reparación
              </p>
            </div>
            <div>
              <p className="mb-3">
                <strong className="text-amber-800">Actores:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>135 Víctimas (familias y pueblos Wiwa/Kankuamo)</li>
                <li>12 Comparecientes (exmilitares)</li>
                <li>JEP (supervisa)</li>
                <li>Sociedad Civil (CAJAR)</li>
                <li>ONU (monitor)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-stone-400/50 h-auto p-2">
              <TabsTrigger 
                value="mausoleo"
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                <Landmark className="w-6 h-6" />
                <span>El Mausoleo</span>
              </TabsTrigger>
              <TabsTrigger 
                value="siembra"
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-green-700 data-[state=active]:text-white"
              >
                <Sprout className="w-6 h-6" />
                <span>La Siembra</span>
              </TabsTrigger>
              <TabsTrigger 
                value="pagamento"
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-orange-700 data-[state=active]:text-white"
              >
                <Mountain className="w-6 h-6" />
                <span>El Pagamento</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mausoleo" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-xl">
                <div className="space-y-6">
                  <h3 
                    style={{ fontFamily: 'Playfair Display, serif' }} 
                    className="text-amber-700 text-3xl"
                  >
                    Plan Integral de Memorialización para la Costa Caribe
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    La línea central del TOAR. Los 12 exmilitares deben participar en la construcción de un <strong>mausoleo con 700 osarios</strong> en el Cementerio Ecce Homo de Valledupar. Este acto, donde los perpetradores construyen el lugar de descanso de las víctimas, es la materialización del reconocimiento y la dignificación.
                  </p>
                  <p className="text-zinc-700 leading-relaxed">
                    Este proyecto responde directamente al derecho a la verdad y la reparación. Al construir el mausoleo, los militares aceptan públicamente la narrativa de las víctimas (que no eran guerrilleros) y combaten el negacionismo. Da a las familias un lugar físico para el duelo, un derecho que les fue negado por la desaparición forzada.
                  </p>
                  <blockquote className="border-l-4 border-amber-600 pl-4 italic text-zinc-600">
                    "El mausoleo se erige como un monumento público contra el olvido, asegurando que la sociedad recuerde lo ocurrido para que no se repita."
                  </blockquote>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img
                        className="w-full h-auto"
                        src={monumentImg}
                        alt="Monumento"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-white text-gray-800">
                        <p>Una pala reposa sobre los osarios construidos por excombatientes de las FARC y soldados comparecientes.</p>
                        <p className="text-sm mt-2 font-light italic text-right">Jair F. Coll</p>
                    </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="siembra" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-xl">
                <div className="space-y-6">
                  <h3 
                    style={{ fontFamily: 'Playfair Display, serif' }} 
                    className="text-green-700 text-3xl"
                  >
                    Fortalecimiento productivo multipropósito, urbano y rural ‘Sembradores de amor y paz’
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    A través del proyecto <strong>"Sembradores de amor y paz"</strong>, los comparecientes deben usar sus conocimientos técnicos (logística, ingeniería) para apoyar los proyectos productivos de las familias de las víctimas. Esto incluye adecuar predios y fortalecer cultivos.
                  </p>
                  <p className="text-zinc-700 leading-relaxed">
                    Esta obra re-significa el rol del perpetrador en el territorio. El mismo militar que generó terror en el campo, ahora regresa a ese campo, no con un arma, sino con herramientas de siembra en un rol de servicio. Se busca restaurar los medios de vida que fueron truncados por la violencia.
                  </p>
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-zinc-600">
                    "El TOAR obliga a esos mismos militares a regresar al territorio, pero esta vez no con armas, sino con palas y herramientas, en un rol de servicio y subordinación."
                  </blockquote>
                </div>
                <div className="relative h-96 md:h-auto rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src={plantingImg} 
                    alt="Hands planting seeds"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                    <p className="text-zinc-400 text-sm italic">Foto: Revista Semana - https://www.semana.com/foros-semana/articulo/proyectos-rurales-para-la-paz-los-retos-de-la-reincorporacion/202205/</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pagamento" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-xl">
                <div className="space-y-6">
                  <h3 
                    style={{ fontFamily: 'Playfair Display, serif' }} 
                    className="text-orange-700 text-3xl"
                  >
                    Centro de armonización para el buen vivir del Pueblo Kankuamo y Centro Integral Cultural y de Memoria OMONAPA del Pueblo Wiwa
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Este es el componente más profundo. El crimen en la Sierra Nevada de Santa Marta no solo fue un homicidio, sino una <strong>profanación del territorio sagrado</strong> que rompió el equilibrio espiritual de los pueblos Wiwa y Kankuamo.
                  </p>
                  <p className="text-zinc-700 leading-relaxed">
                    El TOAR exige que los militares se sometan a la justicia ancestral. Deben participar en <strong>rituales de armonización espiritual</strong> y "pagamento" dirigidos por los Mamos. Es un encuentro donde el militar, despojado de su rango, rinde cuentas ante la máxima autoridad espiritual del territorio que profanó.
                  </p>
                  <blockquote className="border-l-4 border-orange-600 pl-4 italic text-zinc-600">
                    "Esta inclusión es un logro directo de la incidencia de las víctimas (...) para que la JEP entendiera que el daño en la Sierra Nevada fue espiritual y territorial."
                  </blockquote>
                </div>
                <div className="relative h-96 md:h-auto rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src={ceremonyImg} 
                    alt="Spiritual ceremony with indigenous community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                    <p className="text-zinc-400 text-sm italic">Foto: Esteban Vega - Revista Semana</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
