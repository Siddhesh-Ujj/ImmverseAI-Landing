import React from "react";
// import "./footer.css";

const Footer = () => {
  const cardData = [
    {
      index: 1,
      text: `“I know in real-time where the money is spent,and I don’t
                      have to lend out the company’s credit card anymore. What a
                      relief!”`,
      username: "Denny Hilguston",
      email: "@denny.hill",
      image: "footer1.jpg",
    },
    {
      index: 2,
      text: `VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap`,
      username: "Vani Pandey",
      email: "@vani.pandey",
      image: "footer2.png",
    },
    {
      index: 3,
      text: `I can actually see the improvement in the graphics, not having the external sensors is a big plus.`,
      username: "milly Singh",
      email: "@milly.singh",
      image: "footer3.png",
    },
  ];
  return (
    <>
      <div className="container-fluid my-5">
        <div className="w-full justify-content-center ">
          <h3 className="client-text text-center">What our clients say</h3>
        </div>
        <div className="container-fluid">
          <p className="customer-text text-center mt-3 m-auto ">
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </p>
        </div>
        {/* Customer section */}
        <div className="container mt-4 d-flex flex-wrap  justify-content-center gap-3 align-item-center">
          {cardData.map((item) => {
            return (
              <>
                <div
                  className="card mx-lg-0 mx-auto"
                  style={{ width: "20rem", marginTop: 20 }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="card-heading">starstar</span>star
                    </h5>

                    <p className="card-text">{item?.text}</p>

                    <div className="d-flex gap-3">
                      <img
                        src={item?.image}
                        alt="Avatar"
                        className="card-img"
                      />
                      <div>
                        <div className="username text-white">{item?.username}</div>
                        <div className="email text-white">{item?.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
