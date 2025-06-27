import React from 'react'
import './Article.css'
import img1 from '../../assets/article1.jpg'
import img2 from '../../assets/article2.jpg'
import img3 from '../../assets/article3.jpg'
import img4 from '../../assets/article4.jpg'

const articles = [
  {
    img: img1,
    title: "The Future of Smartwatches",
    desc: "Discover how smartwatches are changing our daily lives and what innovations are coming next.",
  },
  {
    img: img2,
    title: "Apple Watch Tips & Tricks",
    desc: "Get the most out of your Apple Watch with these essential tips and hidden features.",
  },
  {
    img: img3,
    title: "Choosing the Right Band",
    desc: "A guide to selecting the perfect band for your Apple Watch, whether for sport or style.",
  },
  {
    img: img4,
    title: "The Best TVs of 2025",
    desc: "Explore our top picks for smart TVs this year and find the perfect one for your home.",
  },
]

const Article = () => {
  return (
    <div className="article-list">
      {articles.map((a, idx) => (
        <div className="article-card" key={idx}>
          <img src={a.img} alt={a.title} className="article-img" />
          <div className="article-title">{a.title}</div>
          <div className="article-desc">{a.desc}</div>
          <div className="article-underline"></div>
        </div>
      ))}
    </div>
  )
}

export default Article