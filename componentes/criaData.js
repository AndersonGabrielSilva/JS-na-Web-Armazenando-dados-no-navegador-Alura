import { Tarefa } from "./criaTareda.js"

export const criaData = (data) =>{

    const dataMoment = moment(data,'DD/MM/YYYY')
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataTop = document.createElement('li')
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`

    dataTop.innerHTML = conteudo

    tarefas.forEach((tarefa, id) => {

        const dia = moment(tarefa.dataformatada, 'DD/MM/YYYY')
        const diff = dataMoment.diff(dia)

        if(diff === 0){
            dataTop.appendChild(Tarefa(tarefa,id))
            
        }
    });

    return dataTop
}