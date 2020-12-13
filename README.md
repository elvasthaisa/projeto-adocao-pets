<div align='center'>
    <h1>Projeto Final: AnjoAumigo</h1>
    <img alt="Banner do Anjo Aumigo com imagem de uma família abraçando um gato e um cachorro" src="./assets/banner.png" width="420px">
</div>
<div align='center'>
<a href="https://github.com/elvasthaisa/projeto-adocao-pets/network"><img src = https://img.shields.io/github/forks/elvasthaisa/projeto-adocao-pets></a>
<a href="https://img.shields.io/github/stars/elvasthaisa/projeto-adocao-pets"><img src = https://img.shields.io/github/stars/elvasthaisa/projeto-adocao-pets></a>
<img src = https://img.shields.io/github/license/elvasthaisa/projeto-adocao-pets>
<a href="https://projeto-final-thaisa.herokuapp.com/"><img src="https://img.shields.io/static/v1?label=deploy&message=heroku&color=51CBF3&style=flat"></a>
</div>

O presente projeto é referente ao Bootcamp Back-End da {Reprograma} em parceria com o Porto Digital MINAS e tem como objetivo aplicar todo o conhecimento obtido através do curso.

## Motivação do tema escolhido
- Durante a pandemia, vi crescer o número de pets em estado de abandono e a procura de pessoas dispostas a adotá-los. Pesquisando a respeito, descobri que a OMS estima que haja no Brasil cerca de _30 milhões de animais abandonados_, sendo 10 milhões de gatos e 20 milhões de cachorros. Com a crise econômica durante o COVID-19, ainda mais animais foram abandonados por falta de suporte financeiro de seus tutores.

- Como passei também pela experiência de cuidar de uma cachorrinha retirada das ruas antes de a mesma ir a um lar definitivo, senti a necessidade de criar uma API que facilitasse a conexão dos animais abandonados, e que estivessem em lares temporários, a possíveis tutores "anjos" que tenham a disponibilidade e o carinho de cuidar desses animais com muito amor.

## Como funcionará a API?

Haverá duas entidades (schemas) na inserção de dados:

1. Anjo (tutor para o pet)
2. Pet em busca de lar amigo

## Rotas da API 

## Anjos

| Método   |  Rota        | Função  |
|:--------:|:-------------:| ------- |
| GET | `/anjos` | Lista todos os anjos com interesse para adotar |
| POST | `/anjos` | Cadastra um novo anjo com interesse para adotar |
| PUT | `/anjos/user?nome=Name&email=name@gmail.com` | Permite alteração de informações sobre o anjo |
| DELETE | `/anjos/user?nome=Name&email=name@gmail.com` | Permite deletar informações sobre o anjo |

### Pets

| Método | Rota | Função |
|:------:|:----:| ------ |
| GET | `/pets` | Lista todos os pets disponíveis a adoção |
| POST | `/pets` | Cadastra um novo pet para adoção |
| PUT | `/pets/pets?nome=Name&tipoPet=cachorro` | Permite alteração de informações sobre o pet |
| DELETE | `/pets/pets?nome=Name&tipoPet=cachorro` | Permite deletar informações sobre o pet |


<img src = "https://img.shields.io/static/v1?label=license&message=MIT&color=uniform"> <a href="https://github.com/marinamare/reprogramaSemanas17e18_projetoFinal/network">  <img alt="GitHub forks" src="https://img.shields.io/github/forks/marinamare/reprogramaSemanas17e18_projetoFinal"></a> <img src= >
 
 [](https://vegaria.herokuapp.com/)



