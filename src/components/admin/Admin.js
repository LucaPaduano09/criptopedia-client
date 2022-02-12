import {React , useState} from "react";
import {useHistory} from "react-router-dom"
import "../../styles/admin/AdminLogin.css"
const Admin = () => {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory()
    const hanldeLogin = () =>{
        if(username === "admin"){
            if(password === "123456"){
                console.log("credenziali valide")
                history.push("/")
            }
        }else{
            window.alert("credenziali non valide")
        }
    }
    return(
        <div className="admin-login-container">
            <h1>Area Amministratore</h1>
            <div className="admin-login-form">
                <label>Inserisci le credenziali</label>
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={hanldeLogin}>Log-in</button>
            </div>
        </div>
    )
}

export default Admin