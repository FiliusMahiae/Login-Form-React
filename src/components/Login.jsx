import { useState } from "react";
import './../styles/Login.css';

export default function Login({ sendOk }) {
    const [data, setData] = useState({
        email: '',
        username: ''
    });

    const handleChange = (event, campo) => {
        setData({
            ...data,
            [campo]: event.target.value
        });
    };

    async function getDataFromApi() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json(); 
    }

    const handleClick = async (event) => {
        event.preventDefault();

        try {
            const dataApi = await getDataFromApi();
            const user = dataApi.find(user => user.email === data.email);
            let message = '';

            if (user) {
                message = `Bienvenid@ ${data.username}`;

                if (user.username !== data.username) {
                    message = "Incorrect Password";
                }
            } else {
                message = "Incorrect Email";
            }

            sendOk(message);
        } catch (error) {
            console.error("Error al obtener datos de la API:", error);
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={handleClick}>
                <label>Email</label>
                <input type="email" placeholder="john.doe@email.com" required onChange={(event) => handleChange(event, 'email')} />
                <label>Username</label>
                <input type="text" placeholder="John Doe" required onChange={(event) => handleChange(event, 'username')} />
                <button>Enviar</button>
            </form>
        </div>
    );
}
