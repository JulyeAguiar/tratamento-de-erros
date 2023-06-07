class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try{
      return this.atributos()
    } catch(erro){
      console;console.log(erro.message)
    }
  }

  atributos() {
    if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay != "") {
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      } } else {
        throw new Error("Está faltando informar o estudante e/ou o cosplay e/ou a nota do cosplay. :b")
      }
  }
}

const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);

