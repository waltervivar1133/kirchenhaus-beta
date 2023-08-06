import {
  ADIESTRAMIENTO,
  CAN_CABALLERO,
  CHIKI,
  PRESENTACION,
} from "@/assets/images";
import { ImportantEventsType } from "@/types/importantEvents";

export const importantEvents: Array<ImportantEventsType> = [
  {
    icon: <img width="450px" height="338px" src={CAN_CABALLERO} />,
    title: "CAN CIUDADANO",
    shortDescription:
      "La Prueba del Can Ciudadano tiene por objeto lograr un excelente nivel de comportamiento social...",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          La Prueba del Can Ciudadano tiene por objeto lograr un excelente nivel
          de comportamiento social, tanto como un adiestramiento básico, con lo
          cual lograran que sus perros sean animales completamente sociables,
          con personas y perros; por lo que no le causara ningún tipo de
          problema cuando salgan a la calle. <br /> <br />
          Parte de estas clases san tenido como base las pruebas del
          Landespolizeischule y de clubs de Europa, ayudaran en las pruebas de
          can ciudadano del Kennel Club Peruano (KCP). <br /> <br />
          Los exámenes serán tomados por el KCP, en la Prueba del Can Ciudadano
          será organizada directamente por el KCP, nosotros solo solicitaremos
          la prueba. Esta Prueba constará de dos partes, con dos escenarios
          diferentes. <br />
          <br />
          Será requisito indispensable para el otorgamiento del certificado de
          CAN CIUDADANO del KCP que los examinadores de la prueba hayan sido
          nombrados por el Consejo Directivo del Kennel Club Peruano. Cuando un
          ejemplar haya superado la Prueba, con el informe favorable (APTO) del
          Examinador, el KCP emitirá el certificado correspondiente. En caso que
          un ejemplar sea calificado desfavorablemente (NO APTO) en una prueba,
          tendrá dos (2) oportunidades más para superarla, siendo el KCP quien
          pondrá las fechas.
        </p>
      </>
    ),
  },
  {
    icon: (
      <iframe
        width="450px"
        height="278px"
        src="https://www.youtube.com/embed/JIvOtXy_5IE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    ),
    title: "PERROS DE ASISTENCIA",
    shortDescription:
      "Preparamos perros para realizar tareas en beneficio de personas con discapacidad física...",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          Preparamos perros para realizar tareas en beneficio de personas con
          discapacidad física, sensorial, psiquiátrica, intelectual u otra
          discapacidad mental, en el video, Daiquiri nuestra primera perra de
          servicio, cuando caminaba por la calle, si se daba cuenta a través del
          olfato que había una persona con problemas emocionales, (tristeza,
          agobio, pena etc.) al percibirlo se le acercaba amigablemente y no se
          separaba de ella hasta que sentía su cambio de actitud. <br /> <br />
          Esta solicitud puede ser pedido por cualquier dueño de mascota que
          tenga alguna discapacidad emotiva, no es necesario que un médico
          especialista brinda la solicitud.
        </p>
      </>
    ),
  },
  {
    icon: <img width="450px" height="338px" src={PRESENTACION} />,

    title: "PRESENTACION EN EXPOSICIONES",
    shortDescription:
      "Aprendan como presentar su perro en exposiciones, así pasaran momentos agradables en compañía....",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          Aprendan como presentar su perro en exposiciones, así pasaran momentos
          agradables en compañía de sus mascotas.
        </p>
      </>
    ),
  },
  {
    icon: <img width="450px" height="338px" src={CHIKI} />,
    title: "PERRO DE SERVICIO",
    shortDescription:
      "Por las regulaciones emitidas recientemente por el Departamento de Transporte de los Estados Unidos....",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          Por las regulaciones emitidas recientemente por el Departamento de
          Transporte de los Estados Unidos (DOT), solo viajaran en cabina perro
          de asistencia asistida con su propietario, esta regla entro en vigor
          el 11 de enero del 2022. <br />
          American Airlines y otras líneas aéreas que permitían viajar en cabina
          a los perros de apoyo emocional ahora no podrán hacerlo.
        </p>
      </>
    ),
  },
  {
    icon: <img width="450px" height="338px" src={ADIESTRAMIENTO} />,
    title: "SOCIABILIZACIÓN DE CACHORROS",
    shortDescription:
      "Para evitar que los amos tengan problemas por sus mascotas. Clases a cachorros entre los 2 meses y 10 meses,...",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          Para evitar que los amos tengan problemas por sus mascotas.
          <br /> Clases a cachorros entre los 2 meses y 10 meses, Las clases de
          socialización para cachorros están dirigidas a cachorros, dictadas por
          un alumno de Ian Dunbar Usamos el método de Ian Dunbar, en estas
          clases pueden participar todos los miembros de la familia en el
          adiestramiento. Los cachorros deben traer su certificado de vacunación
          firmado por un MV colegiado.
        </p>
      </>
    ),
  },
];
