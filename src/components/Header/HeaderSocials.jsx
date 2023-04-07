import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div>
        <div className="header__socials">
        <a href="https://instagram.com/akxxsh__?igshid=ZDdkNTZiNTM="><BsInstagram /></a>
        <a href="https://github.com/akashmn"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/akash-m-nandan-87b13a237"><BsLinkedin /></a>
        </div>
    </div>
  )
}

export default HeaderSocials