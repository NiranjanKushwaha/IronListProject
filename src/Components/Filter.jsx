import React, { useState ,useContext} from 'react';


export default function Filter(props) {
  
  
  // // const [item, setitem] = useState([]);
  // let item = props.item;
  // const sort_on_Price = (e) => {
  //   if (e.target.value === "ltoh") {
  //     item.sort((obj1, obj2) => {
  //       return obj1.Price - obj2.Price;
  //     });
  //   } 
  //   if (e.target.value === "htol") {
  //     item.sort((obj1, obj2) => {
  //       return obj2.Price - obj1.Price;
  //     });
  //   }
        // let item = props.item;
        // let priceArr = [];
        // let low_to_high = [];
        // console.log(item);
        // item.map(el => {
        //     priceArr.push(el.Price);
        // })
        // priceArr.sort((a, b) => {
        //     return a-b
        // })
        // console.log(priceArr);
        // for (var i = 0; i < priceArr.length; i++){
        //     console.log("value of i is:", i);
        //     item.forEach((el) => {
        //       if (el.Price === priceArr[i]) {
        //         console.log(el.Price);
        //         console.log(el.name);
        //         low_to_high.push(el);
        //         console.log(low_to_high);
        //       }
        //     });
        // }

//}
  


    return (
      <div className="left_filter text-center">
        <label htmlFor="">Price</label>
        <select
          name="price"
          id="price"
          onChange={props.sortOnPrice}
          value={props.price}
        >
          <option value="">
            {props.price || "Select"}
          </option>
          <option  value="ltoh">Low to High</option>
          <option value="htol">High to Low</option>
        </select>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <label htmlFor="">Rating</label>
        <select name="price" id="price" value={props.rating} onChange={props.sortOnRating}>
          <option value="">
            {props.rating || "Select"}
          </option>
          <option value="ltoh">low to High</option>
          <option value="htol">High to Low</option>
        </select>
      </div>
    );
}
