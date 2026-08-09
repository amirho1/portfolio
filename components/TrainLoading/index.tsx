import "./index.scss";

export default function TrainLoading() {
  return (
    <div
      className="trainLoading train-wrapper"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="toy-train rtl:right-[50%]">
        <div className="engine">
          <div className="window">
            <div className="engine-main">
              <div className="smokes">
                <span></span>
              </div>
            </div>
          </div>
          <div className="engine-body">
            <div className="wheels">
              <div className="big-wheel"></div>
              <div className="normal-wheel"></div>
            </div>
          </div>
        </div>
        <div className="locomotive">
          <div className="trash"></div>
          <div className="wheels">
            <div className="normal-wheel"></div>
            <div className="normal-wheel"></div>
          </div>
        </div>
        <div className="tracks rtl:-right-16">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
