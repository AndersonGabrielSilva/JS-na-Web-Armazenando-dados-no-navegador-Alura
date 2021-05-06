import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const handleNovoItem = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const dataformatada = data.format('DD/MM/YYYY')


    const dados = {
        valor,
        dataformatada
    }
    
    lista.appendChild(criarTarefa(dados))
    input.value = " "

}


const criarTarefa = ({valor, dataformatada}) => {


    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataformatada}** ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)