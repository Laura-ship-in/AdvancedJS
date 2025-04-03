class User{
    #vartsa;
    _email;
    constructor(id,nume){
        //setam proprietatile
        this.is = id;
        this.nume = nume;
    }
set email(myemail){
    this._email = myemail;
}
get email(){
    return this._email;
}
set vartsa(age){
    this.#vartsa = age;

}
get vartsa(){
    return this.#vartsa;
}

    datePersonale(){
        console.log(`Salut numele meu este ${this.nume} si adresa de mail este ${this._email}, varsta este ${this.#vartsa}`);
    }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}
