export const Mensaje = ({ord}) => {
    const nameProd = ord.item.map((x) => (<div>{x.title}</div>))


    return (
        <div className="p-3">
            <h2>ID de la compra:</h2>
            <h3>{ord.id}</h3>
            <h2>Fecha:</h2>
            <h3>{ord.date}</h3>
            <h2>Nombre del producto:</h2>
            <h3>{nameProd}</h3>
            <h2>Nombre:</h2>
            <h3>{ord.buyer.name}</h3>
            <h2>Email:</h2>
            <h3>{ord.buyer.email}</h3>
        </div>
    )
}