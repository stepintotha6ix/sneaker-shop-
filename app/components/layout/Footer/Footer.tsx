import React, { FC } from 'react'
import SocialLinks from './SocialLinks'
import styles from './Footer.module.scss'
const Footer:FC = () => {
  return (
    <div className={styles.block}>
        <SocialLinks />
        
    </div>
  )
}

export default Footer