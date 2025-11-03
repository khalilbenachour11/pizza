import { useEffect, useState } from "react";
import { getMe, updateMe } from "../services/auth.me";
export default function Profile(){
  const token = localStorage.getItem("token");
  const [form,setForm]=useState({name:"",email:"",password:""}); const [msg,setMsg]=useState(""); const [err,setErr]=useState("");
  useEffect(()=>{(async()=>{try{const me=await getMe(token); setForm({name:me.name,email:me.email,password:""});}catch(e){setErr("Erreur de chargement");}})();},[token]);
  const submit=async(e)=>{e.preventDefault(); setMsg(""); setErr("");
    try{ await updateMe(token,{name:form.name,email:form.email, ...(form.password?{password:form.password}:{}) }); setMsg("Profil mis à jour"); }
    catch(e){ setErr(e?.response?.data?.message||"Échec de la mise à jour"); }
  };
  return (<div className="container-page" style={{paddingTop:40}}>
    <div className="card" style={{maxWidth:480,margin:"0 auto"}}>
      <h2>Mon profil</h2>
      {msg && <div style={{background:"#eaffea",color:"#166534",padding:10,borderRadius:12,marginBottom:10}}>{msg}</div>}
      {err && <div style={{background:"#ffe5e9",color:"#9f1239",padding:10,borderRadius:12,marginBottom:10}}>{err}</div>}
      <form onSubmit={submit} className="form">
        <input className="input" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="input" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input className="input" type="password" placeholder="Nouveau mot de passe (optionnel)" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="btn btn-primary" type="submit">Enregistrer</button>
      </form>
    </div></div>);
}
