import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid'

import { AppWrap, MotionWrap } from '../../Wrapper'
import { urlFor, client } from '../../client'
import './Testimonial.scss'
import { images } from '../../constants'

const Testimonial = () => {
 const [brands, setBrands] = useState([])
 const [testimonials, setTestimonials] = useState([])
 const [currentIndex, setCurrentIndex] = useState(0)

 useEffect(() => {
  const query = '*[_type == "testimonial"]'
  const brandsQuery = '*[_type == "brands"]'

  client.fetch(query).then((data) => {
   setTestimonials(data)
  })
  client.fetch(brandsQuery).then((data) => {
   setBrands(data)
  })
 }, [])

 const handleClick = (index) => {
  setCurrentIndex(index)
 }

 const test = testimonials[currentIndex]
 return (
  <>
   {testimonials.length && (
    <>
     <div className="app__testimonial-item app__flex">
      <img src={urlFor(test.imageurl)} alt="testimonial" />
      <div className="app__testimonial-content">
       <p className="p-text">{test.feedback}</p>
       <div>
        <h4 className="bold-test">{test.name}</h4>
        <h5 className="p-test">{test.company}</h5>
       </div>
      </div>
     </div>
     <div className="app__testimonial-btns app__flex">
      <div
       className="app__flex"
       onClick={() =>
        handleClick(
         currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
        )
       }
      >
       <HiChevronLeft />
      </div>
      <div
       className="app__flex"
       onClick={() =>
        handleClick(
         currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
        )
       }
      >
       <HiChevronRight />
      </div>
     </div>
    </>
   )}
   <p> Hello</p>
   <div className="app__testimonial-brands app__flex">
    {console.log(brands)}
    {brands.map((brand) => 
     <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: 'tween' }}
      key={uuidv4()}
     >
      <img src={urlFor(brand?.imgUrl)} alt={brand.name} />
      <p>{brand.name}</p>
     </motion.div>
    )}
   </div>
  </>
 )
}

export default AppWrap(
 MotionWrap(Testimonial, 'app__testimonial'),
 'testimonial',
 'app__primarybg'
)
