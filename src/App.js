import './App.css';
import { Head } from './Components/Head';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Section } from './Components/Section';
import { useState } from 'react';


function App() {

  var data = [
    {
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      rating: "",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
      name: "Special Item",
      price: ["$20.00", "$18.00"],
      rating: "⭐⭐⭐⭐",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
      name: "Sale Item",
      price: ["$50.00", "$25.00"],
      rating: "",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
      name: "Popular Item",
      price: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
      name: "Sale Item",
      price: ["$50.00", "$25.00"],
      rating: "",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
      name: "Fancy Product",
      price: "$120.00 - $280.00",
      rating: "",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
      name: "Special Item",
      price: ["$20.00", "$18.00"],
      rating: "⭐⭐⭐⭐⭐",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
      name: "Popular Item",
      price: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
      cart: "Add to Cart",
      poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    }
  ]
  const [count, setCount] = useState(0)
  return (
    <div >
        <Navbar count={count} setCount={setCount}/>
        <Head />
        <Section count={count} setCount={setCount} details={data}/>
        <Footer />
    </div>
  );
}


export default App;

