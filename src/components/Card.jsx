import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Card = (props) => {

  const goTo = () => {
    Navigate(props.points);
  }
  return (
    <>
      
        
          
              <div className="card mb-sm-4">
                <img src={props.img} alt="" />
                <div className="card-body">
                  <h5 className="card-title mb-3">{props.title}</h5>
                  <div className="card-text mb-2">STARTING AT</div>
                  <div className="d-flex gap-1 card-text2">
                    <h3 className="mb-4">
                      <i class="fa-solid fa-naira-sign"></i>{props.price}
                    </h3>
                    <p>{props.amount}</p>
                  </div>
                  <button onClick={() => goTo ()} className="btn btn-danger">
                     {props.press}
                  </button>
                </div>
              </div>
    
      
    </>
  );
};

export default Card;
