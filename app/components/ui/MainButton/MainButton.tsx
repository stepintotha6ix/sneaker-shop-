import { ButtonHTMLAttributes, FC } from 'react'

import styles from './MainButton.module.scss'
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MainButton:FC<IButton> = ({children}) => {
  return (
   <button className={styles.button}>{children}</button>
  )
}

export default MainButton