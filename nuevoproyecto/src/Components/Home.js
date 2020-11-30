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
              src="https://www.instyle.es/medio/2019/08/07/diadema-madame-de-rosa_6b44b8b5_1200x630.jpg"
              className="w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.fangazing.com/files/22-1477-Foto/diadema123.png"
              className="w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ae01.alicdn.com/kf/H630dcf59391c4deea1d003d9cb905619e/Accesorios-para-el-cabello-para-mujeres-lindas-diademas-con-nudo-para-mujeres-aros-para-el-cabello.jpg_960x960.jpg"
              className="w-100"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="home_section">
        <div className="card-group">
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
