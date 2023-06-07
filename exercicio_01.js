/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Errado extends Error {
  constructor(message){
  super(message);
  this.name = "Meu Erro";
  }
 }

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try{
      return this.atributos()
    } catch (erro){
      console.log(erro.message)
    }
  } 


  atributos() {
    if (this.nome != "" && this.idade != "" && this.especie != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        especie: this.especie
      } } else {
        throw new Errado("Está faltando nome e/ou idade e/ou turma. ;)")
      }
    }
}

const meuAnimal = new Animal("", 3, "cachorro");
const atributos = meuAnimal.mostrarAtributos();



