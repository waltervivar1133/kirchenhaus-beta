import { HERO_IMAGE } from "@/assets/images";

export const Banner = () => {
  return (
    <div className="relative h-[550px] w-full max-w-10xl mx-auto overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Hero Banner"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0  flex justify-center flex-col items-start max-w-7xl mx-auto">
        <h2 className="text-7xl font-black font text-white pb-8">
          KIRCHENHAUS
        </h2>
        <p className="text-2xl text-blue-darkLight font-medium max-w-2xl pb-6">
          Somos especialistas en conducta animal y adiestramiento canino
        </p>
        <a href="#!" className="py-3 px-7 bg-blue-dark text-white rounded-full">
          Saber más
        </a>
      </div>
    </div>
  );
};
