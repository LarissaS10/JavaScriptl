//input
anoNascimento = 2001
nome = "Larissa"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos"

//output
alert(mensagem)


