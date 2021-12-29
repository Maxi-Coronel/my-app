import Products from "../../context/CartContext"
import { useContext, useState } from "react"
import { CartProd } from "./CartProd/CartProd"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Order } from "./Order/Order"

export const Cart = () => {

    const {
        cartItem,
        total,
        deletCart,
        getUser
    } = useContext(Products)

    const [form, getForm] = useState({email: '', password: ''});
    const [goTicket, setGoTicket] = useState(false);

    const date = new Date();

    const finalizarCompra = () => {
        getUser(form);
        const db = getFirestore();
        const ref = collection(db, 'ticket');
        const newOrder = {
            buyer:{name: form.nombre,
                   email: form.email,},
            item: cartItem,
            date: date,
            total: total()
        }
        addDoc(ref, newOrder);
        setGoTicket(true);
        deletCart();
    }

    const llenaForm = (e) => {
        const {name, value} = e.target
        getForm({
            ...form,
            [name]: value,
        })
    }

    return(
<div>
        <>
        {!goTicket ?(
            <div className="background-white w-80 m-auto sombra-gray">
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
                    <span>TOTAL ${total()}</span>
                </div>
                <div>
                    <button onClick={deletCart}>Borrar carrito</button>
                </div>
                <form method="POST" onSubmit={finalizarCompra}>
                    <input type="nombre" name="nombre" placeholder="nombre" onChange={llenaForm} />
                    <input type="email" name="email" placeholder="email" onChange={llenaForm} />
                    <input type="password" name="password" placeholder="contraseña" onChange={llenaForm} />
                    <button>Comprar</button>
                </form>
            </div>)
            : ( <div>
               { <Order />}
            </div>)}
        </>
        
        </div>
    )
}