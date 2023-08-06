import { ABOUT } from "@/assets/images";
import { aboutText, aboutTextFooter, aboutTextParagraph } from "@/data/About";
import { AboutTexts } from "@/types/about";

export const About = () => {
  return (
    <div className="relative h-[750px] w-full layout-content overflow-hidden rounded-xl">
      <img
        src={ABOUT}
        alt="Hero Banner"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 text-white flex justify-start flex-col items-start max-w-4xl text-base px-20 py-10">
        <h1 className="text-6xl font-bold">Acerca de Nosotros</h1>
        <h3 className="my-5 text-xl font-bold">
          Etólogo especialista en conducta animal y adiestramiento canino
        </h3>

        <ul>
          {aboutText.map((text: AboutTexts, i) => (
            <li key={i} className="list-disc">
              {text.description}
            </li>
          ))}
        </ul>

        <p className="my-5">{aboutTextParagraph}</p>
        <div>
          <h5> MIEMBRO DE:</h5>
          <ul>
            {aboutTextFooter.map((text: AboutTexts, i) => (
              <li key={i} className="list-disc">
                {text.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
