import "../styles/loadingSpin.scss";

/** simply component to show loading */
export const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};
