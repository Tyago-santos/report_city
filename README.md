<div align="center">
  <h1>🏙️ Report City</h1>
  <p><strong>Plataforma colaborativa para reportar problemas urbanos</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2.1-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vitest-4-6E9F18?style=flat-square&logo=vitest" alt="Vitest" />
  </p>
</div>

---

## 📋 Sobre o Projeto

**Report City** é uma plataforma web colaborativa que permite aos cidadãos reportar e acompanhar problemas urbanos em suas cidades. O objetivo é facilitar a comunicação entre a população e os órgãos responsáveis, tornando as cidades mais participativas e eficientes na resolução de issues.

### Funcionalidades

- 📝 **Criar reportes** — Registrar problemas como buracos, iluminação quebrada, acúmulo de lixo, alagamentos, semáforos com defeito, etc.
- 📰 **Feed de reportes** — Navegar por todos os reportes da cidade com fotos, localização e descrição.
- 👍 **Interagir** — Curtir, descurtir e comentar nos reportes.
- 👣 **Seguir** — Acompanhar a resolução de um reporte específico.
- 🔐 **Autenticação** — Cadastro e login de usuários com validação de formulários.

---

## 🚀 Tecnologias

### Frontend

| Tecnologia | Versão | Propósito |
|---|---|---|
| [Next.js](https://nextjs.org) (App Router) | 16.2.1 | Framework React com renderização híbrida |
| [React](https://react.dev) | 19.2.4 | Biblioteca de interface de usuário |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Framework CSS utilitário |
| [shadcn/ui](https://ui.shadcn.com) | 4.1.2 | Componentes de interface reutilizáveis |
| [Radix UI](https://www.radix-ui.com) | 1.4.3 | Primitivas headless acessíveis |
| [Lucide React](https://lucide.dev) | 1.7.0 | Ícones |
| [React Hook Form](https://react-hook-form.com) | 7.72.0 | Gerenciamento de formulários |
| [Zod](https://zod.dev) | 4.3.6 | Validação de schemas |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | — | Utilitários de classes CSS |
| [class-variance-authority](https://cva.style) | 0.7.1 | Gerenciamento de variantes de componentes |

### Testes

| Tecnologia | Propósito |
|---|---|
| [Vitest](https://vitest.dev) | Runner de testes |
| [Testing Library](https://testing-library.com) | Testes de componentes React |
| [jsdom](https://github.com/jsdom/jsdom) | Ambiente DOM para testes |

### Ferramentas

| Tecnologia | Propósito |
|---|---|
| [ESLint](https://eslint.org) | Linter de código |
| [Docker](https://www.docker.com) | Containerização |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |

---

## 📁 Estrutura do Projeto

```
src/
├── app/                       # Next.js App Router
│   ├── layout.tsx             # Layout raiz (fonte Inter, CSS global)
│   ├── (auth)/                # Rotas autenticadas
│   │   ├── (home)/page.tsx    # Feed principal
│   │   ├── post/
│   │   │   ├── page.tsx       # Criar reporte
│   │   │   └── [id]/page.tsx  # Detalhes do reporte
│   │   └── perfil/page.tsx    # Perfil do usuário
│   └── (public)/              # Rotas públicas
│       ├── login/page.tsx     # Login
│       └── register/page.tsx  # Cadastro
├── components/                # Componentes React
│   ├── ui/                    # Componentes shadcn/ui
│   ├── ContentPost.tsx        # Card de reporte no feed
│   ├── HeaderComponen.tsx     # Cabeçalho
│   ├── LoginComponent.tsx     # Formulário de login
│   ├── RegisterComponent.tsx  # Formulário de cadastro
│   ├── WrapperPage.tsx        # Wrapper de layout
│   ├── ButtonPassword.tsx     # Botão mostrar/ocultar senha
│   └── __test__/              # Testes dos componentes
├── data/
│   └── posts.ts               # Dados mockados (8 reportes)
├── types/                     # Tipos TypeScript
├── utils/helpers/             # Funções auxiliares
├── validation/                # Schemas Zod
│   └── test/                  # Testes de validação
└── style/
    └── globals.css            # Estilos globais + tema shadcn
```

---

## 🧑‍💻 Como Rodar

### Pré-requisitos

- **Node.js** >= 22
- **pnpm**, **npm** ou **yarn**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/report_city.git
cd report_city

# Instale as dependências
npm install
# ou
pnpm install
# ou
yarn install
```

### Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

### Docker

```bash
docker compose up
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 🧪 Testes

```bash
# Executar testes uma vez
npm test

# Modo watch
npm run test:watch
```

### O que é testado

- ✅ **Validação de formulários** — Schemas Zod de login e cadastro
- ✅ **Componentes de formulário** — Renderização e comportamento dos componentes de login e cadastro

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Compila para produção |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Executa ESLint |
| `npm test` | Executa testes |
| `npm run test:watch` | Executa testes em modo watch |

---

## 🎯 Objetivo do Projeto

O **Report City** nasceu da necessidade de aproximar cidadãos do poder público. Muitos problemas urbanos deixam de ser resolvidos simplesmente porque não há um canal centralizado e transparente para reportá-los.

A plataforma permite que qualquer cidadão:

- 📸 **Registre** problemas com fotos e descrição detalhada
- 📍 **Identifique** a localização exata do problema
- 👥 **Engaje** a comunidade curtindo e comentando
- 🔔 **Acompanhe** a evolução até a resolução

> ⚠️ **Status:** Este projeto está em fase inicial de desenvolvimento. Atualmente utiliza dados mockados e não possui integração com backend ou banco de dados.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 📄 Licença

Este projeto está sob a licença MIT.
