import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB,
};

const db = mysql.createConnection(access);

export default db;
