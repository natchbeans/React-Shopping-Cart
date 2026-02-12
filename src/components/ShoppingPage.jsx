import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import '../components/ShoppingPage.css'

export default function ShoppingPage(){

    //Need to fetch item data from API and place them in name, image variables. 
    //useEffect() since I am getting info from external API
    const [productList, setProductList] = useState([]);
    
    useEffect( () => {
        const uniqueIDs = new Set(); //starts as empty
        while(uniqueIDs.size < 12){
            const randomID = Math.floor(Math.random() * 20) + 1;
            uniqueIDs.add(randomID);
        }
        
        uniqueIDs.forEach(id => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then( (response) => response.json())
            .then( (data) => {
                //do something with data
                const singleProduct = {
                    id: data.id,
                    name: data.title,
                    image: data.image
                };
                setProductList(prevList => [...prevList, singleProduct]);
            })
        })

    }, []);

    useEffect( () => {
        console.log(productList);
    }, [productList])

    
    

    return (
        //Need to take productList, and return the display
        <div className='itemGallery'>
            {productList.map( (eachProduct) => (
                <ItemCard name={eachProduct.name} image={eachProduct.image} key={eachProduct.id}/>
            ))}
        </div>
        
    );
};