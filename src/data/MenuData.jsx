import React from "react"
import { FaHome,FaUserAlt,FaShoppingCart } from "react-icons/fa"
import HomePage from '../pages/HomePage'
import MemberPage from '../pages/MemberPage'
import ProductPage from '../pages/ProductPage'

const MenuData = [
    {
        title: 'หน้าแรก',
        path: '/',
        icon: <FaHome/>,
        pageComponent: <HomePage/>
    },
    {
        title: 'สมาชิก',
        path: '/member',
        icon: <FaUserAlt/>,
        pageComponent: <MemberPage/>
    },
    {
        title: 'สินค้า',
        path: '/product',
        icon: <FaShoppingCart/>,
        pageComponent: <ProductPage/>
    },
]

export default MenuData