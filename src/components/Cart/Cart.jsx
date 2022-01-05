import Products from "../../context/CartContext"
import { useContext, useState } from "react"
import { CartProd } from "./CartProd/CartProd"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Order } from "./Order/Order"
import { Link } from "react-router-dom"

export const Cart = () => {

    const {
        cartItem,
        total,
        deletCart,
        userEmail,
        openUser
    } = useContext(Products)

    const [goTicket, setGoTicket] = useState(false);

    const date = new Date();

    const finalizarCompra = () => {
        if (userEmail.length === 0) {
            window.scrollTo(0, 0)
            openUser()
        }else {
            const db = getFirestore();
            const ref = collection(db, 'ticket');
            const newOrder = {
                buyer:{name: userEmail[0].nombre,
                    email: userEmail[0].email,},
                item: cartItem,
                date: date,
                total: total()
            }
            addDoc(ref, newOrder);
            setGoTicket(true);
            deletCart();
        }
    }

    return(
        <>
        {!goTicket ?(
            <div className="w-80 m-auto cart">
                <Link to='/'><button className="btn1 del-cart" onClick={deletCart}>Borrar carrito</button></Link>
                {
                    cartItem?.map((item) => {
                        return(
                            <CartProd
                            key={item.id}
                            item={item}/>
                        )
                    })
                }
                <div>
                    <p className="total">TOTAL <b>${total()}</b></p>
                </div>
                <div>
                    <button className="ocultar btn1" onClick={finalizarCompra}>Finalizar comprar</button>
                </div>
            </div>)
            : ( <div>
               { <Order />}
            </div>)}
        </>
    )
}