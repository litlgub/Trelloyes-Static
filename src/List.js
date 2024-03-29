import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {
   
    return(
        
    <section className="List">
        <header className="List-header">
          <h2>{props.list.header}</h2>
        </header>
        <div className="List-cards">
            {props.list.cardIds.map(card =>{
                return(
                    <Card card={card} allCards={props.allCards}/>
                )
            })}

            

            

        </div>
        
    </section>
    )

}

export default List;