import { React, useEffect } from "react";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="dashBoard-container">
      <div className="dashBoard-left">
        <div className="dashBoard-towns">
          <span>Communes</span>
          <input type="text" placeholder="Rechercher une commune" />
        </div>
      </div>
      <div className="dashBoard-right">
        <div className="dashBoard-params">
          <button>PH</button>
          <button>Pizz</button>
        </div>
        <div className="dashBoard-graph">
          <div className="dashBoard-graph-imported">graphique</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
