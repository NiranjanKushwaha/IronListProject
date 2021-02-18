import React, { useState,useEffect } from "react";
import mydata from "../Components/Api";
import Filter from "./Filter";
import Cards from "./Cards";

const MainRender = () => {
  let price_unit = "INR ";
  const [price, setprice] = useState();
  const [item, setitem] = useState([]);
  const [sort, setsort] = useState(0);
  const [priceValue, setPriceValue] = useState("")
  const [ratingValue, setRatingValue] = useState("");
    
  useEffect(() => {
      setitem(mydata);
  }, [])
  
  useEffect(() => {
    console.log(sort);
  },[sort])

  

 
  function sortByPrice(e) {
   
    if (e.target.value === 'ltoh') {
       setitem( item.sort((obj1, obj2) => {
        return obj1.Price - obj2.Price;
       }))
      setsort(1);
      setPriceValue("Low To High");
    }
    if (e.target.value === 'htol') {
       setitem(item.sort((obj1, obj2) => {
        return obj2.Price - obj1.Price;
       }))
      setsort(2);
      setPriceValue("High To Low");
    }
  }
  function sortByRating(e) {
    if (e.target.value === "ltoh") {
        setitem(
          item.sort((obj1, obj2) => {
            return obj1.rating - obj2.rating;
          })
        );
      setsort(1);
      setRatingValue("Low To High");
     }
    if (e.target.value === "htol") {
       setitem(
         item.sort((obj1, obj2) => {
           return obj2.rating - obj1.rating;
         })
       );
      setsort(2);
      setRatingValue("High To Low");
     }
  }
    
    return (
      
        <div className="container-fluid Main">
          <div className="row">
            <div className="col-2 left-side mt-2 mb-2">
              <Filter price={priceValue} rating={ratingValue} sortOnPrice={sortByPrice} sortOnRating={sortByRating} />
            </div>
            <div className="col-10  right-side">
            <div className="row mx-auto mb-2"> {
              item.map((el, index) => {
                return (
                  <Cards
                    name={el.name}
                    price={el.Price}
                    title={el.title}
                    rating={el.rating}
                    src={el.src}
                    key={index}
                  />
                );
              })
              }</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 footer text-center">
              <span>IronList project</span>
              <p>Done By- Niranjan Kumar Kushwaha</p>
            </div>
          </div>
        </div>
      
    );
};

export default MainRender;
