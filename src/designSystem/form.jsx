export const form = (onChange, onClick, onClick2) => {
    <form method="POST" className="ocultar form-users">
        <input className="ocultar" type="text" name="nombre" placeholder="nombre" onChange={onChange} />
        <input className="ocultar" type="email" name="email" placeholder="email" onChange={onChange} />
        <input className="ocultar" type="password" name="password" placeholder="contraseña" onChange={onChange} />
        <button className="ocultar btn" onClick={onClick}>Iniciar sesión</button>
        <button className="ocultar btn" onClick={onClick2}>Crear usuario</button>
    </form>
}