//procurar o botão
document.querySelector("#add-time")
    //quando clicar no botao
    .addEventListener('click', cloneField)
//executar uma ação
function cloneField() {
    //duplicar os campos
    //quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//node é um elemento html. quando true pega a div mais todos os elementos dentro dela, se não só pega a div

    //pegar os campos. quais campos
    const fields = newFieldContainer.querySelectorAll('input')//vai procurar todos input dentro do newfieldcontainer
    // fields[0].value = ""
    // fields[1].value = ""
    // para cada campo, limpar
    fields.forEach(function (field) {
        //pegar o field do momento e limpa 
        fields.value = ""
    })
    //colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    // vai procurar no #schedule-items  e     adicionar um filho
}
