
import { response } from "express";
import bcrypt from 'bcryptjs';
import User from "../../models/User.js";
import { generateJWT } from "../../helpers/jwt/generateJWT.js";


export const authLoginController = async(req, res = response) => {
    
    const { email, password } = req.body; 

    try {

        const user = await User.findOne({ where: { email } });

        if(!user){
            return res.status(400).json({
                message: 'Usuario / Password no son correctos - email'
            });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if( !validPassword ){
            return res.status(400).json({
                message: 'Usuario / Password no son correctos - password'
            });
        }

        const token = await generateJWT(user.id);


        res.json({
            token,
            user,
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Error. Contacte con el Administador'
        });
    }

}