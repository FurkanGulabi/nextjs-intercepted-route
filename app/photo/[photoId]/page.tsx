import { getImageById } from "@/data/images";
import Image from "next/image";
import React from "react";

const Photo = async ({ params }: { params: { photoId: string } }) => {
  const { photoId } = await params;
  if (!photoId) return null;
  const id = Number(photoId);

  if (typeof id != "number" || isNaN(id)) return <div>Invalid photo ID</div>;

  const image = getImageById(id);
  if (!image) return <div>Photo not found</div>;

  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src={image.url}
        alt="Picture of the author"
        width={image.width}
        height={image.height}
      />
    </div>
  );
};

export default Photo;
