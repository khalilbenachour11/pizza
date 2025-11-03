# US1_Login
Contenu : Frontend (component + service) et Backend (controller + route).
Intégration backend dans `server.js` (exemples):
- Login: `app.use('/api/auth', require('./routes/auth.login.route'));`
- Register: `app.use('/api/auth', require('./routes/auth.register.route'));`
- Me: `app.use('/api/auth', require('./routes/me.route'));`
- Admin list: `app.use('/api/auth', require('./routes/admin.listUsers.route'));`
- Admin update: `app.use('/api/auth', require('./routes/admin.updateUser.route'));`
- Admin delete: `app.use('/api/auth', require('./routes/admin.deleteUser.route'));`
