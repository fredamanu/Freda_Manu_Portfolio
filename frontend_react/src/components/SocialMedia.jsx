import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
const SocialMedia = () => {
 return (
  <div className="app__social">
   <div>
    <a href="https://www.linkedin.com/in/freda-manu/">
     <FaLinkedinIn />
    </a>
   </div>
   <div>
    <a href="https://github.com/fredamanu">
     <FaGithub />
    </a>
   </div>
   <div>
    <a>
     <BsTwitter />
    </a>
   </div>
   <div>
    <a href="https://www.facebook.com/freshdew">
     <FaFacebookF />
    </a>
   </div>
  </div>
 )
}

export default SocialMedia
