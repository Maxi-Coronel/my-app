import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget/CartWidget'
import { UserWidget } from './UserWidget/UserWidget'
import './index.css'

export const NavBar = () => {

    const categorias = [
        { id:'a', direccion:'/', texto:'INICIO', img:'https://www.amway.com/medias/amway-logo-black.svg?context=bWFzdGVyfGltYWdlc3w0OTI1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3YS9oNTYvODg4ODM0NDI0ODM1MC5zdmd8YmI0MmY2MzMxZjc2ZmVkZjAzNDAxMjhmOWRlYjYyMzc4ODJmZWQ2ZTQ1MmQ4NDA5YjM2Y2VhNDc2NjFmNzcxYg'},
        { id:'b', direccion:'/categoria/nutricion', texto:'NUTRICIÓN', img:'https://www.amway.com/medias/hmp-00-category-Nutrition.jpg?context=bWFzdGVyfHJvb3R8MzE5MDF8aW1hZ2UvanBlZ3xoZmMvaDcwLzkxODUyODYxMjc2NDYuanBnfDY4MmI1ZTZhMDRiNjM0MWI2Y2JhOTNkNDM2ZjJlZTk0NDRiYmJiMDE2NDc4NDhjMTk1MzRkZmZlMTViODk3ZTQ'},
        { id:'c', direccion:'/categoria/cuidadoPersonal', texto:'PERSONAL', img:'https://www.amway.com/medias/hmp-00-category-PersonalCare.jpg?context=bWFzdGVyfHJvb3R8MzQ5NDZ8aW1hZ2UvanBlZ3xoMWQvaGIzLzkxODUyODYzMjQyNTQuanBnfDljZWNkOWIyY2VhYzUxNjRiNTk5ZGMyMTE4OTE4NzBjZjQ4MGNiYjY5ZDMxMjg4OTI2Y2JiYzg2YmEyODFmMjk'},
        { id:'d', direccion:'/categoria/hogar', texto:'HOGAR', img:'https://www.amway.com/medias/hmp-00-category-Home.jpg?context=bWFzdGVyfHJvb3R8MzMwNDJ8aW1hZ2UvanBlZ3xoMTcvaDZkLzkxODUyODYzODk3OTAuanBnfGRkNGIwNGExYTM2ZmM0NDNhYzAyOGNhOGY2YmMwMTBlMzNmMTdmNGE2YTczZWU4MzY4NjZiYmUzYjJhZjc1ODQ'},
        { id:'e', direccion:'/categoria/belleza', texto:'BELLEZA', img:'https://www.amway.com/medias/hmp-00-category-Beauty.jpg?context=bWFzdGVyfHJvb3R8MzU1Nzd8aW1hZ2UvanBlZ3xoYmIvaDIwLzkxODUyODYyNTg3MTguanBnfDZiNzJmMzQ4MTUyNmVmY2I0NGFjMDAxNzY5MmQwMjRmOTdjNWRlN2JkYzVkMTg0MWQ4NDAzMzJkNzBiMWUzY2Y'},
    ]

    return(
        <div className='header-conteiner'>
            <ul className='flex'>
                {categorias?.map((cat) => {
                    return (
                        <li className='flex' key={cat.id}><Link to={cat.direccion}>{cat.texto}</Link></li>
                    )
                })}
            </ul>
            <div className='flex-center'>
                <CartWidget />
                <UserWidget />
            </div>
        </div>
    )
}