//const jws = require('jsonwebtoken');
import jws from "jsonwebtoken";

const generarJWT = (user ='') => {
    return new Promise((resolve, reject ) => {
        const payload = {user};

        jws.sign(payload, process.env.SECRETORPRIVATEKEY || '', {
            expiresIn: '4h'
        }, (err, token) =>{
            if(err){
                console.log(err);
                reject('No se pudo generar el tokeb')
            }else {
                resolve(token);
            }
        })
        
    })


}

export default generarJWT;
