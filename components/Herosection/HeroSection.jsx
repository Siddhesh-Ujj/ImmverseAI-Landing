import React from "react"
import styles from "./heroSection.module.css"
export default function HeroSection() {
  const images = [
    { id: 1, src: "social1.png" },
    { id: 2, src: "social2.png" },
    { id: 3, src: "social3.png" },
    { id: 4, src: "social4.png" },
  ];
  return (
    <>
      <div className="container mt-3 text-white" style={{ position: "relative" }}>
        <div className="row">
          <div className="col-auto" style={{ position: "absolute", top: -110, left: -100 }}>
            <img src="topcircle.png" width={850} height={"auto"} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="hero-text">
              <label className={`${styles?.mainTitle}`}>Let's Explore Three-Dimensional Visual</label>
              <p className="hero-para w-75 my-4">
                With virtual technology, you can see the digital world feel more
                real, and you can play the game with a new style.
              </p>
              <div className="d-flex gap-4">
                <button className="get-button p-1">Get it Now</button>
                <p className="hero-para my-auto">Explore Device</p>
              </div>
              <div className="d-flex  my-4">
                <div className="image-container">
                  {images.map((image, index) => (
                    <img
                      key={image?.id}
                      src={image?.src}
                      alt={`Profile ${image.id}`}
                      className="image"
                      style={{
                        marginLeft: index === 0 ? "0px" : "-5px",
                        zIndex: images?.length - index,
                      }}
                    />
                  ))}
                </div>
                <div className="my-auto">
                  <ul className="">
                    <li className="online mt-3">400k people online</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6  col-10 cinematic-div mx-auto ">
            <img src="DashImg.png" className="cinematic-img " />
            {/* <div className="cinematic-part">
              <img src="eclipse.png" className="cinematic-img " />
              <div className="  ">
               
                <h3 className="text-center">Cinematic Virtual Reality</h3>
                <div className="underline">{""}</div>
                <div className="cinematic-text text-center py-5 px-5">
                  Let's be the best for more real and effective
                  results and ready to explore the limitiess world
                  that we have prepared for you.
                </div>
              </div>
            </div> */}

          </div>
        </div>
        <div className="row">
          <div className="col-auto" style={{ position: "absolute", top: 175, left: -110 }}>
            <img src="leftCircle.png" width={500} height={"auto"} />
          </div>
          <div className="col-auto" style={{ position: "absolute", top: 150, right: -110 }}>
            <img src="rightCircle.png" width={500} height={"auto"} />
          </div>
        </div>
      </div>
      {/* Experience section of vr */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-auto col-10 mx-2">
            <img
              className="hero-img border p-3 justify-content-center"
              src="vr1.png"
              alt="VR User 1"
            />
          </div>
          <div className="col-md-auto col-10 mx-2">
            <div className="py-md-5 d-block ">{""}</div>
            <div className="py-md-3 d-lg-block d-none">{""}</div>
            <img
              className="hero-img border p-3"
              src="/vr2.png"
              alt="VR User 2"
            />
          </div>
          <div className="col-md-5 col-10 mx-auto">
            <div className="py-md-5 d-block ">{""}</div>
            <div className="py-md-3 d-lg-block d-md-none">{""}</div>
            <div className=" py-5 px-4 ">
              <h3 className="text-white hero-text">
                New Experience In Playing Game
              </h3>
              <p className="text-white hero-para my-4 pe-5 me-2">
                You can try playing the game with a
                new style and of course a more real
                feel, like you are the main character
                in your game and adventure in this
                new digital world.
              </p>
              <button className="get-button">Get it Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
