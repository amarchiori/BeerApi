import React from "react";

const Card = ({name, brewery_type, city, state, website_url, id }) => {
    return (
        <div className = "tc grow bg-light-gray br3 pa3 ma2 dib bw2 shadow-5">
            <src alt="beers" src={`https://api.openbrewerydb.org/breweries/search?query=${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>
                    {brewery_type}, {city}, {state}, {website_url}
                </p>
            </div>

        </div>
    );
}

export default Card;
