import React from 'react'

export const Categories = () => {
  const [activindex,setActivIndex] =React.useState(0)

  const  categories = [
    "Все",
    "ясМные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
  ]

  const onClickCategory=(index)=>{
    setActivIndex(index)
  }
  return (
    <div className="categories">
    <ul>
    {categories.map((value,i)=>(
      <li key={i} onClick={()=>onClickCategory(i)}  className={activindex===i?"active":""}>{value}</li>
      
    ))}
    </ul>
  </div>
  )
}
