//constantes
const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000

//input
anoNascimento = parseInt(prompt("Informe o seu ano de nascimento"))
nome = prompt("Informe seu nome")
salarioBase = parseFloat(prompt("Informe seu salário base"))
gratificacao = parseFloat(prompt("Informe a gratificação"))
bonus = parseFloat(prompt("Informe o bônus"))
desconto = parseFloat(prompt("Informe o desconto"))

salarioLiquido = 0
adicional = 0

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento

adicional = SALARIO_ATE_20

salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional

//output
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido
alert(mensagem)

