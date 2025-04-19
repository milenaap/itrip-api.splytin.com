// seeders/userSeeder.js
import User from "../../models/User.js";
import bcrypt from "bcryptjs";


export const seedUsers = async () => {

    const salt = bcrypt.genSaltSync();

    await User.bulkCreate([
        { name: "Milena", email: "darimile@gmail.com", password: bcrypt.hashSync("Splytin2024", salt) },
        { name: "Dorian", email: "doriandarren1@gmail.com", password: bcrypt.hashSync("Splytin2024", salt) },
    ]);
    console.log("🌱 Usuarios insertados correctamente");

};
