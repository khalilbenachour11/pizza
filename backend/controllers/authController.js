const User = require('../models/User'); const bcrypt = require('bcryptjs'); const jwt = require('jsonwebtoken');
const SECRET='SECRET_KEY';
exports.login = async (req,res)=>{ const {email,password}=req.body;
  const user=await User.findOne({email}); if(!user) return res.status(400).json({message:'E-mail non trouvé'});
  const ok=await bcrypt.compare(password,user.password); if(!ok) return res.status(400).json({message:'Mot de passe incorrect'});
  const token=jwt.sign({id:user._id,role:user.role},SECRET,{expiresIn:'1h'});
  res.json({message:'Connexion réussie',token,user:{id:user._id,name:user.name,email:user.email,role:user.role}});
};
