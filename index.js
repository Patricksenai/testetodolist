//ToDo-List
alert("BEM VINDO À SUA ToDO-list")
let lista = [];
let lista2 = [];
let listaCompleta = "";
let listacompleta2 = "";
let lixeira = [];
let lixeira2;
let lixeiraCompleta = "";
let lixeiraCompleta2 = "";


function menu(){
    let escolha;

    while(escolha != 0){
        escolha = parseInt(window.prompt(" - Menu - \n1 - Adcionar tarefa\n2 - Ver tarefas\n3 - adicionar tarefa2 \n4 - ver lista2 \n5-  excluir lista1 \n6 - excluir lista2 \n7- ver lixeira \n8- ver lixeira2 \n0-sair"))
        
        switch (escolha) {
            case 1:
                addTarefa();
                break;
            case 2:
                alert(listaItens())
                break;
            case 3:
                addtarefa2();
                break;
            case 4:
                alert(listaItens2());
                break;
            case 5: 
            deletaTarefa()
            break;

            case 6:
                deletaTarefa2()
                break;
            case 7 :
                verLixeira()
                break;
            case 8:
                verLixeira2();
           
            case 0:
                alert("Saindo :(")
                break;
            default:
                alert("Digite um número válido!!!!!!!!")
                menu();
                break;
        }
    }


}
// adiciona as tarefas na lista 
function addTarefa(){
    let digiteTarefa;

    digiteTarefa = window.prompt("Digite a tarefa que deseja inserir à lista: ");
    lista.push(digiteTarefa);
    alert("Tarefa adcionada a lista!!");

}
//
function addtarefa2(){
    let digitatarefa2;

    digitatarefa2 = prompt("digite a tarefa que deseja inserir a lista 2:");
    lista2.push(digitatarefa2);
    alert("tarefa adicionada a lista 2 ");

}


//
function listaItens(){
    listaCompleta = "";
    for (let i = 0; i < lista.length ; i++){
        listaCompleta = listaCompleta + (i+1) + "-" + lista[i]  + "\n"
    }
    return listaCompleta;
}

function listaItens2(){
    listacompleta2 = "";
    for (let i = 0; i < lista2.length ; i++){
        listacompleta2 = listacompleta2 + (i+1) + "-" + lista[i]  + "\n"
    }
    return listacompleta2;

}


function deletaTarefa(){
    let deletaItem;

    deletaItem = parseInt(window.prompt("Qual tarefa você deseja deletar? " + "\n" + listaItens()))
    
    if((deletaItem < 1) || (deletaItem > lista.length)){
        alert("Insira um item existente!!")
        deletaTarefa();
    }else{
        lista.splice((deletaItem - 1), 1);
        listaCompleta = "";
        alert("Tarefa deletada!! ");
        menu();

    }
    
}

function deletaTarefa2(){
    let deletaItem2;

    deletaItem2 = parseInt(window.prompt("Qual tarefa você deseja deletar? " + "\n" + listaItens2()))
    
    if((deletaItem2 < 1) || (deletaItem2 > lista2.length)){
        alert("Insira um item existente!!")
        deletaTarefa2();
    }else{
        lista2.splice((deletaItem2 - 1), 1);
        listacompleta2 = "";
        alert("Tarefa deletada!! ");
        verLixeira2(deletaItem2);
        menu();

    }
}


 function verLixeira(){

    lixeira.push(deletaItem)

    alert (lixeira)
    

 }

 function verLixeira2(){

    lixeira2.push(deletaItem2)

    alert (lixeira2)
    

 }

menu();

