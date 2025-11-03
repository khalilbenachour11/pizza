import { useEffect, useState } from "react";
import { listUsers } from "../services/admin.users.list";
import { updateUser } from "../services/admin.users.update";
import { deleteUser } from "../services/admin.users.delete";
export default function AdminUsersEdit(){
  const token=localStorage.getItem("token");
  const [users,setUsers]=useState([]); const [editing,setEditing]=useState(null);
  const load=async()=>setUsers(await listUsers(token));
  useEffect(()=>{load()},[]);
  const onSave=async(u)=>{await updateUser(token,u._id,{name:u.name,email:u.email,role:u.role}); setEditing(null); await load();};
  const onDelete=async(id)=>{if(window.confirm("Supprimer cet utilisateur ?")){await deleteUser(token,id); await load();}};
  return (<div className="container-page" style={{paddingTop:24}}>
    <div className="card">
      <h2>Gestion des utilisateurs</h2>
      <table className="table"><thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th></th></tr></thead>
      <tbody>
        {users.map(u=>(
          <tr key={u._id}>
            <td>{editing===u._id? <input className="input" value={u.name} onChange={e=>setUsers(users.map(x=>x._id===u._id?{...x,name:e.target.value}:x))} /> : u.name}</td>
            <td>{editing===u._id? <input className="input" value={u.email} onChange={e=>setUsers(users.map(x=>x._id===u._id?{...x,email:e.target.value}:x))} /> : u.email}</td>
            <td>{editing===u._id? <select className="select" value={u.role} onChange={e=>setUsers(users.map(x=>x._id===u._id?{...x,role:e.target.value}:x))}><option value="acteur">acteur</option><option value="admin">admin</option></select> : u.role}</td>
            <td style={{display:"flex",gap:6}}>
              {editing===u._id? (<><button className="btn btn-primary" onClick={()=>onSave(u)}>Enregistrer</button><button className="btn btn-muted" onClick={()=>setEditing(null)}>Annuler</button></>)
                : (<><button className="btn btn-muted" onClick={()=>setEditing(u._id)}>Modifier</button><button className="btn btn-muted" onClick={()=>onDelete(u._id)}>Supprimer</button></>)}
            </td>
          </tr>
        ))}
      </tbody></table>
    </div></div>);
}
