import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style2.css';
import io from 'socket.io-client';

function ClothesCard(props){
    const { image, name, rating, price, pastprice , category ,productDescription } = props.data;
    return(
        <a href={`productinfo?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&pastprice=${encodeURIComponent(pastprice)}&category=${encodeURIComponent(category)}&description=${encodeURIComponent(productDescription)}&rating=${encodeURIComponent(rating)}`}>
        <div className="clothes-card">
            <img src={image} alt="" />
            <p>{name}</p>
            <div className="rating">
            {[...Array(rating)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
            ))}
            </div>
            <p className="price">{price} LE <span className="before-sale">{pastprice} LE</span></p>
        </div>
        </a>
    )
}

function ClothesContainer() {
    const [category, setCategory] = useState('all');
    const [clothesData, setClothesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
            .then(response => response.json())
            .then(data => {
                setClothesData(data);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    if (isLoading) {
        return (
            <div className="loading-animation">
            </div>
        )
    }

    const clothesToDisplay = category === 'all' ? clothesData :
        clothesData.filter((data) => data.category === category);

    return (
        <div className="clothes-container">
            <div className="filter">
                <button className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all') }>الجميع</button>
                <button className={category === 'men' ? 'active' : ''}onClick={() => setCategory('men')}>رجال</button>
                <button className={category === 'women' ? 'active' : ''}onClick={() => setCategory('women')}>سيدات</button>
                <button className={category === 'baby' ? 'active' : ''}onClick={() => setCategory('baby')}>اطفال</button>
            </div>
            {clothesToDisplay.map((data, index) => (
                <ClothesCard key={index} data={data} />
            ))}
        </div>
    )
}

export default ClothesContainer;