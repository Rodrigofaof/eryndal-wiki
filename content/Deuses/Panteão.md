---
tags:
  - deuses
  - panteão
banner: "https://res.cloudinary.com/gkpf1l0q/image/upload/v1782865433/Solaren.png"
---

# O Panteão de Eryndal

> *"Rezar a um deus é fácil. Difícil é não rezar ao errado."*

---

> [!note] Os deuses de Eryndal são comprovadamente reais — e limitados pelo [[Cosmologia|Pacto do Véu]] que eles mesmos firmaram. Não podem agir diretamente no mundo. Apenas sussurrar, inspirar, e esperar que seus servos façam o trabalho.

---

## Os Seis Ativos

```dataview
TABLE dominio AS "Domínio", alinhamento AS "Alinhamento"
FROM "Deuses"
WHERE tipo = "Deus" AND status = "Ativo"
SORT file.name ASC
```

---

## O Sétimo

```dataview
TABLE dominio AS "Domínio", status AS "Estado"
FROM "Deuses"
WHERE tipo = "Deus" AND status = "Aprisionado"
```

---

## Relações Entre os Deuses

```
Solaren  ←→  Nyxara    tensão/respeito — sol e lua, ordem e mistério
Solaren   ↔  Varroth   aliança estratégica — civilização precisa de guerra
Elyndra   ↔  Thalris   amizade — natureza e mar se tocam
Elyndra  ←→  Varroth   conflito antigo — vida vs. destruição
Morthus   →  todos     serve a todos no fim — eles o respeitam e temem
Azúrael   →  todos     ódio, indiferença, ou algo pior
```

---

## Questões Teológicas em Aberto

> [!question] Quem criou os Human?
> Nenhum deus reivindica a raça mais poderosa do mundo. Nyxara deixou apenas uma nota: *"Não são acidentais."*

> [!question] O que Morthus faz com as almas?
> Ele nunca explicou. E desde [[A Fratura]], algumas nem chegam a ele.

> [!question] Azúrael está realmente preso?
> Os padrões das Fraturas, quando mapeados, formam uma forma. Quem tentou identificá-la não terminou o mapa.

---

*Veja também: [[Cosmologia]], [[Sistema de Magia]], [[Daggerheart em Eryndal]]*
