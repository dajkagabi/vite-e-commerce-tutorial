import React, { useEffect, useRef } from 'react'
import './Swiper.css'
import img1 from '../../assets/item1.jpg'
import img2 from '../../assets/item2.jpg'
import img3 from '../../assets/item3.jpg'
import img4 from '../../assets/item-4.jpg'
import img5 from '../../assets/item5.jpg'
import img6 from '../../assets/item6.jpg'

const products = [
  { img: img1, title: 'IMac M4', price: 'Starting price: $1299 ' },
  { img: img2, title: 'Apple Watch SE ', price: 'Starting price: $399 ' },
  { img: img3, title: 'Apple MacBook Air ', price: 'Starting price: $1099' },
  { img: img4, title: 'Apple iPad ', price: 'Starting price: $799' },
  { img: img5, title: 'Magic Mouse', price: 'Starting price: $79' },
  { img: img6, title: 'AirPods', price: 'Starting price: $129' },
]

const Swiper = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let scrollAmount = 0
    const cardWidth = 340 
    const interval = setInterval(() => {
      if (!container) return
      if (scrollAmount + container.offsetWidth >= container.scrollWidth) {
        scrollAmount = 0
      } else {
        scrollAmount += cardWidth
      }
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="swiper-row-container" ref={containerRef}>
      {products.map((p, idx) => (
        <div className="apple-card" key={idx}>
          <img src={p.img} alt={p.title} className="apple-card-img" />
          <div className="apple-card-title">{p.title}</div>
          <div className="apple-card-price">{p.price}</div>
          <button className="apple-card-btn">Buy</button>
        </div>
      ))}
    </div>
  )
}

export default Swiper