import { useCardOpen, useCartItem, useIsCardOpen } from '../../context/ContextProduct'
import './index.css'

export const Header = () => {

    const isCardOpen = useIsCardOpen()
    const openCard = useCardOpen()
    const cartItem = useCartItem()

    return(
        <div className='header-conteiner'>
            <h1 className='title'>Ecomerce</h1>
            <button className='cart' onClick={openCard}>Cart</button>
            {
                isCardOpen &&
                (<div className='modal-conteiner'>
                    <div className='modal-cart'>
                        {
                            cartItem?.map((item) => {

                                const {
                                    title,
                                    image,
                                    price
                                } = item

                                return(
                                    <div>
                                        <img src={image} alt={title} className='img-miniatura'/>
                                        <span>{price}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>)
            }
        </div>
    )
}