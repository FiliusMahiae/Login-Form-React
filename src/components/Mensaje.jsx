import './../styles/Mensaje.css';

export default function Mensaje({ message }) {
    let messageClass;
    
    if(message){
        const isError = (message === "Incorrect Email" || message === "Incorrect Password");
        messageClass = isError ? 'mensaje error' : 'mensaje success';
    }

    return (
        <div className={messageClass}>
            <p>{message}</p>
        </div>
    );
}