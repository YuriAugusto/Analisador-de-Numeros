let num = document.querySelector("input#fnum")//Vinculo com o input através do id fnum
let lista = document.querySelector("select#flista")//Vinculo com o select através do id flista
let  res = document.querySelector("div#res")//Vinculo com a segunda div
let valores = []//Criação do vetor/array

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }

}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//Ele so adiciona se for um número e (&&) se o número ainda não está na lista
        valores.push(Number(num.value))
        let item = document.createElement("option")//Cria um elemento do tipo option de forma dinâmica
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)//E para adicionar na lista você usa uma appendChild
        res.innerHTML = ""
    }else{
        alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ""
    num.focus()//Faz as coisas digitadas no input number serem apagadas automáticamente depois que o item é adicionado

}//Chave de fechamento da function

function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }else{
        let tot = valores.length//Total de números do array valores
        let maior = valores[0]//Maior dos valores
        let menor = valores[0]//Menor dos valores
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]            
        }
        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor listado é = ${menor}.</p>`
        res.innerHTML += `<p>O maior valor listado é = ${maior}.</p>`
        res.innerHTML += `<p>Somando todos temos o resuldado = ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é = ${media}.</p>`

    }
}

