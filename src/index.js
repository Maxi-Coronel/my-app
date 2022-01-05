import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {collection, addDoc, getFirestore} from 'firebase/firestore'

// Importe las funciones que necesita desde los SDKs que necesita
import { initializeApp } from "firebase/app";
import { ProductsProvider } from './context/CartContext';
// TODO: Agrega LOS ODS para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: process.env.API_KEY,//"AIzaSyDSA6lwTo6pgVSe3GxDYIR-4RiQMn1ETDA",
  authDomain: "amwayfirebase-35c02.firebaseapp.com",
  projectId: "amwayfirebase-35c02",
  storageBucket: "amwayfirebase-35c02.appspot.com",
  messagingSenderId: "1071452548715",
  appId: "1:1071452548715:web:e18f6cb683d646bd6ecb2e"
};

// Inicializar Firebase
initializeApp(firebaseConfig);

const data = [{
        title: 'Loc',
        price: 1823,
        stock: '8',
        image: 'https://www.planeadordecompras.com/files/productos/imagen/144.jpg?s=147127',
        categoria: 'hogar',
        quantityCart: 0,
        tituloDescripcion: 'El limpiador de superficies más versátil',
        descripcion: 'Apto para cualquier artículo y superficie lavable. El L.O.C.™ Limpiador Concentrado Multiusos con ingredientes derivados de fuentes naturales sin blanqueador, es de alto desempeño y versátil, por eso es la elección correcta, siempre.'
    },
    {
        title: 'Lavaplatos líquido',
        price: 2020,
        stock: '10',
        image: 'https://www.planeadordecompras.com/files/productos/imagen/118.jpg?s=146393',
        categoria: 'hogar',
        quantityCart: 0,
        tituloDescripcion: 'Una sola gota corta la grasa',
        descripcion: 'La fórmula de Dish Drops™ Lavaplatos Líquido Concentrado elimina la grasa y los residuos o manchas de alimentos dejando tu vajilla y utensilios de cocina limpios y relucientes.'
    },
    {
        title: 'SA8 detergente para ropa',
        price: 2350,
        stock: '5',
        image: 'https://www.planeadordecompras.com/files/productos/imagen/113.jpg?s=238738',
        categoria: 'hogar',
        quantityCart: 0,
        tituloDescripcion: 'Efectiva limpieza que protege tu ropa',
        descripcion: ' Detergente en polvo concentrado que ofrece un efectivo desempeño sobre las manchas más difíciles y conserva el brillo de las prendas blancas o de color.  '
    },
    {
        title: 'Pasta dentífrica',
        price: 760,
        stock: '10',
        image: 'https://www.amway.com/medias/E9530-en-US-690px-01.jpg?context=bWFzdGVyfGltYWdlc3w5NDcxNHxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaGJmLzkxMjM3MjM0NDQyNTQuanBnfGZhZWFiYjcxYmMwMWE0ZDkwNjMzYjM1MGZhY2QxZmQxODk2OGQ3NTJhYTU5MzZkZjMxMzY2ODM2ZmU0YzA5YmQ',
        categoria: 'cuidadoPersonal',
        quantityCart: 0,
        tituloDescripcion: 'Consigue una sonrisa radiante donde quiera que vayas',
        descripcion: 'La Pasta Dentífrica con Fluoruro Glister™ tiene ingredientes, como el fluoruro, que ayudan a fortalecer el esmalte de los dientes, y el silicato de sodio, que los pule de manera suave.'
    },
    {
        title: 'Aerosol Refrescante',
        price: 640,
        stock: '10',
        image:'https://www.amway.com/medias/120351-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w0NDgwN3xpbWFnZS9qcGVnfGltYWdlcy9oMzYvaGRiLzg5ODkyNzMyMjcyOTQuanBnfGMzNDkxMTE4N2I2MjRiNjk5MDgzODZhN2M5MzljOWQxOTc2M2QxZGZjODEzZmFlOGRjNGFjYjhmYThiMTA2MGY',
        categoria: 'cuidadoPersonal',
        quantityCart: 0,
        tituloDescripcion: 'ALIENTO LIMPIO Y FRESCO SOBRE LA MARCHA',
        descripcion: 'Disfruta de una sensación de menta fresca con un spray rápido. Fórmula sin aerosol no contiene azúcar ni calorías.'
    },
    {
        title: 'Enjuague bucal',
        price: 1458,
        stock: '3',
        image: 'https://th.bing.com/th/id/OIP.tuHKtVOPJBi4J6Ppzxq5pQHaKm?pid=ImgDet&rs=1',
        categoria: 'cuidadoPersonal',
        quantityCart: 0,
        tituloDescripcion: 'Reduce la placa y elimina las bacterias que causan mal aliento',
        descripcion: 'El Enjuague Bucal Concentrado Fórmula Anti Placa Glister™ ayuda a eliminar bacterias que causan el mal aliento, a la vez que remueve la placa que el cepillado por sí solo no logra, manteniendo el aliento fresco y con un delicioso sabor a menta.'
    },
    {
        title: 'Bebida energizante XS',
        price: 215,
        stock: '12',
        image: 'https://www.amway.com/medias/124618-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w2Mzc5NHxpbWFnZS9qcGVnfGltYWdlcy9oY2EvaDE4Lzg5NjQzNDk4MjA5NTguanBnfDlkZDRiZDQ3NjQ4ZWU2NjRhOTgwYjg4NWVkMThlZjNlZGM5ZmFjMjY5ODA3ZTU1ZTA1YjM5M2U0ZWM2N2NkNzM',
        categoria: 'nutricion',
        quantityCart: 0,
        tituloDescripcion: '¡UNA EXPLOSIÓN DE ENERGÍA SIN NADA DE AZÚCAR!',
        descripcion: 'Energía positiva para impulsar tu próxima aventura. Cargadas con 80 mg de cafeína, una megadosis de vitaminas B, uno a dos g de carbohidratos y solo 10 calorías* por lata.'
    },
    {
        title: 'Intensive Skincare',
        price: 4960,
        stock: '7',
        image: 'https://www.amway.com/medias/120524V-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w1MTM5OHxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaDNjLzg4MzgyMjUzOTU3NDIuanBnfDkwMjdkNTFkNDg2ZmUwNDBlNjkzMjdlNjJmYmQzYzhlMjE2NWJhOTMzYmZmNzM3MjQ3MDIyZDgwZTA1MmVkMTk',
        categoria: 'belleza',
        quantityCart: 0,
        tituloDescripcion: '¡Tratamiento intensivo antiedad para una apariencia más juvenil!',
        descripcion: 'Establece tu régimen diario del cuidado de la piel con tecnología que combate las arrugas, protección antioxidante y renovación de la elasticidad. Hecho con la más alta concentración de Vitamina C y ácido hialurónico en un producto en la historia de Artistry™. Alisa, reduce y repara radicalmente la apariencia de líneas finas y arrugas en 4 semanas.'
    },
    {
        title: 'Double X',
        price: 6594,
        stock: '7',
        image: 'https://www.planeadordecompras.com/files/productos/imagen/23.jpeg?s=44765',
        categoria: 'nutricion',
        quantityCart: 0,
        tituloDescripcion: 'El Suplemento alimenticio con vitaminas, minerales y fitonutrientes más vendido del mundo.',
        descripcion: 'Suplemento que Ofrece una mezcla óptima de 12 vitaminas, 10 minerales y 22 fitonutrientes, (Nutrilite clasifica los fitonutrientes de las 5 gamas de colores) provenientes de granjas con certificación orgánica. Con tecnología patentada PhytoProtect, la cual es una mezcla de extractos vegetales de cúrcuma y romero que elevan el mecanismo immune y antioxidante de tu cuerpo. Esta mezcla es 4 veces más fuerte que los resultados combinados de los extractos individuales.'
    },
    {
        title: 'CLA 500',
        price: 4000,
        stock: '7',
        image: 'https://www.planeadordecompras.com/files/productos/imagen/48.jpeg?s=51571',
        categoria: 'nutricion',
        quantityCart: 0,
        tituloDescripcion: 'El aliado en tu rutina de ejercicio',
        descripcion: 'El Ácido Linoléico Conjugado (CLA, por sus siglas en inglés) está elaborado a partir de aceite de cártamo 100% natural con una alta tecnología de fabricación de cápsulas suaves, además contiene ingredientes procedentes de granjas con certificación orgánica.'
    },
    {
        title: 'Tónico Suavizante Renovador',
        price: 3318,
        stock: '7',
        image: 'https://www.planeadordecompras.com/files/productos/imagen/2015.jpg?s=121897',
        categoria: 'belleza',
        quantityCart: 0,
        tituloDescripcion: 'Refrescante explosión de hidratación que hará lucir tu piel radiante.',
        descripcion: 'Contiene prebióticos, un extracto que equilibra el microbioma que ayuda a mantener la función de barrera de la piel. Contiene nuestro Phyto-powered Repair Complex. Una mezcla de cultivos Nutrilite?; espinaca, cúrcuma y té de flor de olivo, la cual ayuda a disminuir los signos visibles de la edad y a reparar la elasticidad y firmeza de la piel en un 600%'
    },
    {
        title: 'Crema de Reactivación Renovadora para ojos',
        price: 5356,
        stock: '7',
        image: 'https://www.planeadordecompras.com/files/productos/imagen/2016.jpg?s=129522',
        categoria: 'belleza',
        quantityCart: 0,
        tituloDescripcion: '24 horas de hidratación! Reduce los múltiples signos visibles de la edad.',
        descripcion: 'Contiene péptidos, la mezcla de péptidos ayuda a reducir la retención de líquidos que se forman debajo de los ojos. Contiene nuestro Phyto-powered Repair Complex. Una mezcla de cultivos Nutrilite?; espinaca, cúrcuma y té de flor de olivo, la cual ayuda a disminuir los signos visibles de la edad y a reparar la elasticidad y firmeza de la piel en un 600%'
    }]
//const db = getFirestore()
//const ref = collection(db, 'products')

//data.map((product) => addDoc(ref, product))

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto de enlace de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
