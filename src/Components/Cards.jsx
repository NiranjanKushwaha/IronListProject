import React, {useState, useContext,useEffect } from 'react';
import CurrencyContext from "./CurrencyContext";
import { currencyConverter } from "./CurrencyConverter";
import StarRating from "./StarRating";
export default function Cards(props) {

    const [currencyName, setCurrencyName] = useContext(CurrencyContext);
    const [priceByCountary, setpriceByCountary] = useState(0);
    useEffect(() => {
        currencyConverter(currencyName, props.price).then(d => {
            setpriceByCountary(d);
        });
        console.log(currencyName);
    }, [currencyName])
    return (
      <div
        className="card mt-2 ml-2"
        style={{ width: "20rem" }}
        key={props.index}
      >
        <img
          className="card-img-top img-fluid"
          src={props.src}
          alt="Card  cap"
          style={{ height: "13rem" }}
        />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
          <p>{props.name}</p>
            <p>
          <span className="card-title">
              {currencyName} : {priceByCountary || props.price}
          </span>
          <span style={{ float: "right" }}>
            <StarRating rating={props.rating} />
          </span>
            </p>
        </div>
      </div>
    );
}
