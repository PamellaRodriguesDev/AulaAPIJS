// //Exercício 1

// const urlPosts =  'https://jsonplaceholder.typicode.com/posts/5'

//  fetch(urlPosts) // Buscar a variavel na API 
//  .then(resposta => { // aguarando a resposta
//  if (resposta.ok) { // se for ok 
//        console.log('deu bom')
//      return resposta.json() //  retorna um json 
//     }
//     throw new Error('Erro ao conectar API') // caso a url esteja errada 
//   })
//   .then(posts => { // nome da variavel conforme exercicio
//     console.log(posts.title) 
//    console.log(posts.body)
//   })

// // Exercicio 2

// const apiUrl = 'http://nao-existe-api.com'

// fetch(apiUrl) // Busca API

//     .then(reposta => resposta.json()) //Variavel para se for ok ou não - sim retorna o json  (then é a promise)

//     .then(dados => { //Buscar o dado
//         console.log(dados)
//     })
//     .catch(error => { // caso nao de pra conectar na api da esse erro
//         console.log('Falha na comunicação: A Promise foi rejeitada.')
//     })

