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
              className="w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.picsum.photos/id/383/800/300.jpg?hmac=RIPUkwJUWhd7m6QLew0gBPJmg7u46X7fIeGNcR6yGDQ"
              className="w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.picsum.photos/id/722/800/300.jpg?hmac=-NCS3yq1nM2P1jvqmwCBCYcAs9fpDeC5JKBsfpgbSlA"
              className="w-100"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="home_section">
        <div className="card-deck">
          <Card
            src="https://i.picsum.photos/id/672/300/200.jpg?hmac=kwyJBjBU30s51icbB6yP0mxqzKTONkXpXsVLSAh7EVA"
            title="Diadema"
            description="Diadema dorada"
            price="$250"
          />
          <Card
            src="https://i.picsum.photos/id/452/300/200.jpg?hmac=xs5paoQZddwd4waMK25K9VN_AI0jITH7aS4CX_Gucb0"
            title="Diadema rosita"
            description="Rosa"
            price="$5,000"
          />
          <Card
            src="https://i.picsum.photos/id/17/300/200.jpg?hmac=aSEXmFpSdpZjWAZt0iQhmsT_kjaF3ekLBry0Lc7bhz4"
            title="Diadema"
            description="Para niña"
            price="$4,000"
          />
          <Card
            src="https://i.picsum.photos/id/672/300/200.jpg?hmac=kwyJBjBU30s51icbB6yP0mxqzKTONkXpXsVLSAh7EVA"
            title="Diadema"
            description="Diadema dorada"
            price="$250"
          />
          <Card
            src="https://i.picsum.photos/id/452/300/200.jpg?hmac=xs5paoQZddwd4waMK25K9VN_AI0jITH7aS4CX_Gucb0"
            title="Diadema rosita"
            description="Rosa"
            price="$5,000"
          />
          <Card
            src="https://i.picsum.photos/id/17/300/200.jpg?hmac=aSEXmFpSdpZjWAZt0iQhmsT_kjaF3ekLBry0Lc7bhz4"
            title="Diadema"
            description="Para niña"
            price="$4,000"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
