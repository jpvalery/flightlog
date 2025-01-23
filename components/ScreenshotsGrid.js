import Image from "next/image";
import Link from "next/link";

const ScreenshotsGrid = (props) => {
  return (
    <div className="grid auto-cols-auto grid-flow-row grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-16">
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
          <Link href={`/photo/${image._id}`} legacyBehavior key={image._id}>
            <div
              className={`z-50 max-w-fit transform rounded-xs bg-slate-100 p-1 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer ${rotate[random]}`}
            >
              <Image
                src={image.image.url}
                alt={`${image.image.alt} | Microsoft Flight Simulator`}
                width="800"
                height="450"
                className="z-50"
                placeholder="blur"
                blurDataURL={image.image.metadata.lqip}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ScreenshotsGrid;
