import { CATALOGO } from "@/assets/images";

export const Catalogue = () => {
  return (
    <div className="relative h-[400px] w-full layout-content overflow-hidden rounded-xl">
      <img
        src={CATALOGO}
        alt="Hero Banner"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 text-white flex justify-center flex-col items-end mx-auto max-w-7xl text-base px-10 py-10">
        <h1 className="text-6xl font-bold">Catálogo</h1>
        <h3 className="my-5 text-2xl font-bold">100% Artesanal</h3>

        <a
          href="#!"
          className="rounded-full  px-3 py-1  text-blue-dark border-2 border-blue-dark text-base font-bold "
        >
          Ver Catálogo
        </a>
      </div>
    </div>
  );
};
