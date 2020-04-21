import React from 'react';

const Filters = (props) => {

    const inputSearch = (evt) => {
        props.handleSearch(evt.currentTarget.value);
    }
    const updateCheckbox = () => {
        props.handleCheckbox()
      }

    return (
        
        <div className="search">
            <div className="wrapper">
            <label htmlFor="text-search">Busca tu serie</label>
            <input
                type="text"
                className="inputsearch"
                placeholder="Search"
                value={props.value}
                onChange={inputSearch}
            />
             <i class="fa fa-search"></i>
             </div>
            <label htmlFor="labelrunning">Running</label>
            <input onChange={updateCheckbox} type="checkbox" id="running-check" name="running-check" value="running" checked={props.isChecked} />
        </div>
    )
}

export default Filters