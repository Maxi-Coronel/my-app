import { useCardOpen, useCartItem, useIsCardOpen, useDeletCart } from '../../context/ContextProduct'
import { CartList } from '../CartList/CartList'
import { Link } from 'react-router-dom'
import './index.css'

export const Header = () => {

    const isCardOpen = useIsCardOpen()
    const openCard = useCardOpen()
    const cartItem = useCartItem()
    const deletCart = useDeletCart()

    const categorias = [
        { id:'b', direccion:'/categoria/nutricion', texto:'NUTRICIÓN', img:'https://www.amway.com/medias/hmp-00-category-Nutrition.jpg?context=bWFzdGVyfHJvb3R8MzE5MDF8aW1hZ2UvanBlZ3xoZmMvaDcwLzkxODUyODYxMjc2NDYuanBnfDY4MmI1ZTZhMDRiNjM0MWI2Y2JhOTNkNDM2ZjJlZTk0NDRiYmJiMDE2NDc4NDhjMTk1MzRkZmZlMTViODk3ZTQ'},
        { id:'c', direccion:'/categoria/cuidadoPersonal', texto:'PERSONAL', img:'https://www.amway.com/medias/hmp-00-category-PersonalCare.jpg?context=bWFzdGVyfHJvb3R8MzQ5NDZ8aW1hZ2UvanBlZ3xoMWQvaGIzLzkxODUyODYzMjQyNTQuanBnfDljZWNkOWIyY2VhYzUxNjRiNTk5ZGMyMTE4OTE4NzBjZjQ4MGNiYjY5ZDMxMjg4OTI2Y2JiYzg2YmEyODFmMjk'},
        { id:'d', direccion:'/categoria/hogar', texto:'HOGAR', img:'https://www.amway.com/medias/hmp-00-category-Home.jpg?context=bWFzdGVyfHJvb3R8MzMwNDJ8aW1hZ2UvanBlZ3xoMTcvaDZkLzkxODUyODYzODk3OTAuanBnfGRkNGIwNGExYTM2ZmM0NDNhYzAyOGNhOGY2YmMwMTBlMzNmMTdmNGE2YTczZWU4MzY4NjZiYmUzYjJhZjc1ODQ'},
        { id:'e', direccion:'/categoria/belleza', texto:'BELLEZA', img:'https://www.amway.com/medias/hmp-00-category-Beauty.jpg?context=bWFzdGVyfHJvb3R8MzU1Nzd8aW1hZ2UvanBlZ3xoYmIvaDIwLzkxODUyODYyNTg3MTguanBnfDZiNzJmMzQ4MTUyNmVmY2I0NGFjMDAxNzY5MmQwMjRmOTdjNWRlN2JkYzVkMTg0MWQ4NDAzMzJkNzBiMWUzY2Y'},
    ]

    return(
        <div className='header-conteiner'>
            <h1 className='title'>Ecomerce</h1>
            {categorias?.map((cat) => {
                return (
                    <li className='flex' key={cat.id}><Link to={cat.direccion}>{cat.texto}</Link></li>
                )
            })}
            <button className='cart' onClick={openCard}>Cart</button>
            {
                isCardOpen &&
                (<div className='modal-conteiner'>
                    <div className='modal-cart'>
                        {
                            cartItem?.map((item) => {
                                return(
                                    <CartList
                                    key={item.id}
                                    item={item}/>
                                )
                            })
                        }
                        <button onClick={() => deletCart()}>X</button>
                    </div>
                </div>)
            }
        </div>
    )
}