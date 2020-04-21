import React from 'react';
import Show from './Show';
import { Link } from 'react-router-dom';


  
const ShowList = (props) => {
console.log(props.isChecked)
const {isChecked} = props
    return (
        <ul className="showlist">
            {props.data

            .filter(showObj => props.search === ''|| showObj.show.name.toLowerCase().includes((props.search.toLowerCase())))
            .filter(showObj => !isChecked || (isChecked && showObj.show.status === 'Running') )
            // si esta desmarcado me los va a mostrar todos !isChecked( asi el objeto me mostrara siempre si no esta checheado o si si esta checkeado y cumple la condicion)
            .map(showObj =>
                <Link to={`/card/${showObj.show.id}`}>
                        <Show 
                            key= {showObj.show.id}
                            image={showObj.show.image.medium} alt={showObj.show.name}
                            title={showObj.show.name}
                            rating={showObj.show.rating.average}
                            status={showObj.show.status}
                            
                        />
                </Link>
            )}
        </ul>
    )
}

export default ShowList; 