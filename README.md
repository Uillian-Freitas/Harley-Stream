# 🃏 Harley Stream

Projeto front-end desenvolvido como exercício prático de **HTML, SCSS e JavaScript**, inspirado na estética caótica e irreverente da personagem **Harley Quinn**.
O objetivo foi construir uma landing page temática aplicando conceitos reais de **estruturação semântica, componentização de estilos e responsividade**.

---

## 📸 Visão Geral

A página apresenta:

* Hero visual com destaque cinematográfico
* Navegação por abas (Tabs)
* Grid de conteúdos (filmes, animações e HQs)
* Cards interativos com trailers em modal
* Seção informativa sobre a personagem
* FAQ com acordeão animado
* Layout totalmente responsivo (Mobile, Tablet e Desktop)

---

## 🚀 Tecnologias Utilizadas

* **HTML5** → Estrutura semântica
* **SCSS (Sass)** → Organização modular de estilos
* **JavaScript Vanilla** → Interações (tabs, modal, FAQ)
* **Gulp** → Compilação e automação do SCSS
* **Flexbox & Grid** → Construção de layout responsivo

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

✔ Praticar organização de CSS com SCSS
✔ Trabalhar com layout real (não apenas exercícios isolados)
✔ Entender como adaptar interfaces para múltiplos dispositivos
✔ Aplicar responsividade de forma progressiva
✔ Construir componentes reutilizáveis
✔ Simular estrutura usada em projetos profissionais

---

## 📱 Responsividade

O layout foi planejado considerando três experiências diferentes:

| Breakpoint            | Estratégia                                      |
| --------------------- | ----------------------------------------------- |
| Mobile (≤ 767px)      | Layout em coluna única, foco em leitura e toque |
| Tablet (768px–1023px) | Reorganização em 2 colunas e ajustes de escala  |
| Desktop (≥ 1024px)    | Layout expandido com maior impacto visual       |

A responsividade foi aplicada **sem alterar o HTML**, apenas com media queries e ajustes de comportamento.

---

## 🧠 Conceitos Praticados

* `box-sizing: border-box`
* Uso correto de `max-width` vs `width fixa`
* Flexbox para alinhamento adaptável
* CSS Grid para organização de conteúdo
* Media Queries orientadas por intenção de layout
* Controle de overflow para evitar scroll lateral
* `object-fit` para tratamento de imagens responsivas
* Separação de estilos por componente

---

## 📂 Estrutura de Pastas

```
harley-stream/
│
├── src/
│   ├── images/
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       ├── _header.scss
│       ├── _hero.scss
│       ├── _shows.scss
│       ├── _trailers.scss
│       ├── _harley-legacy.scss
│       ├── _faq.scss
│       ├── _footer.scss
│       └── main.scss
│
├── dist/
├── gulpfile.js
└── index.html
```

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Rodar o Gulp

```bash
npx gulp watch
```

### 3️⃣ Abrir no navegador

Use uma extensão como **Live Server** ou acesse:

```
http://127.0.0.1:5500
```

---

## ✨ Status do Projeto

✔ Layout finalizado
✔ Responsividade implementada
✔ Interações funcionando
✔ Código organizado por componentes

---

## 📚 Aprendizados

Durante o desenvolvimento, o principal aprendizado foi entender que:

> Responsividade não é "diminuir o site",
> é adaptar comportamento, escala e leitura para cada tipo de tela.

---

## ⚠️ Aviso

Este é um projeto educacional, sem fins comerciais.
Todos os direitos de imagem e personagem pertencem à DC Comics.

---

## 👨‍💻 Desenvolvido por

**Uillian Freitas**
Projeto criado para prática e evolução em desenvolvimento Front-End.
