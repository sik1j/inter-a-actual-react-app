import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { TemplatePage } from "./TemplatePage";

export const Home = () => {
  return (
    <TemplatePage>
      <section className="hero-landing">
        <div className="watermark">Today</div>
        <div className="hero-flex">
          <div className="hero-text">
            <div className="subheading">Tomorrow's Leaders</div>Today
          </div>
          <div className="btn-hero">
            <div className="hero-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim
            </div>
            <div className="btn-border">
              <Link
                className=".btn"
                to="/apply"
                style={{
                  color: "#61892F",
                  textDecoration: "none",
                }}
              >
                <span className="cursor-pointer hover:text-u-off-white ease-out duration-200">
                  Apply
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="inter-a-video">
        <div className="sect-heading">
          we are <br />
          <span>Inter-A</span>
        </div>
        <div className="card">
          <iframe
            src="https://www.youtube.com/embed/PMM-CGm-ViY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="family-sect">
        <div>
          <div className="hero-text">
            <div className="subheading">think of us as a</div> Family
          </div>
          <div className="hero-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vel id
            amet purus amet rhoncus, libero accumsan. Nisl nec quis arcu
            pharetra diam amet. Viverra lectus mauris erat cursus lacus. Risus
            morbi pulvinar odio nec. In nisl mattis orci lacus, velit dictum
            etiam est. Nullam proin senectus vitae tortor habitant. Sed posuere
            congue sed ut eget tincidunt enim, tellus. Sollicitudin tincidunt eu
            fringilla adipiscing urna cras purus, nunc volutpat.
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="image of inter-a students"
        />
      </section>
      <section className="features-sect">
        <div className="sect-heading">
          what makes us <br />
          <span>DIFFERENT</span>
        </div>
        <div className="card-flex">
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/xdseYXZJX6s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-text">
            <div className="heading">CPP</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "}
            </div>
          </div>
        </div>
        <div className="card-flex">
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/UkK_2bzZWH8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-text">
            <div className="heading">PE & Studio Arts</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "}
            </div>
          </div>
        </div>
        <div className="card-flex">
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/-0E0QF9TMY8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-text">
            <div className="heading">Service</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "}
            </div>
          </div>
        </div>
        <div className="card-flex">
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/seGyl6WXOf4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-text">
            <div className="heading">Field Trips</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="bio-sect">
        <h2>Meet the minds behind the program</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </h3>
        <div className="name-card-grid">
          <div className="name-card">
            <img
              src="https://unsplash.it/200/200"
              alt=""
              className="face-img"
            />
            <p className="name">Name</p>
          </div>
          <div className="name-card">
            <img
              src="https://unsplash.it/200/200"
              alt=""
              className="face-img"
            />
            <p className="name">Name</p>
          </div>
          <div className="name-card">
            <img
              src="https://unsplash.it/200/200"
              alt=""
              className="face-img"
            />
            <p className="name">Name</p>
          </div>
          <div className="name-card">
            <img
              src="https://unsplash.it/200/200"
              alt=""
              className="face-img"
            />
            <p className="name">Name</p>
          </div>
          <div className="name-card">
            <img
              src="https://unsplash.it/200/200"
              alt=""
              className="face-img"
            />
            <p className="name">Name</p>
          </div>
          <div className="name-card">
            <img
              src="https://unsplash.it/200/200"
              alt=""
              className="face-img"
            />
            <p className="name">Name</p>
          </div>
        </div>
      </section>
    </TemplatePage>
  );
};
