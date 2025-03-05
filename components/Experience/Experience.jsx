import React from "react";
// import "./experience.css";

const Experience = () => {
  const cardData = [
    {
      index: 1,
      text: `HoloLens display information, blend with the real world , or even simulate a virtual world.
          `,
      header: `HoLoLens`,
      image: "experience1.png",
    },
    {
      index: 2,
      text: `AI and IoT are both emerging innovative technologies with a lot of potentials. `,
      header: `AIoT`,
      image: "experience2.png",
    },
    {
      index: 3,
      text: `A Network of 3D virtual worlds focused on social connection. `,
      header: `Metaverse`,
      image: "experience3.png",
    },
    {
      index: 4,
      text: `Method is great to start students reading and inferring with little assistance from the instructor`,
      header: `TPCASTT`,
      image: "experience4.png",
    },
  ];
  return (
    <>
      <div className="row text-white vrituality-row">
        <div className="col-md-6 text-virtuality ">
          Awesome experiences with virtual reality world
        </div>
        <div className="col-md-6 row justify-content-md-end justify-content-center">
          <img src={`virtuality.png`} className="virtual-image me-md-5 my-md-auto m-auto" />
        </div>
      </div>
      <div className="container mt-4 ">
        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="px-5 py-3 col-sm-12 col-md-6 mb-4 ">
              <div className="card position-relative">
                <img
                  src={card?.image}
                  className="card-img-top"
                  alt={card.title}
                />
                <div className="card-text card-experience position-absolute bottom-0  ">
                  <div className="ps-3 card-experience-head">
                    {card?.header}
                  </div>
                  <div className="ps-3 card-experience-text mt-2">
                    {card?.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
