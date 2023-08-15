import React from "react";


const Card = (props) => {
    return (
        <>
            {props.details.map((item, index) =>( 
                <div className="card" key={index}>
                    <div className="card__image">
                        <img src={item.img} />
                    </div>
                    <div>
                        <p className="card__title">{item.title}</p>
                        <p className="description">{item.description}</p>
                    </div>
                </div>
            ))}

        </>
    )
}


export default Card;

