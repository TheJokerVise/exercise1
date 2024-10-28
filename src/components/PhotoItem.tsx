import React from "react";
import { PhotoItemProps } from "../model/PhotoItemProps";
import { error } from "console";
import { Loading } from "./Loading";

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
        src={isError ? props.alterImg : props.src} // Se c'è un errore usa immagine di fallback
        alt={props.alt}
        onLoad={handleLoading} // Gestisce il caricamento corretto
        onError={handleOnError} // Gestisce l'errore di caricamento
        style={{
          display: isLoading ? "none" : "block", // Nasconde l'immagine finché carica
        }}
        className="my-img"
      />

      {/* Messaggio di errore se il fallback fallisce */}
      {isError && !props.alterImg && <p>Immagine non disponibile</p>}
    </div>
  );
};

function usePhotoItem(
  props: PhotoItemProps
): [boolean, any, boolean, any, any, any] {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  // Gestore per l'evento onLoad
  const handleLoading = () => {
    setIsLoading(false); // L'immagine è stata caricata
    setIsError(false); // Nessun errore
  };

  // Gestore per l'evento onError
  const handleOnError = () => {
    setIsLoading(false); // Fine caricamento anche in caso di errore
    setIsError(true); // Errore rilevato
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
