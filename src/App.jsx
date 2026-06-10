import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Greet from './component/ArrowFunctions'
import Card from './component/Card'


function App() {
  const data = [
    {
      id: 1,
      title: "MacBook Pro M2",
      description: "High-performance laptop for developers and designers",
      price: "2500$",
    },
    {
      id: 2,
      title: "iPhone 15 Pro",
      description: "Latest Apple smartphone with advanced camera system",
      price: "1200$",
    },
    {
      id: 3,
      title: "AirPods Pro 2",
      description: "Wireless earbuds with noise cancellation",
      price: "250$",
    },
    {
      id: 4,
      title: "Samsung Galaxy Tab S9",
      description: "Powerful Android tablet for work and entertainment",
      price: "900$",
    },
  ]

  const [items, setItems] = useState(data);
  // const handleDelete = (id) => {
  //   const updatedItems = items.filter(item => item.id !== id); //filter() creates a new array.It keeps items where the condition is true.It removes items where the condition is false.
  //   setItems(updatedItems); //updates the React state with that new array.
  // }


  return (
    <>
      <Navbar />
      <div className='container'>
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </>
  )
}

export default App
