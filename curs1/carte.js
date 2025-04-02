class Carte {
    constructor(titluCarte, autorCarte, edituraCarte, anCarte, pretCarte) {
        this.titlu = titluCarte;
        this.autor = autorCarte;
        this.anPublicare = edituraCarte;
        this.gen = anCarte;
        this.editura = pretCarte;
    }
    obtineTitlu(){
        console.log(`Titlul cartii este: ${this.titlu}`);
    }
    afiseazaInfo(){
        console.log(`Detalii despre aceasta carte sunt: ${this.titlu} - ${this.autor} - ${this.anPublicare} - ${this.gen} - ${this.editura}`);
    }
    deschideCarte(){
        console.log(`Am deschis cartea la pagina 15`);
    }
   random(){
        console.log(`Random`);
    }
    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);  
}
}

export {Carte};