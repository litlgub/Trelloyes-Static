import React from 'react';
import './Card.css';


function Card(props) {
    
    let key= props.card
    return(
        <div className="Card">
        <button type="button">delete</button>
        <h3>{props.allCards[key].title}</h3>
        <p>{props.allCards[key].content}</p>
      </div>
    )

}

export default Card;