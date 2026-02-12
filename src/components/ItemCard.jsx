//Individual Item Card
//Shop Page is going to handle card data

import '../components/ItemCard.css';

export default function ItemCard( {name, image, quantity} ){

    return (
        <div className="itemCard">
            <img src={image} alt={name}></img>
            <h3 className="itemName">{name}</h3>
            <input type="number"></input>

        </div>
    );
};