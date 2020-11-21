import React from "react";
import "./Home.css";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.picsum.photos/id/312/800/300.jpg?hmac=J-UGyOLTVTUC7YfgWdrNrQD9GPqzCkzgQbE34Z1k_Xs"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.picsum.photos/id/383/800/300.jpg?hmac=RIPUkwJUWhd7m6QLew0gBPJmg7u46X7fIeGNcR6yGDQ"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.picsum.photos/id/722/800/300.jpg?hmac=-NCS3yq1nM2P1jvqmwCBCYcAs9fpDeC5JKBsfpgbSlA"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="home_section">
        <Card
          src="https://cdn1.coppel.com/images/catalog/pr/4672052-1.jpg"
          title="Diadema"
          description="Diadema dorada"
          price="$250"
        />
        <Card
          src="https://exoticaonline.mx/17984-large_default/diadema-turbante-con-nudo-.jpg"
          title="Diadema rosita"
          description="Rosa"
          price="5 mil"
        />
        <Card
          src="https://cdn1.coppel.com/images/catalog/pr/4022392-1.jpg"
          title="Diadema"
          description="Para niña"
          price="$4000"
        />
      </div>
      <div className="home_section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
