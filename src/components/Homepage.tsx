import { Link } from "react-router-dom";
import "../styles/hp.scss";

/** Basic homepage component */
export const Homepage: React.FC = (): JSX.Element => {
  return (
    <div className="homepage">
      <div className="hp-typing">
        <div className="title-anim">Hello Nidek!</div>
        <div className="title-anim">こんにちは、ニデック!</div>
      </div>
      <Link to="/PhotoAlbum">
        <button className="delayed-button">
          <div>Go to Killer Photo Album Application</div>
          <div>キラーフォトアルバムアプリへ</div>
        </button>
      </Link>
    </div>
  );
};
