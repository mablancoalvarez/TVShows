import React from 'react';

const Show = (props) => {

    return (
        <li className="card_show">
            <img src={props.image} alt={props.title} className="card_img" />
            <div className="card_text">
                <h2>{props.title}</h2>
                <div className="card_subtitle">
                    <h3>{props.rating}</h3>
                    <h4>{props.status}</h4>
                </div>
                <h5> + info</h5>
            </div>
        </li>
    )
}

export default Show;