import { useEffect, useState } from "react";
import { listUsers } from "../services/admin.users.list";
export default function AdminUsersList(){
  const token = localStorage.getItem("token");
  const [users,setUsers]=useState([]); const [err,setErr]=useState("");
  useEffect(()=>{(async()=>{try{setUsers(await listUsers(token));}catch(e){setErr("Accès refusé ou erreur serveur");}})();},[token]);
  return (<div className="container-page" style={{paddingTop:24}}>
    <div className="card">
      <h2>Utilisateurs</h2>
      {err && <div style={{background:"#ffe5e9",color:"#9f1239",padding:10,borderRadius:12,marginBottom:10}}>{err}</div>}
      <table className="table"><thead><tr><th>Nom</th><th>Email</th><th>Rôle</th></tr></thead>
      <tbody>{users.map(u=>(<tr key={u._id}><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td></tr>))}</tbody></table>
    </div></div>);
}
