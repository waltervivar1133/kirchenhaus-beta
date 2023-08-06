import { ADIESTRAMIENTO_S, ETOLOGIA, TERAPIA } from "@/assets/images";

export const Services = () => {
  return (
    <section className="layout-content py-24">
      <h5 className="text-blue-dark text-3xl font-bold pb-12">
        Nuestros Servicios
      </h5>

      <div className="grid grid-cols-3 gap-16">
        <div>
          <img src={ETOLOGIA} className="max-h-[340px] max-w-[345px]" alt="etologia" />
          <h5 className="text-2xl text-center pt-10 text-blue-dark font-bold">Etología</h5>
        </div>
        <div>
          <img src={TERAPIA} alt="etologia"className="max-h-[340px] max-w-[375px]"/>
          <h5  className="text-2xl text-center pt-10 text-blue-dark font-bold">Terapia</h5>
        </div>
        <div>
          <img src={ADIESTRAMIENTO_S} alt="etologia"className="max-h-[340px] max-w-[345px]"/>
          <h5  className="text-2xl text-center pt-10 text-blue-dark font-bold">Adiestramiento</h5>
        </div>
      </div>
    </section>
  );
};
