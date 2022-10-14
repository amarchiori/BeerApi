import React from "react";
import Card from './card';


const CardList = ({ breweries }) => {
    return (
        <div>
            {
                breweries?.map((brewery, i) => {
                    return (
                        <Card 
                            key = {i}
                            name = {breweries[i].name}
                            brewery_type = {breweries[i].brewery_type}
                            city = {breweries[i].city} 
                            state = {breweries[i].state}
                            website_url = {breweries[i].website_url}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;