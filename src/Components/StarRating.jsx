import React from 'react';

export default function StarRating(props) {
    

    let { rating } = props;
    let active = "fas fa-star active_star";
    let inactive = "fas fa-star icon";
    let star = "fas fa-star star";
    return (
      <span>
        <i className={rating >= 1 ? active : inactive}> </i>
        <i className={rating >= 2 ? active : inactive}></i>
        <i className={rating >= 3 ? active : inactive}></i>
        <i className={rating >= 4 ? active : inactive}></i>
        <i className={rating >= 5 ? active : inactive}></i>
      </span>
    );
}
