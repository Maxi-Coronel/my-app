import { Link } from "react-router-dom"

export const UserWidget = () => {
    return(
        <>
        <Link to="/perfil"><button><img className='img-miniatura' src="https://th.bing.com/th/id/R.76654c1ccf9a3d2be9f9894bac07a79b?rik=QBkBlxEFtZrMSw&riu=http%3a%2f%2ficon-icons.com%2ficons2%2f827%2fPNG%2f512%2fuser_icon-icons.com_66546.png&ehk=3sdp0gGBFfN4qR2HRKjXLoNmu6wMTj3hP7ZN1p1IxXo%3d&risl=&pid=ImgRaw&r=0" alt="users" /></button></Link>
        </>
    )
}