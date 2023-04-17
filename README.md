<h1 align="center">
  <img alt="CoinSync" title="CoinSync" src=".github/logo-coinsync.png" width="200" />
</h1>

![Layout do coinsynch](./.github/capa-coinsync.png)

<p align="center">
  <a href="#-notas">Notas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <a href="coinsynch-nu.vercel.app">Live Preview</a>
</p>

## 📝 Notas
> Foi utilizado a api do <img alt="coingecko" title="CoinGecko" src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png" width="100" /> para os dados das criptomoedas.
> A CoinGecko possui uma das melhores apis no contexto de criptomoedas. Devido estar utilizando a versão pública e gratuita, as requisições estão sujeitas a serem barradas pelo rate limit deles. O projeto conta com o cache built-in do Nextjs, então os efeitos do rate limit são minimizados, mas não excluídos.

> A variável de ambiente `NEXTAUTH_SECRET` é utilizada pela lib NextAuth.js.
> Sua ausência vai gerar um erro conforme [documentação](https://next-auth.js.org/configuration/options#secret).
> Em cenários reais ela não deve ser commitada no repositório.

> O redirect dentro do middleware do Nextjs parece estar com problemas quando o deploy é feito na Vercel.
> A aplicação funciona corretamente quando iniciada em ambiente local com com comandos de `dev` e `build`+`start`

<br />

## 💾 Instalação

```bash
npm install -f
```
<br />

> ⚠️ Este repositório utiliza a versão `13.3.1-canary.1` do Nextjs que corrige um bug nas features de Parallel Routes e Intercepting Routes, por isso que é necessário instalar as dependências utilizando o parâmetro `-f`

> Release fix: https://github.com/vercel/next.js/releases/tag/v13.3.1-canary.1
<br />

## 💻 Sobre o desafio

Este desafio consiste no desenvolvimento da interface de uma landing page e uma dashboard de uma carteira virtual de criptomoedas.

:octocat: Repositório com as instruções do desafio: [frontend-challenge](https://github.com/edusynch/frontend-challenge)

<br />

## 🔖 Layout

Você pode visualizar o layout do projeto através desse <a href="https://www.figma.com/file/2OU7V5IgEWYbEqCKvUE36j/LP---Teste-Front-End">link</a>.
- Projeto: https://www.figma.com/file/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test
- Landing Page: https://www.figma.com/file/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test?node-id=1%3A1741
- Dashboard: https://www.figma.com/file/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test?node-id=1%3A2555
- Protótipo: https://www.figma.com/proto/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test?node-id=1%3A9253&scaling=min-zoom&page-id=1%3A9229&starting-point-node-id=1%3A9253&hide-ui=1
