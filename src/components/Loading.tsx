import "../styles/loadingSpin.scss";

export const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};
