const userRoutes = require('../routes/users.routes');
const authRoutes = require('../routes/auth.routes');

const routes = [
    {
        name:"/users",
        endpoints: userRoutes
    },
    {
        name:"/auth",
        endpoints: authRoutes
    }
];

module.exports = routes;