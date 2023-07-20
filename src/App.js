import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './homepage';
import Offers from './pages/offers';
import Form from './pages/form';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetailes from './pages/product-detailes';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "Offers",
    element: <Offers/>,
  },
  {
    path: "form",
    element: <Form/>,
  },
  {
    path: "productinfo",
    element: <ProductDetailes/>,
  },
  {
    path: "products",
    element: <Products/>,
  },
]);


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading animation
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-animation">
        </div>
      ) : (
        <>
        <RouterProvider router={router}/>
        </>
      )}
    </div>
  );
}

export default App;