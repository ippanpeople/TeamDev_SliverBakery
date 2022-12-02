import React, { useState, useEffect } from 'react'

const get_category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('http://10.0.1.220:3000/categories/index', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setCategory(data)
    })
  }, [])
  console.log(category);
  return (
    category.map(cat => <><div key={cat.id} ><img src={cat.cate_photo} alt={cat.cate_name} /><span>{cat.cate_name}</span></div></>)
  )
}

export default get_category