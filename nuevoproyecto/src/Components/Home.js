import React from "react";
import "./Home.css";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.instyle.es/medio/2019/08/07/diadema-madame-de-rosa_6b44b8b5_1200x630.jpg"
              className="w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.fangazing.com/files/22-1477-Foto/diadema123.png"
              className="w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ae01.alicdn.com/kf/H630dcf59391c4deea1d003d9cb905619e/Accesorios-para-el-cabello-para-mujeres-lindas-diademas-con-nudo-para-mujeres-aros-para-el-cabello.jpg_960x960.jpg"
              className="w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="home_section">
        <div className="row row-cols-1 row-cols-md-3">
          <Card
            src="https://www.lecturas.com/medio/2020/06/11/paula-echevarria_f3c80e4a_900x1375.jpg"
            title="Diadema"
            description="Diadema dorada"
            price="$250"
          />
          <Card
            src="https://www.lecturas.com/medio/2020/06/17/diadema-romantic_9f92c0c1_900x1350.jpg"
            title="Diadema rosita"
            description="Rosa"
            price="$5,000"
          />
          <Card
            src="https://www.lecturas.com/medio/2020/06/17/diadema-elegant_6c1d1acf_900x1350.jpg"
            title="Diadema"
            description="Para niña"
            price="$4,000"
          />
          <Card
            src="https://i.pinimg.com/736x/1b/ba/fc/1bbafc949f82ddb8e4cf165b8e41fab4.jpg"
            title="Diadema"
            description="Diadema dorada"
            price="$250"
          />
          <Card
            src="https://aws.glamour.mx/prod/designs/v1/assets/426x582/219946.jpg"
            title="Diadema rosita"
            description="Rosa"
            price="$5,000"
          />
          <Card
            src="https://i.pinimg.com/736x/96/dd/8b/96dd8b694bf482047216e98a6ae05492.jpg"
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
