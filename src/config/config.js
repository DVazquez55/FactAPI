require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });

const config={
    Port: process.env.SERVER_PORT,
    Secret: 'Fc2022App@mX'
};

module.exports = config;