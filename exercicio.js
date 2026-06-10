const urlPosts =  'https://jsonplaceholder.typicode.com/posts/5'


 fetch(urlPosts) // Buscar a variavel na API 
 .then(resposta => { // aguarando a resposta
 if (resposta.ok) { // se for ok 
       console.log('deu bom')
     return resposta.json() //  retorna um json 
    }
    throw new Error('Erro ao conectar API') // caso a url esteja errada 
  })
  .then(posts => { // nome da variavel conforme exercicio
    console.log(posts.title) 
   console.log(posts.body)
  })