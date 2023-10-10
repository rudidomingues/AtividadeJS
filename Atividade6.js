// Dados do cliente
const nomeCompleto = "João Silva";
const anoNascimento = 2000; // Ano de nascimento do cliente

// Ano atual
const anoAtual = new Date().getFullYear();// uma opção 
const anoAtual1= 2023; // uma opção 
// Idade do cliente
const idade = anoAtual - anoNascimento;

// Verificar se o cliente é maior de idade (18 anos ou mais)
if (idade >= 18) {
  console.log(`${nomeCompleto} pode consumir álcool.`);
} else {
  console.log(`${nomeCompleto} não pode consumir álcool.`);
}
