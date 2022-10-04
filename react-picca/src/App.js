import React from 'react'
import  "./scss/app.scss"

import { Categories } from './components/Categories'
import { Sort } from './components/Sort'
import {Header} from "./components/Header"
import { PizzaBlock } from './components/PizzaBlock'




function App() {
  const [items,setItems] =React.useState([])

React.useEffect(()=>{
  fetch("https://633b1370471b8c39557c0508.mockapi.io/items")
  .then((res)=>{
    return res.json()
  })
  .then((arr)=>{
    setItems(arr)
  })
})


  return (

<>
<div className="wrapper">
<Header/> 
  <input type="text" />
 
      <div className="content">
        <div className="container">
          <div className="content__top">
          <Categories/> 
    <Sort/>
             
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
{
  items.map((obj)=>(<PizzaBlock {...obj}/>))
}





<PizzaBlock tittle="irlandskiy"/>

          
  
  </div>

 
</div> 

</div>
</div>        
        
      
    
</>


  )
}

export default App;
