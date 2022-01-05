export const Mensaje = ({ ord }) => {

    const nameProd = ord.item.map((x) => (<div>{x.title + "    " + x.quantityCart}</div>))

    return (
        <div className="p-3">
            <h2>ID de la compra: {ord.id}</h2>
            <h2>Fecha: {ord.date}</h2>
            <h2>Nombre del producto: {nameProd}</h2>
            <h2>Nombre: {ord.buyer.name}</h2>
            <h2>Email: {ord.buyer.email}</h2>
            <h2>TOTAL: ${ord.total}</h2>
        </div>
    )
}