import { FC } from 'react'
import Menu from './Menu'
import {menu} from './Menu.data'

const MenuContainer:FC = () => {
  return (
    <div>
        <Menu menu={menu}/>
    </div>
  )
}

export default MenuContainer