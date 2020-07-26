import React, { Component } from "react";
import { Alert } from "bootstrap-4-react";
import styles from "./style.module.css";
import Glasses from "./glasses";

class Index extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./images/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./images/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./images/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./images/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./images/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./images/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./images/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./images/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./images/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },
  ];
  state = {
    introGlasses: {
      url: this.arrProduct[0].url,
      name: this.arrProduct[0].name,
      price: this.arrProduct[0].price,
      desc: this.arrProduct[0].desc,
    },
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      introGlasses: newGlasses,
    });
  };
  renderGlasses = () => {
    let glassesArr = this.arrProduct.map((Product, index) => {
      return (
        <Glasses
          key={index}
          product={Product}
          changeGlasses={this.changeGlasses}
        />
      );
      /*<div style={{ padding: "30px 10px" }} className="col-sm-4" key={index}>
         <img
            style={{ cursor: "pointer" }}
            className="img-fluid"
            src={Product.url}
            alt={index}
            onClick={() => {
              this.changeGlasses(Product);
            }}
          />
        </div>*/
    });
    return glassesArr;
  };
  renderIntroProduct = () => {
    let Glasses = this.arrProduct.map((Product, index) => {
      return (
        <div className={styles.intro} key={index}>
          <h4>{this.state.introGlasses.name}</h4>
          <p>
            <span>${this.state.introGlasses.price}</span>
            <span>Stocking</span>
          </p>
          <p>{this.state.introGlasses.desc}</p>
        </div>
      );
    });
    return Glasses;
  };
  render() {
    // tạo số ngẫu nhiên
    let numRandom = Math.round(Math.random() * 1000);

    const imageGlasses = {
      position: `absolute`,
      top: `37%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      width: `230px`,
      opacity: `0.8`,
      animation: `animationChangeGlasses${numRandom} 5s`,
    };

    let animationKeyFrames = `@keyframes animationChangeGlasses${numRandom} {
      from {
          width: 0px;
          top: 0;
          opacity: 0;
      }
      to {
          top: 37%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 230px;
          opacity: 0.8;
      }
  }`;
    return (
      <div style={{ backgroundImage: "url(./images/bg.jpg", minHeight: 800 }}>
        <style>
          {animationKeyFrames}
        </style>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5", minHeight: 800 }}>
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(255, 127, 36, 0.5)" }}
          >
            BÀI TẬP THỬ KÍNH
          </h3>
          <div className="container">
            <div className="row py-3 m-auto">
              <div className="col-sm-6">
                <div className="border border-light bg-white p-3">
                  <h1 className="border-bottom pb-3">Virtual Glasses</h1>
                  <div className="row d-flex align-items-center pb-5">
                    {this.renderGlasses()}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className={styles.right}>
                  <div className="btnChoose py-2 text-right">
                    <button className={styles.btnBefore}>Before</button>
                    <button className={styles.btnAfter}>After</button>
                  </div>
                  <img
                    className={styles.image}
                    src="../images/model.jpg"
                    alt="model"
                  />
                  {this.renderIntroProduct()}

                  <img
                  className={styles.imageGlasses}
                    style={imageGlasses}
                    src={this.state.introGlasses.url}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
