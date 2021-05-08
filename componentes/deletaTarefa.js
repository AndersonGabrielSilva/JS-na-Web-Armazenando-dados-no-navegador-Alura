const deletarTarefa = (atualiza,id) => { 
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    
    //O Splice remove itens de um array de um ponto a outro
    //Removendo 
    tarefasCadastradas.splice(id,1)

    
    localStorage.setItem('tarefas',JSON.stringify(tarefasCadastradas))

    atualiza()

}

const BotaoDeleta = (atualiza,id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza,id))

    return botaoDeleta
}



export default BotaoDeleta