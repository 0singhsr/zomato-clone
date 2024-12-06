import React from "react";
import "./Collection.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import collection1 from "../../assets/images/collection1.webp";
import collection2 from "../../assets/images/collection2.webp";
import collection3 from "../../assets/images/collection3.webp";
import collection4 from "../../assets/images/collection4.webp";

const Collection = () => {
  return (
    <div className="collection">
      <h1>Collection</h1>
      <div className="collectionText">
        <p>
        Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends
        </p>
        <span>
          All collections in Indore <ArrowRightIcon />
        </span>
      </div>
      <div className="collectionCard">
        <div className="collectionImg">
          <img src={collection1} alt="img" />
          <h3>Best Luxury dining Places</h3>
          <span>
            19 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection3} alt="img2" />
          <h3>Romantic Dining Places</h3>
          <span>
            16 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection2} alt="img4" />
          <h3>Great Cafes</h3>
          <span>
            25 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection4} alt="img4" />
          <h3>Local Favourite Places</h3>
          <span>
            13 Places <ArrowRightIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;