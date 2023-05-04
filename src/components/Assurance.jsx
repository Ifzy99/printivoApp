import React from "react";
import ta from "../assets/turnaround.svg";
import tq from "../assets/top-quality.svg";
import wallet from "../assets/affordable-services.svg"

const Assurance = () => {
  return (
    <>
      <div id="p-assure">
        <div className="p-assure-container">
          <div className="p-assure-header">You can count on us for:</div>
          <div className="p-assure-wrapper">
            <div className="assure">
              <div className="assure-img">
                <img src={ta} alt="" />
              </div>
              <div className="assure-text">
                <h6>Fast Turnaround Within Days</h6>
                <p>
                  Your order gets to you within 3-7 working days via DHL or our
                  very own Printivo Direct.
                </p>
              </div>
            </div>

            <div className="assure">
              <div className="assure-img">
                <img src={tq} alt="" />
              </div>
              <div className="assure-text">
                <h6>100% Top Quality</h6>
                <p>
                   Only the finest materials, machines and people will be involved in fulfilling your order.
                </p>
              </div>
            </div>

            <div className="assure">
              <div className="assure-img">
                <img src={wallet} alt="" />
              </div>
              <div className="assure-text">
                <h6> Affordable Services</h6>
                <p>
                   All products are adequately priced to ensure you get value for your money at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assurance;
