import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { importantEvents } from "@/data/ImportantEvents";
import { ImportantEventsType } from "@/types/importantEvents";
import { Card } from "./components/Card";
import { Modal } from "@/components/Modal";
export const ImportantEvents: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<JSX.Element | null>(null);
  return (
    <section className="layout-content py-24">
      <h5 className="text-blue-dark text-3xl font-bold pb-12">
        Sucesos Importantes
      </h5>

      <Swiper
        key={987}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {importantEvents.map((data: ImportantEventsType) => (
          <SwiperSlide>
            <Card
              key={data.title}
              icon={data.icon}
              title={data.title}
              shortDescription={data.shortDescription}
              description={data.description}
              setShowModal={setShowModal}
              setDataModal={setDataModal}
            />
          </SwiperSlide>
        ))}
        <Modal
          showModal={showModal}
          dataModal={dataModal}
          setShowModal={setShowModal}
        />
      </Swiper>
    </section>
  );
};
