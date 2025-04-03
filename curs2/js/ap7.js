import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion');
user.doarme(7);
console.log(user);
user.nume = 'Dan';
console.log(user);