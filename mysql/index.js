exports.db = (mysql)=>{    
    const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"speed",
        database:"consultaion"
    });
    return db;
}