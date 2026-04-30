import mysql from "mysql2/promise";
let connection;
export const createConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "enterce1_admin",
      password: "M@ypassq1212",
      database: "enterce1_dt4modopuro",
    });
  }
  return connection;
};
