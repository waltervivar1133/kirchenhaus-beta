type Props = {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
  setShowModal: (show: boolean) => void;
  setDataModal: (data: JSX.Element) => void;
  shortDescription: string;
};

export const Card = ({
  icon,
  title,
  description,
  setShowModal,
  setDataModal,
  shortDescription,
}: Props) => {
  return (
    <>
      <div className="mt-5 rounded-xl border-2 border-gray-100 bg-white pt-4 px-4">
        <div className="m-0 flex justify-center p-0 border rounded-lg">
          {icon}
        </div>
        <div className="px-5 pb-8 pt-2">
          <h4 className="font-bold text-black">{title}</h4>
          <p className="my-3 text-black font-light">{shortDescription}</p>
          <div
            onClick={() => {
              setShowModal(true);
              setDataModal(description);
            }}
          >
            <a
              href="#!"
              className="rounded-full px-3 py-1 bg-blue-light text-white text-xs font-medium"
            >
              Saber mas
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
