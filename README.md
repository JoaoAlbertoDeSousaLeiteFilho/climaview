# ClimaView 
Trabalho prático desenvolvido para a disciplina de Desenvolvimento de Software Web — Prof. Alexandre Almeida.

## Organização do Projeto
- **`/components`**: Guarda as partes visuais da tela (Navbar, Sidebar, cards das cidades e o dashboard). 
Dividir em componentes evita arquivos gigantes e facilita o reaproveitamento.
- **`/interfaces`**: Tipagens TypeScript com o formato dos dados esperados da API. 
Ajuda a pegar erros mais cedo, já que o código sempre sabe o que vai receber.
- **`/services`**: Toda a comunicação com a API do OpenWeather fica concentrada aqui, 
separada dos componentes. As telas só recebem os dados prontos.

## Tecnologias Utilizadas
- React + TypeScript
- Vite
- Bootstrap
- API OpenWeather