import {  useState } from 'react';



export function Card({count,setCount, name, price, rating, poster }) {
  const [inCart, setIncart] = useState(true);

  if (name === "Special Item" || name === "Sale Item") {
    return (
      <>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
            <img className="card-img-top" src={poster} alt="..." />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{name}</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  {rating}
                </div>
                <span className="text-muted text-decoration-line-through">{price[0]}</span>
                {price[1]}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              {inCart ? (
                <div className="text-center">
                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                    setCount(count+1);
                    setIncart(false);
                  }} >
                  Add from Cart
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                    setCount(count-1)
                    setIncart(true);
                  }} >
                  Remove from Cart
                </button>
                </div>
              )}
            </div>
          </div>
        </div></>
    );

  }
  else {
    return (
      <>
        <div className="col mb-5">
          <div className="card h-100">
            <img className="card-img-top" src={poster} alt="..." />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{name}</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  {rating}
                </div>
                {price}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            {inCart ? (
                <div className="text-center">
                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                    setCount(count+1);
                    setIncart(false);
                  }} >
                  Add from Cart
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                    setCount(count-1)
                    setIncart(true);
                  }} >
                  Remove from Cart
                </button>
                </div>
              )}
              
            </div>
          </div>
        </div>

      </>
    );
  }

}

