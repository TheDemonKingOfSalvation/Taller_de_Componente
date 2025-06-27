import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FestividadCard from "./FestividadCard";

const festividades = [
  {
    titulo: "Carnaval",
    img: "img/carnaval.jpg",
    resumen:
      "El Carnaval ecuatoriano es una celebración alegre que se realiza en todo el país, especialmente en Guaranda y Cuenca, donde las personas se lanzan agua, bailan, y participan en desfiles.",
    contexto:
      "El Carnaval en Ecuador se celebra en febrero o marzo, dependiendo del calendario litúrgico, y tiene raíces indígenas y católicas. Es una fiesta llena de color, juegos con agua, espuma y música. En lugares como Guaranda y Ambato."
  },
  {
    titulo: "Inti Raymi",
    img: "img/Inti Raymi.jpg",
    resumen:
      "El Inti Raymi es una fiesta indígena que celebra el solsticio de junio y agradece al sol y la cosecha. Es especialmente celebrada por comunidades andinas como los Kichwas de Imbabura.",
    contexto:
      'El Inti Raymi o "Fiesta del Sol" es una celebración ancestral de origen incaico que honra al Tayta Inti (Padre Sol). Se celebra el 21 de junio, coincidiendo con el solsticio de invierno, y marca el inicio de la nueva cosecha.'
  },
  {
    titulo: "Día de los Difuntos",
    img: "img/Día de los Difuntos.jpg",
    resumen:
      "El Día de los Difuntos, celebrado el 2 de noviembre, es una fecha en la que los ecuatorianos recuerdan a sus seres queridos fallecidos, llevando flores a los cementerios y comiendo colada morada con guaguas de pan.",
    contexto:
      "El Día de los Difuntos es una festividad de origen católico con fuerte sincretismo indígena. Las familias acuden a los cementerios a limpiar tumbas, colocar flores, rezar y compartir comida. Uno de los símbolos más importantes es la colada morada."
  },
  {
    titulo: "Diablada de Píllaro",
    img: "img/Diablada de Píllaro.jpg",
    resumen:
      "La Diablada de Píllaro es un desfile festivo donde las personas se visten de diablos con máscaras coloridas y trajes llamativos, celebrada del 1 al 6 de enero en Tungurahua.",
    contexto:
      "La Diablada de Píllaro es una festividad popular de Tungurahua. En ella, cientos de personas se disfrazan de diablos con máscaras elaboradas a mano, hechas de papel, cuero y cuernos. La tradición tiene raíces coloniales como forma de protesta simbólica contra la represión española."
  },
  {
    titulo: "Fiesta de la Mama Negra",
    img: "img/Fiesta de la Mama Negra.jpg",
    resumen:
      "Celebrada en Latacunga, la Mama Negra es una fiesta con desfiles llenos de personajes tradicionales, como la Mama Negra, el Ángel de la Estrella y los diablos, que mezcla cultura indígena, africana y española.",
    contexto:
      "La Fiesta de la Mama Negra se celebra en Latacunga (Cotopaxi) dos veces al año. Es una mezcla de tradiciones indígenas, afroecuatorianas y españolas. El personaje principal es la Mama Negra, interpretada por un hombre afrodescendiente montado en caballo."
  }
];

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Festividades del Ecuador</h1>
      {festividades.map((fest, i) => (
        <FestividadCard key={i} {...fest} />
      ))}
    </div>
  );
}

export default App;

