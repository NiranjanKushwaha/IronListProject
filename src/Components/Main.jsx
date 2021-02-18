import React, { useState } from "react";
import axios from "axios";
// import mydata from  "../Components/Api";
// let url = "https://jsonplaceholder.typicode.com/albums";
let url = "https://jsonplaceholder.typicode.com/photos"


const Main= () => {
    const [item, setitem] = useState([]);
    

  const AllData = async () => {
        const res = await axios(url);
        console.log(res);
    setitem(res.data);
   
    }
    //  console.log(item[0].title);
  // console.log(mydata[0].src);
  // <img src={mydata[0].src} alt="test"/>
  const showData = () => {
    return (
        item.map((el, index) => {
          return (
            <div class="card-group ">
              <div className="card d-flex" style={{ width: "23rem" }} key={index}>
                <div className="card-body">
                  <h5 className="card-title"> albumId- {el.albumId}</h5>
                  <p className="card-text">{el.title}</p>
                
                </div>
              </div>
            </div>
          );
        })
    );
    }
    

    

  return (
    <div className="container-fluid Heading Main">
      <div className="row">
        <div className="col-md-2 col-sm-4 left-side">
          <button onClick={AllData}>click</button>
        </div>
        <div className="col-md-10 col-sm-8 right-side">
        {showData()}
        </div>
      </div>
    </div>
  );
};

export default Main;
