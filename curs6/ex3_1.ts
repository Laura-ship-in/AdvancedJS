class StudentNou {
  public studCode: number;
  private studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
  public display() {
    return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
  }
}

let studentnou: StudentNou = new StudentNou(1, "JoeRoot");
studentnou.studCode = 3; // OK
// studentnou.studName = "Joe"; // Error: Property 'studName' is private and only accessible within class 'StudentNou'.
console.log(studentnou.display());
