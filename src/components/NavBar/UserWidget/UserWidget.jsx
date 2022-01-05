import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../../../context/CartContext";

export const UserWidget = () => {
    
    const {
        openUser,
        isUserOpen,
        userEmail,
        setUserEmail
    } = useContext(Products)

    const [errorValidacion, setErrorValidacion] = useState("")
    const [emailEnUso, setEmailEnUso] = useState("")
    
    const db = getFirestore();
    const refPerfiles = collection(db, 'perfiles')

    const [form, getForm] = useState({nombre:'', email:'', password:''})

    const cerrarSesion = () => {
        setUserEmail([])
        openUser()
    }

    const crearUser = (e) => {
        const {name, value} = e.target
        getForm({
            ...form,
            [name]: value,
        })
    }
    const preInicio = (e) => {
        e.preventDefault()
        iniciarSesion()
    }

    const errorUser = () => {
        return( setErrorValidacion(<p className="error">Email o contraseña incorrecta</p>) )
    }
    const errorEmail = () => {
        return( setEmailEnUso(<p className="error">Este email ya esta en uso...</p>) )
    }
    const campoIncompleto = () => {
        return( setEmailEnUso(<p className="error">Completa los campos</p>) )
    }
    
    const iniciarSesion = () => {
        getDocs(refPerfiles)
        .then((snapShot) => {
            const perfiles = snapShot.docs.map((doc) => {return{ id: doc.id, ...doc.data()}});
            const autenticar = (perfiles.filter((x) => x.email === form.email && x.password === form.password))
            console.log(autenticar);
            if (autenticar.length !== 0) {
                setUserEmail(autenticar);
            } else{
                errorUser()
            }
        })
    }
    
    const addUsers = (e) => {
        e.preventDefault()
        console.log(form.email, form.password);

        if (form.email.length !== 0 && form.password.length !== 0) {
            const usuario = {
                nombre: form.nombre,
                email: form.email,
                password: form.password
            }
            getDocs(refPerfiles)
            .then((snapShot) => {
                const perfiles = snapShot.docs.map((doc) => {return{ id: doc.id, ...doc.data()}});
                const validar = perfiles.filter((x) => x.email === form.email)

                if (validar.length !== 0) {
                    errorEmail()
                }else {
                    addDoc(refPerfiles, usuario)
                    .then(({id}) => {
                    const ref = doc(db, 'perfiles', id)
                    updateDoc(ref, { id: id})
                    })
                    iniciarSesion()
                }
            })
        }else {
            campoIncompleto()
        }
    }

    return(
        <>
            <button onClick={openUser} className="radius-50"><img className='img-miniatura ocultar' src="https://th.bing.com/th/id/R.76654c1ccf9a3d2be9f9894bac07a79b?rik=QBkBlxEFtZrMSw&riu=http%3a%2f%2ficon-icons.com%2ficons2%2f827%2fPNG%2f512%2fuser_icon-icons.com_66546.png&ehk=3sdp0gGBFfN4qR2HRKjXLoNmu6wMTj3hP7ZN1p1IxXo%3d&risl=&pid=ImgRaw&r=0" alt="users" /></button>
            {
                isUserOpen &&
                (userEmail.length !== 0 ? (
                    <div className='modal-conteiner ocultar'>
                        <div className='modal-cart ocultar'>
                            <span>email: {userEmail[0]?.email}</span>
                            <Link to="/ticket"><button className="btn">Tus compras</button></Link>
                            <Link to="/"><button className="btn1-red" onClick={cerrarSesion}>Cerrar sesión</button></Link>
                        </div>
                    </div>)
                :   (
                <div className='modal-conteiner'>
                    <div className='modal-cart'>
                        <form method="POST" className="ocultar form-users">
                            <input className="ocultar" type="text" name="nombre" placeholder="nombre" onChange={crearUser} />
                            <input className="ocultar" type="email" name="email" placeholder="email" onChange={crearUser} required />
                            {errorValidacion}
                            <input className="ocultar" type="password" name="password" placeholder="contraseña" onChange={crearUser} required />
                            {errorValidacion}
                            <button className="ocultar btn" onClick={preInicio}>Iniciar sesión</button>
                            <button className="ocultar btn" onClick={addUsers}>Crear usuario</button>
                            {emailEnUso}
                        </form>
                    </div>
                </div>))
            }
        </>
    )
}