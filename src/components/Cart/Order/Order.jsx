import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Products from '../../../context/CartContext'
import { Mensaje } from './Mensaje/Mensaje'

export const Order = () => {

    const email = 'rocioviotto@gmail.com'
    const [order, setOrder] = useState([])


    useEffect(() => {
        const db = getFirestore();
        const ref = query(collection(db, 'ticket'), orderBy('date'));
        getDocs(ref).then((snapshot) => {
            const orden = snapshot.docs.map((doc) => {
                const data = doc.data();
                const {date} = data;
                const fecha = new Date(date.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                }).format(fecha);
                return {
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt,
                };
            });

            setOrder(orden.filter((x) => x.buyer.email === email))
        });
    }, [email]);

    return (
        <div>
            {
                order?.length === 0 ? (
                    <h1>Cargando...</h1>
                ) : (
                    <>
                        <h1>Acá te dejamos tu tickets de la compra</h1>
                        {order.map((ord) => (
                            <Mensaje key={ord.id} ord={ord}/>
                        ))}
                    </>
                )
            }
            <Link to='/'>Volver al Home</Link>
        </div>
    )
}