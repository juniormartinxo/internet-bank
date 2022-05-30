import chalk from 'chalk'
import inquirer from 'inquirer'
import { createAccount, consultBalance, deposit, transfer, withdraw, exit } from './account/'

operation()

type ActionsType = {
  action: string
}

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Bem vindo ao seu Internet Bank. Em que posso lhe ajudar?',
        choices: ['1 - Criar conta', '2 - Consultar saldo', '3 - Depositar', '4 - Saque', '5 - Transferir', '6 - Sair']
      }
    ])
    .then((answers: ActionsType) => {
      const action: string = answers.action
      const index: number = Number(action.split(' - ')[0] ?? 6)

      switch (index) {
        case 1:
          createAccount()
          break
        case 2:
          consultBalance()
          break
        case 3:
          deposit()
          break
        case 4:
          withdraw()
          break
        case 5:
          transfer()
          break
        case 6:
          exit()
          break
        default:
          console.log(chalk.bgRed.black('Opção inválida!'))
          operation()
          break
      }
    })
    .catch((error: any) => {
      console.log(error)
    })
}
