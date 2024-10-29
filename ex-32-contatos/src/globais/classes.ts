class ClsContato {
  // propriedades
  id: number
  Nome: string
  Email: string
  Contato: string
  Selecionado?: boolean

  // contrutor
  constructor(
    id: number,
    Nome: string,
    Email: string,
    Contato: string,
    Selecionado?: boolean
  ) {
    // passa valores p/ propriedades locais, criando o objeto
    this.id = id
    this.Nome = Nome
    this.Email = Email
    this.Contato = Contato
    this.Selecionado = Selecionado
  }
}

// exporta classe
export default ClsContato
