import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"

export const AddUsers = () => {

    const [form, getForm] = useState({nombre:'', email:'', password:''})

    const crearUser = (e) => {
        const {name, value} = e.target
        getForm({
            ...form,
            [name]: value,
        })
        console.log(form.nombre);
    }

    const addUsers = (e) => {
        e.preventDefault()
        const db = getFirestore();
        const ref = collection(db, 'perfiles');
        const usuario = {
            nombre: form.nombre,
            email: form.email,
            password: form.password
        }
        addDoc(ref, usuario);
    }

    return(
        <>
            <form method="POST" onSubmit={addUsers}>
                <input type="text" name="nombre" placeholder="nombre" onChange={crearUser} />
                <input type="email" name="email" placeholder="email" onChange={crearUser} />
                <input type="password" name="password" placeholder="contraseña" onChange={crearUser} />
                <button>Crear</button>
            </form>
        </>
    )
}