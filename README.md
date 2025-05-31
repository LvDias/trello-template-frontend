## TRELLO TEMPLATE [FRONTEND]

Bem-vindo ao projeto! Esta aplicação web oferece um sistema de autenticação seguro e uma ferramenta intuitiva para gerenciar e automatizar a criação de templates no Trello, utilizando dados de compras da plataforma Cakto para autenticação de usuários.

### 🚀 Tecnologias Utilizadas
Este projeto foi construído utilizando as seguintes tecnologias e ferramentas:

- React.js: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e reativas.

- HTML/CSS: Estrutura e estilização da aplicação.

- JavaScript (ES6+): Linguagem de programação principal do frontend.

### ✨ Funcionalidades

#### Autenticação Segura:

Tela de login com validação de e-mail.

Se o e-mail não estiver associado a uma compra na plataforma Cakto, um erro será exibido.

Em caso de e-mail válido, um link de autenticação único é enviado diretamente para o usuário.

#### Integração Trello:

Configuração de Key e Token: Inputs dedicados para o usuário inserir sua Trello Key e Token.

Links de Ajuda: Facilidade para o usuário encontrar sua Key e Token do Trello.

Salvar Alterações: Botão para persistir as configurações da Trello Key e Token.

Criação Automática de Template: Botão para gerar um template de Trello de forma automática, agilizando fluxos de trabalho.

#### ⚙️ Como Configurar e Rodar o Projeto
Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

#### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 18 ou superior recomendada)

npm ou Yarn

(Seu banco de dados, ex: Docker para PostgreSQL, MongoDB Compass, etc.)

1. Clonar o Repositório
```
git clone https://github.com/LvDias/trello-template-frontend
cd trello-template-frontend
```
3. Configurar o Frontend
```
pnpm install
```
Crie um arquivo .env na raiz da pasta do backend com as seguintes variáveis de ambiente:
```
VITE_TITLE="" // TITULO DO SITE
VITE_DESC="" // DESCRIÇÃO DO SITE
VITE_API_URL="http://localhost:3333" // DOMINIO UTILIZADO NO BACKEND
VITE_ENABLE_API_DELAY=false // UTILIZADO SOMENTE NO MODO DEV
```
Substitua os valores pelos dados de sua configuração.

Rodar a aplicação
```
pnpm dev # Para modo desenvolvimento
# ou
pnpm start # Para modo produção
```

🤝 Contribuição
Contribuições são sempre bem-vindas! Se você tiver sugestões, encontrou um bug ou quer adicionar uma nova funcionalidade, sinta-se à vontade para abrir uma issue ou enviar um pull request.

📞 Contato
Se você tiver alguma dúvida, entre em contato:

Luan Dias: [LinkedIn](https://www.linkedin.com/in/luan-dias-5a63091a2/)
