import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaArtstation} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/KintzY" target="__blank"><BsLinkedin /></a>
        <a href="https://github.com/KintzY" target="__blank"><BsGithub /></a>
        <a href="https://kintzy.artstation.com/" target="__blank"><FaArtstation /></a>
    </div>
  )
}

export default HeaderSocials