import React from "react";
import { PhotoItemProps } from "../model/PhotoItemProps";
import { error } from "console";
import { Loading } from "./Loading";

/** PhotoItem component handle events on load or error img and return the resource */
export const PhotoItem: React.FC<PhotoItemProps> = (props): JSX.Element => {
  const [
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    handleLoading,
    handleOnError,
  ] = usePhotoItem(props);
  return (
    <div className="img-container" key={props.id}>
      {/* Loading condition */}
      {isLoading && !isError && <Loading></Loading>}

      {/* official img */}
      <img
        src={isError ? props.alterImg : props.src} // If there is an error use fallback image
        alt={props.alt}
        title={props.alt}
        onLoad={handleLoading}
        onError={handleOnError}
        style={{
          display: isLoading ? "none" : "block", // hide img during the loading
        }}
        className="my-img"
      />

      {/* error message if fallback fail */}
      {isError && !props.alterImg && <p>Image not available</p>}
    </div>
  );
};

function usePhotoItem(
  props: PhotoItemProps
): [boolean, any, boolean, any, any, any] {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  // handle for loading event
  const handleLoading = () => {
    setIsLoading(false); // image loaded
    setIsError(false); // no erro
  };

  // handle for error event
  const handleOnError = () => {
    setIsLoading(false); // end of loading even if there is an error
    setIsError(true); // there is an error
  };

  return [
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    handleLoading,
    handleOnError,
  ];
}
