import React, { useState } from "react";
import "./ProductFilter.css";
import MainHeader from "../header";
import Footer from "../footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const products = [
        {
          name: "Men's T-Shirt",
          category: "Men",
          type: "T-Shirt",
          size: "M",
          productDescription: "T-shirt for men with M size",
          price: 50,
          pastprice: 100,
          rating: 4,
          image: "img.webp"
        },
        {
          name: "Women's Polo Shirt",
          category: "Women",
          type: "Polo",
          size: "S",
          productDescription: "Polo shirt for women with S size",
          price: 60,
          pastprice: 120,
          rating: 4,
          image: "women.jpg"
        },
        {
          name: "Baby Onesie",
          category: "Baby",
          type: "Onesie",
          size: "0-3 months",
          productDescription: "Onesie for babies aged 0-3 months",
          price: 25,
          pastprice: 50,
          rating: 3,
          image: "child.jpg"
        },
        {
          name: "Men's Polo Shirt",
          category: "Men",
          type: "Polo",
          size: "L",
          productDescription: "Polo shirt for men with L size",
          price: 70,
          pastprice: 140,
          rating: 4,
          image: "img.webp"
        },
        {
          name: "Women's Tank Top",
          category: "Women",
          type: "Tank Top",
          size: "M",
          productDescription: "Tank top for women with M size",
          price: 40,
          pastprice: 80,
          rating: 4,
          image: "women.jpg"
        },
        {
          name: "Baby Romper",
          category: "Baby",
          type: "Romper",
          size: "3-6 months",
          productDescription: "Romper for babies aged 3-6 months",
          price: 30,
          pastprice: 60,
          rating: 4,
          image: "child.jpg"
        }
];

const ProductCard = ({ product }) => {
    const { name, image, rating , size } = product;
  
    return (
      <div className="product-card">
        <img src={image} alt={name} />
        <div className="product-name">{name}</div>
        <div className="product-rating">
          <div className="rating">
            {[...Array(rating)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
          </div>
        </div>
        <div className="product-size">
            <button>{size}</button>
        </div>
        <div className="ProductDetailes">
            <button>اضف الى السلة</button>
        </div>
      </div>
    );
  };

const FilteredProducts = ({ category, size, type }) => {
  const filteredProducts = products.filter((product) => {
    let match = true;
    if (category && product.category !== category) {
      match = false;
    }
    if (size && product.size !== size) {
      match = false;
    }
    if (type && product.type !== type) {
      match = false;
    }
    return match;
  });

  return (
    <div className="products">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
};

function Products() {
    const [category, setCategory] = useState("");
    const [size, setSize] = useState("");
    const [type, setType] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    return (
        <>
        <MainHeader/>
        <div className="product-filter">
            <div className="filter-container">
                <div className="filter-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Baby">Baby</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="size">Size:</label>
                    <select id="size" value={size} onChange={handleSizeChange}>
                        <option value="">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="0-3 months">0-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="type">Type:</label>
                    <select id="type" value={type} onChange={handleTypeChange}>
                        <option value="">All</option>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Polo">Polo</option>
                        <option value="Tank Top">Tank Top</option>
                        <option value="Onesie">Onesie</option>
                        <option value="Romper">Romper</option>
                    </select>
                </div>
            </div>
            <FilteredProducts category={category} size={size} type={type} />
        </div>
        <Footer/>
        </>
    );
}

export default Products;