import Image from "next/image";

const ScreenshotsGrid = (props) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 auto-cols-auto justify-items-center">
      {props.images.map((image) => {
        const rotate = [
          "-rotate-[2deg]",
          "-rotate-[1deg]",
          "rotate-0",
          "rotate-[1deg]",
          "rotate-[2deg]",
        ];
        const random = Math.floor(Math.random() * rotate.length);
        return (
          <>
            <div
              className={`p-1 z-50 transform rounded-sm bg-slate-100 max-w-fit hover:scale-110 transition ease-in-out duration-300 ${rotate[random]}`}
            >
              <Image
                src={image.image.url}
                alt={`${image.image.alt} | Microsoft Flight Simulator`}
                width="800"
                height="450"
                layout="intrinsic"
                className="z-50"
                placeholder="blur"
                blurDataURL={image.image.metadata.lqip}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ScreenshotsGrid;
