import React from "react";
import { Photo } from "../model/Photo";
import { PhotosProps } from "../model/PhotosProps";
import { PhotoItem } from "./PhotoItem";
import imageNOTavailable from "../resources/imageNotavailable.png";

/** Photos component to manage all photos item in a restricted area */
export const Photos: React.FC<PhotosProps> = (
  props: PhotosProps
): JSX.Element => {
  return (
    <div className="selected-photos-area section">
      {props.photosList.map((photo: Photo) => (
        <PhotoItem
          id={photo.id}
          alt={photo.title}
          alterImg={imageNOTavailable}
          src={photo.thumbnailUrl}
          key={photo.id}
        ></PhotoItem>
      ))}
    </div>
  );
};
