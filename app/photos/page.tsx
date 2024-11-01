import { getImages } from "@/data/images";
import Image from "next/image";
import Link from "next/link";
const Photos = () => {
  const images = getImages();

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="grid grid-cols-5 gap-3">
        {images.map((image, index) => (
          <Link href={`/photo/${image.id}`} key={index}>
            <Image
              src={image.url}
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Photos;
