# Chat Offline

Aplicação de chat desenvolvida com React, TypeScript e Vite. Ela permite simular uma conversa entre dois remetentes em uma interface simples e responsiva, sem comunicação com servidores ou armazenamento externo.

O histórico existe somente na memória da aplicação e é perdido ao recarregar a página.

## Funcionalidades

- Envio de mensagens como **usuário** ou **robô**
- Alternância do remetente da próxima mensagem
- Histórico em ordem cronológica
- Mensagens de usuário alinhadas à direita
- Mensagens de robô alinhadas à esquerda
- Estado vazio até a primeira mensagem ser enviada
- Auto-scroll para a mensagem mais recente
- Textarea multilinha com expansão automática de altura
- Enter para enviar e Shift + Enter para quebrar linha
- Botão de envio desabilitado enquanto a mensagem estiver vazia
- Destaque roxo no card de input no modo robô
- Layout centralizado e responsivo

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Oxlint

## Pré-requisitos

- Node.js
- npm

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra a URL informada pelo Vite no terminal.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Executa a compilação TypeScript e gera o build de produção |
| `npm run lint` | Executa a análise estática com Oxlint |
| `npm run preview` | Inicia o preview local do build de produção |

## Estrutura do projeto

```text
src/
├── components/
│   ├── Chat.tsx
│   ├── ChatInput.tsx
│   ├── MessageBubble.tsx
│   ├── MessageList.tsx
│   └── SenderToggle.tsx
├── types/
│   └── message.ts
├── App.tsx
├── index.css
└── main.tsx
```

### Responsabilidades

- `Chat.tsx`: mantém o estado das mensagens, do texto e do remetente.
- `MessageList.tsx`: renderiza o estado vazio ou a lista e realiza o auto-scroll.
- `MessageBubble.tsx`: define o alinhamento e o estilo visual de cada mensagem.
- `ChatInput.tsx`: gerencia o card de entrada, o textarea e o botão de envio.
- `SenderToggle.tsx`: alterna entre os remetentes usuário e robô.
- `message.ts`: define os tipos `Sender` e `Message`.

## Comportamento do chat

1. Ao abrir, o remetente padrão é **Usuário**.
2. Digite uma mensagem no campo inferior.
3. Pressione **Enter** ou clique em **Enviar**.
4. Use **Shift + Enter** para adicionar uma quebra de linha.
5. Clique no botão **Usuário/Robô** para alterar o remetente da próxima mensagem.
6. Recarregar a página limpa todo o histórico.

## Persistência e limitações

Este projeto não utiliza banco de dados, API, autenticação, localStorage ou qualquer outro mecanismo de persistência.

O conteúdo é texto plano. Recursos como edição, exclusão, horários, anexos, Markdown e formatação rica não fazem parte do projeto.
