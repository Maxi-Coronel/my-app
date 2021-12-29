import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"

export const AddUsers = () => {

    const [form, getForm] = useState({email: '', password: ''})

    const crearUser = (e) => {
        const {name, value} = e.target;
        getForm({
            ...form,
            [name]: value
        })
    }

    const addUsers = () => {
        const db = getFirestore();
        const ref = collection(db, 'perfiles');
        const usuario = {
            email: form.email,
            password: form.password
        }
        addDoc(ref, usuario);
    }

    return(
        <>
        <form method="POST" onSubmit={addUsers}>
            <input type="nombre" name="nombre" placeholder="nombre" onChange={crearUser} />
            <input type="email" name="email" placeholder="email" onChange={crearUser} />
            <input type="password" name="password" placeholder="contraseña" onChange={crearUser} />
            <button>Crear</button>
        </form>
        </>
    )
}