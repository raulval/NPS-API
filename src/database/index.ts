import { Connection, createConnection, getConnection, getConnectionOptions } from "typeorm"; // TypeORM para abrir conexão com banco de dados Sqlite3

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions(); 

  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test' 
      ? "./src/database/database.test.sqlite" 
      : defaultOptions.database
    })
  );
};