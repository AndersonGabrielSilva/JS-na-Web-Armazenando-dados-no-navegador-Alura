import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
import { carregaTarefa } from './carregaTarefa.js'

export const handleNovoItem = (evento) => {
        evento.preventDefault()

        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const calendario = document.querySelector('[data-form-date]')
        const data = moment(calendario.value)

        const dataformatada = data.format('DD/MM/YYYY')
        const horario = data.format('HH:mm')
        const concluida = false;

        const dados = {
            valor,
            dataformatada,
            concluida,
            horario
        }

        // Concatena tudo que está no array mais os dados
        const tarefasAtualizadas = [...tarefas, dados]

        localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

        input.value = " "

        carregaTarefa()
}


export const Tarefa = ({ valor, horario, concluida },id) => {


    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${horario}** ${valor}</p>`

    if(concluida){
    tarefa.classList.add('done')

    }

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa,id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa
}
