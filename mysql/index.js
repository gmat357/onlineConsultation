exports.db = (mysql)=>{    
    const db = mysql.createConnection({
        host:"online.cafe24app.com",
        user:"gmas357",
        password:"skdlwlfldk357",
        database:"gmas357"
    });
    return db;
}