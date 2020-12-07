# Projeto Final da {Reprograma}: AnjoAumigo 

O presente projeto é referente ao Bootcamp Back-End da Reprograma em parceria com o Porto Digital MINAS e tem como objetivo aplicar todo o conhecimento obtido através do curso.

### Motivação do tema escolhido
- Durante a pandemia, vi crescer o número de pets em estado de abandono e a procura de pessoas dispostas a adotá-los. Pesquisando a respeito, descobri que a OMS estima que haja no Brasil cerca de 30 milhões de animais abandonados, sendo 10 milhões de gatos e 20 milhões de cachorros. Com a crise econômica durante o COVID-19, ainda mais animais foram abandonados por falta de suporte financeiro de seus tutores.

- Como passei também pela experiência de cuidar de uma cachorrinha retirada das ruas antes de a mesma ir a um lar definitivo, senti a necessidade de criar uma API que facilitasse a conexão dos animais abandonados, e que estivessem em lares temporários, a possíveis tutores "anjos" que tenham a disponibilidade e o carinho de cuidar desses animais com muito amor.

### Como funcionará a API?

Haverá duas entidades (schemas) na inserção de dados:

1. Anjo (tutor para o pet)
2. Pet em busca de lar amigo

### Rotas 

| Método   |  Rota        | Função  |
|:--------:|:-------------| ------- |
| GET | /anjos | Lista todos os anjos com interesse para adotar |
| GET | /pets | Lista todos os pets disponíveis a adoção |
| POST | /anjos | Cadastra um novo anjo com interesse para adotar |
| POST | /pets | Cadastra um novo pet para adoção |
| PUT | /anjos/user?nome=Name&email=name@gmail.com | Permite alteração de informações sobre o anjo |
| PUT | /pets/pets?nome=Name&tipoPet=cachorro | Permite alteração de informações sobre o pet |
| DELETE | /anjos/user?nome=Name&email=name@gmail.com | Permite deletar informações sobre o anjo |
| DELETE | /pets/pets?nome=Name&tipoPet=cachorro | Permite deletar informações sobre o pet |


[WORK IN PROGRESS]





