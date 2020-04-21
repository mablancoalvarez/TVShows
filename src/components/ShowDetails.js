import React from 'react';

const ShowDetails = (props) => {
   
    return(
        <div className ="card_show">
           
            <li className="card_show_id" id={props.cards.show.id}>
            <div className="card_show_details">
            <img src={props.cards.show.image.medium} alt={props.cards.show.name} className="card_img"/>
            <h3>{props.cards.show.rating.average}</h3>
            <span className="gendre">
                <ul className="gendre">
            {props.cards.show.genres.map(cards => (
                <li key={cards.id}> {cards}
                </li>
            )
           
            )}
           </ul>
            </span>
            </div>
            <div className="sipnosis_container">
            <h2>{props.cards.show.name}</h2>
            <p className="sipnopsis" dangerouslySetInnerHTML={{ __html: props.cards.show.summary }}></p> 
            </div>
            </li>
        </div>

    );
}

export default ShowDetails;