import React, { useEffect, useRef } from 'react'
import './Swiper.css'
import img1 from '../../assets/item1.jpg'
import img2 from '../../assets/item2.jpg'
import img3 from '../../assets/item3.jpg'
import img4 from '../../assets/item4.jpg'
import img5 from '../../assets/item5.jpg'
import img6 from '../../assets/item6.jpg'

const products = [
  { img: img1, title: 'iMac', price: '$1299' },
  { img: img2, title: 'Apple Watch', price: '$200.00' },
  { img: img3, title: 'MacBook', price: '$999' },
  { img: img4, title: 'Smart Watch', price: '$399' },
  { img: img5, title: 'iPad', price: '$349' },
  { img: img6, title: 'AirPods', price: '$179' },
]

const Swiper = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let scrollAmount = 0
    const cardWidth = 240
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
        <div className="swiper-simple" key={idx}>
          <img src={p.img} alt={p.title} className="swiper-simple-img" />
          <div className="swiper-simple-title">{p.title}</div>
          <div className="swiper-simple-price">{p.price}</div>
          <button className="swiper-simple-btn">Shop</button>
        </div>
      ))}
    </div>
  )
}

export default Swiper