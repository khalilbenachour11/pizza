import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/auth.login";
export default function Login(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [err,setErr]=useState(""); const nav=useNavigate();
  const submit=async(e)=>{e.preventDefault();setErr("");try{
    const res=await login({email,password});
    localStorage.setItem("token",res.token); localStorage.setItem("user",JSON.stringify(res.user));
    nav("/profile");
  }catch(e){setErr(e?.response?.data?.message||"Erreur d'authentification");}};
  return (<div className="container-page" style={{paddingTop:40}}>
    <div className="card" style={{maxWidth:420,margin:"0 auto"}}>
      <h2>Connexion</h2>
      {err && <div style={{background:"#ffe5e9",color:"#9f1239",padding:10,borderRadius:12,marginBottom:10}}>{err}</div>}
      <form onSubmit={submit} className="form">
        <input className="input" type="email" placeholder="Adresse e-mail" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Mot de passe" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary" type="submit">Se connecter</button>
      </form>
      <p className="helper" style={{marginTop:12}}>Pas de compte ? <Link to="/register">Créer un compte</Link></p>
    </div></div>);
}
