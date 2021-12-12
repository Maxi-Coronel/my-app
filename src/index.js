import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importe las funciones que necesita desde los SDKs que necesita
import { initializeApp } from "firebase/app";
// TODO: Agrega LOS ODS para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyDSA6lwTo6pgVSe3GxDYIR-4RiQMn1ETDA",
  authDomain: "amwayfirebase-35c02.firebaseapp.com",
  projectId: "amwayfirebase-35c02",
  storageBucket: "amwayfirebase-35c02.appspot.com",
  messagingSenderId: "1071452548715",
  appId: "1:1071452548715:web:e18f6cb683d646bd6ecb2e"
};

// Inicializar Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto de enlace de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
