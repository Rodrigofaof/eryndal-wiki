---
banner: "https://res.cloudinary.com/gkpf1l0q/image/upload/v1782865053/arquipelago-brumas.png"
banner_y: 0.55
tags: [índice, meta]
---

```dataviewjs
// ── DADOS ────────────────────────────────────────────────────────────────────
const items = [
  // Lore
  {n:"Cosmologia",icon:"🌌",cat:"Lore",h:"Cosmologia"},
  {n:"Sistema de Magia",icon:"✨",cat:"Lore",h:"Sistema de Magia"},
  {n:"A Fratura",icon:"⚡",cat:"Lore",h:"A Fratura"},
  {n:"Linha do Tempo",icon:"📋",cat:"Lore",h:"Linha do Tempo Completa"},
  {n:"Era Atual",icon:"🕰️",cat:"Lore",h:"Era Atual"},
  {n:"Estado do Mundo CF 4.247",icon:"📡",cat:"Lore",h:"Estado do Mundo — CF 4.247"},
  // Panteão
  {n:"Solaren",icon:"☀️",cat:"Deus",h:"Solaren"},
  {n:"Nyxara",icon:"🌙",cat:"Deus",h:"Nyxara"},
  {n:"Varroth",icon:"⚔️",cat:"Deus",h:"Varroth"},
  {n:"Elyndra",icon:"🌿",cat:"Deus",h:"Elyndra"},
  {n:"Morthus",icon:"💀",cat:"Deus",h:"Morthus"},
  {n:"Thalris",icon:"🌊",cat:"Deus",h:"Thalris"},
  {n:"Azúrael",icon:"🕳️",cat:"Deus",h:"Azúrael"},
  // Raças
  {n:"Human",icon:"🧑",cat:"Raça",h:"Human"},
  {n:"Elf",icon:"🧝",cat:"Raça",h:"Elf"},
  {n:"Dwarf",icon:"⛏️",cat:"Raça",h:"Dwarf"},
  {n:"Clank",icon:"⚙️",cat:"Raça",h:"Clank"},
  {n:"Faerie",icon:"🧚",cat:"Raça",h:"Faerie"},
  {n:"Faun",icon:"🐾",cat:"Raça",h:"Faun"},
  {n:"Firbolg",icon:"🌲",cat:"Raça",h:"Firbolg"},
  {n:"Fungril",icon:"🍄",cat:"Raça",h:"Fungril"},
  {n:"Galapa",icon:"🐢",cat:"Raça",h:"Galapa"},
  {n:"Giant-kin",icon:"🏔️",cat:"Raça",h:"Giant-kin"},
  {n:"Goblin",icon:"🔧",cat:"Raça",h:"Goblin"},
  {n:"Halfling",icon:"🏡",cat:"Raça",h:"Halfling"},
  {n:"Inferis",icon:"🌑",cat:"Raça",h:"Inferis"},
  {n:"Katari",icon:"🐆",cat:"Raça",h:"Katari"},
  {n:"Orc",icon:"🪓",cat:"Raça",h:"Orc"},
  {n:"Ribbet",icon:"🐸",cat:"Raça",h:"Ribbet"},
  {n:"Simiah",icon:"🐒",cat:"Raça",h:"Simiah"},
  // Regiões
  {n:"Solathys",icon:"🏙️",cat:"Região",h:"Solathys"},
  {n:"Arquipélago das Brumas",icon:"🌫️",cat:"Região",h:"Arquipélago das Brumas"},
  {n:"Terras Cinzentas",icon:"❄️",cat:"Região",h:"Terras Cinzentas"},
  {n:"Floresta de Vyr",icon:"🌲",cat:"Região",h:"Floresta de Vyr"},
  {n:"Costa do Esquecimento",icon:"🏚️",cat:"Região",h:"Costa do Esquecimento"},
  // Locais
  {n:"Auranthas",icon:"🏛️",cat:"Local",h:"Auranthas"},
  {n:"Porto das Bandeiras",icon:"⚓",cat:"Local",h:"Porto das Bandeiras"},
  {n:"Groven Profundo",icon:"⛏️",cat:"Local",h:"Groven Profundo"},
  {n:"Grath-Nor",icon:"🌑",cat:"Local",h:"Grath-Nor"},
  {n:"Cinzaferra",icon:"🌫️",cat:"Local",h:"Cinzaferra"},
  {n:"Porto de Thalran",icon:"🌊",cat:"Local",h:"Porto de Thalran"},
  {n:"Ilha Cinza",icon:"🪨",cat:"Local",h:"Ilha Cinza"},
  {n:"A Sétima Ilha",icon:"❓",cat:"Local",h:"A Sétima Ilha"},
  {n:"A Quinta Ilha",icon:"🏚️",cat:"Local",h:"A Quinta Ilha"},
  {n:"Salão da Memória",icon:"💀",cat:"Local",h:"Salão da Memória"},
  {n:"As Raízes",icon:"🌑",cat:"Local",h:"As Raízes"},
  {n:"O Abismo Sem Fim",icon:"🕳️",cat:"Local",h:"O Abismo Sem Fim"},
  {n:"O Limiar de Pedra",icon:"🪨",cat:"Local",h:"O Limiar de Pedra"},
  {n:"Claro da Memória",icon:"🌿",cat:"Local",h:"Claro da Memória"},
  {n:"Vyr-Anath",icon:"🌲",cat:"Local",h:"Vyr-Anath"},
  {n:"Grande Biblioteca de Auranthas",icon:"📚",cat:"Local",h:"Grande Biblioteca de Auranthas"},
  {n:"Templo das Chamas",icon:"🔥",cat:"Local",h:"Templo das Chamas"},
  {n:"Os Ossos do Mundo",icon:"🏔️",cat:"Local",h:"Os Ossos do Mundo"},
  // Facções
  {n:"Igreja de Solaren",icon:"☀️",cat:"Facção",h:"Igreja de Solaren"},
  {n:"Irmandade da Bruma",icon:"🌫️",cat:"Facção",h:"Irmandade da Bruma"},
  {n:"Conselho dos Ancien",icon:"📚",cat:"Facção",h:"Conselho dos Ancien"},
  {n:"Clã de Pedra",icon:"⛏️",cat:"Facção",h:"Clã de Pedra"},
  {n:"Vigília Vermelha",icon:"🔴",cat:"Facção",h:"Vigília Vermelha"},
  {n:"Confederação Thalrana",icon:"🌊",cat:"Facção",h:"Confederação Thalrana"},
  {n:"Liga do Porto",icon:"⚓",cat:"Facção",h:"Liga do Porto"},
  {n:"Filhos de Korreth",icon:"🐉",cat:"Facção",h:"Filhos de Korreth"},
  {n:"Ordem dos Tecelões",icon:"✨",cat:"Facção",h:"Ordem dos Tecelões"},
  {n:"República de Ferro",icon:"⚙️",cat:"Reino",h:"República de Ferro"},
  {n:"Velhar",icon:"🌲",cat:"Reino",h:"Velhar"},
  // Personagens históricos
  {n:"Aldric Braço-Dourado",icon:"👑",cat:"Histórico",h:"Aldric Braço-Dourado"},
  {n:"Serath o Exilado",icon:"🌿",cat:"Histórico",h:"Serath o Exilado"},
  {n:"Yshara a Inquebrável",icon:"🔥",cat:"Histórico",h:"Yshara a Inquebrável"},
  {n:"Aldren de Ferro",icon:"⚙️",cat:"Histórico",h:"Aldren de Ferro"},
  {n:"Korrath Ondasal",icon:"⛵",cat:"Histórico",h:"Korrath Ondasal"},
  {n:"Daren de Auranthas",icon:"🕊️",cat:"Histórico",h:"Daren de Auranthas"},
  {n:"Orvena de Sal",icon:"📖",cat:"Histórico",h:"Orvena de Sal"},
  {n:"Leva Mão-Aberta",icon:"✋",cat:"Histórico",h:"Leva Mão-Aberta"},
  {n:"Velmira das Raízes",icon:"🌳",cat:"Histórico",h:"Velmira das Raízes"},
  {n:"Caim das Ondas",icon:"🌊",cat:"Histórico",h:"Caim das Ondas"},
  {n:"Aeryn",icon:"🕯️",cat:"Histórico",h:"Aeryn"},
  {n:"Vareleth Cinza",icon:"🗺️",cat:"Histórico",h:"Vareleth Cinza"},
  {n:"Varath Cinza",icon:"🗂️",cat:"Histórico",h:"Varath Cinza"},
  {n:"Vael Sombra-de-Água",icon:"🚢",cat:"Histórico",h:"Vael Sombra-de-Água"},
  {n:"Oreth de Ferro",icon:"🔮",cat:"Histórico",h:"Oreth de Ferro"},
  {n:"Kaden Cinza-Profundo",icon:"⛏️",cat:"Histórico",h:"Kaden Cinza-Profundo"},
  {n:"Nira das Vozes",icon:"🔊",cat:"Histórico",h:"Nira das Vozes"},
  {n:"Soreth das Pedras",icon:"🪨",cat:"Histórico",h:"Soreth das Pedras"},
  // NPCs ativos
  {n:"Alto Sacerdote Aldren Vaux",icon:"☀️",cat:"NPC",h:"Alto Sacerdote Aldren Vaux"},
  {n:"Almirante Serafin Davar",icon:"🌫️",cat:"NPC",h:"Almirante Serafin Davar"},
  {n:"Ancião Syleth",icon:"📚",cat:"NPC",h:"Ancião Syleth"},
  {n:"Arauto Brenn",icon:"🐉",cat:"NPC",h:"Arauto Brenn"},
  {n:"Mestre Groven",icon:"⛏️",cat:"NPC",h:"Mestre Groven"},
  {n:"Riven Mão-Fria",icon:"🔴",cat:"NPC",h:"Riven Mão-Fria"},
  {n:"Soran das Ondas",icon:"🌊",cat:"NPC",h:"Soran das Ondas"},
  {n:"Liath Pedra-Antiga",icon:"🐉",cat:"NPC",h:"Liath Pedra-Antiga"},
  {n:"Eira a Sussurradora",icon:"🌙",cat:"NPC",h:"Eira a Sussurradora"},
  {n:"Lira das Águas",icon:"🌊",cat:"NPC",h:"Lira das Águas"},
  {n:"Varath o Memorialista",icon:"📖",cat:"NPC",h:"Varath o Memorialista"},
  {n:"Mira Soren",icon:"🔍",cat:"NPC",h:"Mira Soren"},
  {n:"Kessa Porto-Fundo",icon:"🗺️",cat:"NPC",h:"Kessa Porto-Fundo"},
  {n:"Keth-Seis",icon:"⚙️",cat:"NPC",h:"Keth-Seis"},
  {n:"Sorael Vael",icon:"⚖️",cat:"NPC",h:"Sorael Vael"},
  {n:"Raeth Chama-Dupla",icon:"🔥",cat:"NPC",h:"Raeth Chama-Dupla"},
  {n:"Tael de Névoa",icon:"🌫️",cat:"NPC",h:"Tael de Névoa"},
  {n:"Tessara Venn",icon:"🕵️",cat:"NPC",h:"Tessara Venn"},
  {n:"Fen Coralina",icon:"🚢",cat:"NPC",h:"Fen Coralina"},
  {n:"Sylara",icon:"🌿",cat:"NPC",h:"Sylara"},
  {n:"Veth Pedra-Viva",icon:"🪨",cat:"NPC",h:"Veth Pedra-Viva"},
  {n:"Davan Ouro-Vivo",icon:"⚓",cat:"NPC",h:"Davan Ouro-Vivo"},
  {n:"Imra Sal-de-Rua",icon:"📜",cat:"NPC",h:"Imra Sal-de-Rua"},
  {n:"Toven Brasa",icon:"🌿",cat:"NPC",h:"Toven Brasa"},
  {n:"Savel das Tábuas",icon:"🚢",cat:"NPC",h:"Savel das Tábuas"},
  {n:"Saeris Garra-Torta",icon:"🐆",cat:"NPC",h:"Saeris Garra-Torta"},
  {n:"Korven-em-Véspera",icon:"🍄",cat:"NPC",h:"Korven-em-Véspera"},
  {n:"Brem das Palmas",icon:"🏡",cat:"NPC",h:"Brem das Palmas"},
  // Crônicas
  {n:"Crônica do Primeiro Silêncio",icon:"🕳️",cat:"Crônica",h:"Crônica do Primeiro Silêncio"},
  {n:"Crônica da Forja Primordial",icon:"🔥",cat:"Crônica",h:"Crônica da Forja Primordial"},
  {n:"Crônica de Aeryn",icon:"🕯️",cat:"Crônica",h:"Crônica de Aeryn"},
  {n:"Crônica do Exílio",icon:"🌿",cat:"Crônica",h:"Crônica do Exílio"},
  {n:"Crônica da Aliança de Folhas e Raízes",icon:"🌲",cat:"Crônica",h:"Crônica da Aliança de Folhas e Raízes"},
  {n:"Crônica do Pacto de Korreth",icon:"🐉",cat:"Crônica",h:"Crônica do Pacto de Korreth"},
  {n:"Crônica do Casamento de Ferro",icon:"⚔️",cat:"Crônica",h:"Crônica do Casamento de Ferro"},
  {n:"Crônica do Primeiro Fio",icon:"✨",cat:"Crônica",h:"Crônica do Primeiro Fio"},
  {n:"Crônica das Vozes",icon:"🔊",cat:"Crônica",h:"Crônica das Vozes"},
  {n:"Crônica do Silêncio",icon:"💀",cat:"Crônica",h:"Crônica do Silêncio"},
  {n:"Crônica dos Filhos do Intervalo",icon:"🐉",cat:"Crônica",h:"Crônica dos Filhos do Intervalo"},
  {n:"Crônica de Vyr-Anath",icon:"🌲",cat:"Crônica",h:"Crônica de Vyr-Anath"},
  {n:"Crônica das Chamas",icon:"🔥",cat:"Crônica",h:"Crônica das Chamas"},
  {n:"Crônica do Código de Auranthas",icon:"⚖️",cat:"Crônica",h:"Crônica do Código de Auranthas"},
  {n:"Crônica da Cartografia do Silêncio",icon:"🗺️",cat:"Crônica",h:"Crônica da Cartografia do Silêncio"},
  {n:"Crônica da Tecelã Negra",icon:"✨",cat:"Crônica",h:"Crônica da Tecelã Negra"},
  {n:"Crônica da Purga",icon:"🔴",cat:"Crônica",h:"Crônica da Purga"},
  {n:"Crônica da Primeira Morte Clank",icon:"⚙️",cat:"Crônica",h:"Crônica da Primeira Morte Clank"},
  {n:"Crônica da Guerra das Marés",icon:"🌊",cat:"Crônica",h:"Crônica da Guerra das Marés"},
  {n:"Crônica dos Pioneiros",icon:"⛏️",cat:"Crônica",h:"Crônica dos Pioneiros"},
  {n:"Crônica do Despertar de Groven",icon:"⛏️",cat:"Crônica",h:"Crônica do Despertar de Groven"},
  {n:"Crônica da Expedição de Korrath",icon:"⛵",cat:"Crônica",h:"Crônica da Expedição de Korrath"},
  {n:"Crônica do Navio de Vael",icon:"🚢",cat:"Crônica",h:"Crônica do Navio de Vael"},
  {n:"Crônica da Floresta que Respondeu",icon:"🌲",cat:"Crônica",h:"Crônica da Floresta que Respondeu"},
  {n:"Crônica do Conclave de Grath-Nor",icon:"🌑",cat:"Crônica",h:"Crônica do Conclave de Grath-Nor"},
  {n:"Crônica das Ruínas da Costa",icon:"🏚️",cat:"Crônica",h:"Crônica das Ruínas da Costa"},
  {n:"Crônica da Primeira Ilha",icon:"🌫️",cat:"Crônica",h:"Crônica da Primeira Ilha"},
  {n:"Crônica de Oreth de Ferro",icon:"🔮",cat:"Crônica",h:"Crônica de Oreth de Ferro"},
  {n:"Crônica dos Marcados",icon:"⚙️",cat:"Crônica",h:"Crônica dos Marcados"},
  {n:"Crônica do Emissário",icon:"🌿",cat:"Crônica",h:"Crônica do Emissário"},
  {n:"Crônica da Declaração",icon:"⚓",cat:"Crônica",h:"Crônica da Declaração"},
  // Fichas
  {n:"Ficha — Solaren",icon:"☀️",cat:"Ficha",h:"Ficha — Solaren"},
  {n:"Ficha — Nyxara",icon:"🌙",cat:"Ficha",h:"Ficha — Nyxara"},
  {n:"Ficha — Varroth",icon:"⚔️",cat:"Ficha",h:"Ficha — Varroth"},
  {n:"Ficha — Elyndra",icon:"🌿",cat:"Ficha",h:"Ficha — Elyndra"},
  {n:"Ficha — Morthus",icon:"💀",cat:"Ficha",h:"Ficha — Morthus"},
  {n:"Ficha — Thalris",icon:"🌊",cat:"Ficha",h:"Ficha — Thalris"},
  {n:"Ficha — Azúrael",icon:"🕳️",cat:"Ficha",h:"Ficha — Azúrael"},
  {n:"Ficha — Eira a Sussurradora",icon:"🌙",cat:"Ficha",h:"Ficha — Eira a Sussurradora"},
  {n:"Ficha — Fen Coralina",icon:"🚢",cat:"Ficha",h:"Ficha — Fen Coralina"},
  {n:"Ficha — Lira das Águas",icon:"🌊",cat:"Ficha",h:"Ficha — Lira das Águas"},
  {n:"Ficha — Mira Soren",icon:"🔍",cat:"Ficha",h:"Ficha — Mira Soren"},
  {n:"Ficha — Sylara",icon:"🌿",cat:"Ficha",h:"Ficha — Sylara"},
  {n:"Ficha — Tessara Venn",icon:"🕵️",cat:"Ficha",h:"Ficha — Tessara Venn"},
  {n:"Ficha — Varath o Memorialista",icon:"📖",cat:"Ficha",h:"Ficha — Varath o Memorialista"},
  {n:"Ficha — Veth Pedra-Viva",icon:"🪨",cat:"Ficha",h:"Ficha — Veth Pedra-Viva"},
  {n:"Ficha — Mestre Groven",icon:"⛏️",cat:"Ficha",h:"Ficha — Mestre Groven"},
  {n:"Ficha — Tael de Névoa",icon:"🌫️",cat:"Ficha",h:"Ficha — Tael de Névoa"},
  {n:"Ficha — Riven Mão-Fria",icon:"🔴",cat:"Ficha",h:"Ficha — Riven Mão-Fria"},
  {n:"Ficha — Soran das Ondas",icon:"🌊",cat:"Ficha",h:"Ficha — Soran das Ondas"},
  {n:"Ficha — Liath Pedra-Antiga",icon:"🐉",cat:"Ficha",h:"Ficha — Liath Pedra-Antiga"},
  {n:"Ficha — Davan Ouro-Vivo",icon:"⚓",cat:"Ficha",h:"Ficha — Davan Ouro-Vivo"},
  {n:"Ficha — Imra Sal-de-Rua",icon:"📜",cat:"Ficha",h:"Ficha — Imra Sal-de-Rua"},
  {n:"Ficha — Toven Brasa",icon:"🌿",cat:"Ficha",h:"Ficha — Toven Brasa"},
  {n:"Ficha — Savel das Tábuas",icon:"🚢",cat:"Ficha",h:"Ficha — Savel das Tábuas"},
  {n:"Ficha — Saeris Garra-Torta",icon:"🐆",cat:"Ficha",h:"Ficha — Saeris Garra-Torta"},
  {n:"Ficha — Korven-em-Véspera",icon:"🍄",cat:"Ficha",h:"Ficha — Korven-em-Véspera"},
  {n:"Ficha — Brem das Palmas",icon:"🏡",cat:"Ficha",h:"Ficha — Brem das Palmas"},
  {n:"Ficha — Aldric Braço-Dourado",icon:"👑",cat:"Ficha",h:"Ficha — Aldric Braço-Dourado"},
  {n:"Ficha — Aldren de Ferro",icon:"⚙️",cat:"Ficha",h:"Ficha — Aldren de Ferro"},
  {n:"Ficha — Daren de Auranthas",icon:"🕊️",cat:"Ficha",h:"Ficha — Daren de Auranthas"},
  {n:"Ficha — Korrath Ondasal",icon:"⛵",cat:"Ficha",h:"Ficha — Korrath Ondasal"},
  {n:"Ficha — Serath o Exilado",icon:"🌿",cat:"Ficha",h:"Ficha — Serath o Exilado"},
  {n:"Ficha — Yshara a Inquebrável",icon:"🔥",cat:"Ficha",h:"Ficha — Yshara a Inquebrável"},
  {n:"Ficha — Aeryn",icon:"🕯️",cat:"Ficha",h:"Ficha — Aeryn"},
  {n:"Ficha — Vareleth Cinza",icon:"🗺️",cat:"Ficha",h:"Ficha — Vareleth Cinza"},
  {n:"Ficha — Varath Cinza",icon:"🗂️",cat:"Ficha",h:"Ficha — Varath Cinza"},
  {n:"Ficha — Vael Sombra-de-Água",icon:"🚢",cat:"Ficha",h:"Ficha — Vael Sombra-de-Água"},
  {n:"Ficha — Oreth de Ferro",icon:"🔮",cat:"Ficha",h:"Ficha — Oreth de Ferro"},
  {n:"Ficha — Kessa Porto-Fundo",icon:"🗺️",cat:"Ficha",h:"Ficha — Kessa Porto-Fundo"},
];

// ── IMAGENS ───────────────────────────────────────────────────────────────────
const imgMap = {
  'Solaren':'Solaren.png','Nyxara':'Nyxara.png','Varroth':'Varroth.png',
  'Elyndra':'Elyndra.png','Morthus':'Morthus.png','Thalris':'Thalris.png',
  'Azúrael':'azurael.png',
  'Human':'human-retrato.png','Elf':'elf-retrato.png','Dwarf':'dwarf-retrato.png',
  'Clank':'clank-retrato.png','Faerie':'faerie-retrato.png','Faun':'faun-retrato.png',
  'Firbolg':'firbolg-retrato.png','Fungril':'fungril-retrato.png',
  'Galapa':'galapa-retrato.png','Giant-kin':'giant-kin-retrato.png',
  'Goblin':'goblin-retrato.png','Halfling':'halfling-retrato.png',
  'Inferis':'inferis-retrato.png','Katari':'katari-retrato.png',
  'Orc':'orc-retrato.png','Ribbet':'ribbet-retrato.png','Simiah':'simiah-retrato.png',
  'Arquipélago das Brumas':'arquipelago-brumas.png',
  'Terras Cinzentas':'terras-cinzentas.png','Floresta de Vyr':'floresta-vyr.png',
  'Costa do Esquecimento':'costa-esquecimento.png','A Fratura':'a-fratura.png',
  'Sistema de Magia':'filamentos.png','Salão da Memória':'salao-memoria.png',
  'Igreja de Solaren':'igreja-solaren.png','Irmandade da Bruma':'irmandade-bruma.png',
  'Vigília Vermelha':'vigilia-vermelha.png','Confederação Thalrana':'confederacao-thalrana.png',
  'Filhos de Korreth':'filhos-korreth.png','República de Ferro':'republica-ferro.png',
  'Velhar':'velhar.png','Liga do Porto':'liga-porto.png',
  'Aldric Braço-Dourado':'aldric-braco-dourado.png','Aldren de Ferro':'aldren-de-ferro.png',
  'Daren de Auranthas':'daren-auranthas.png','Korrath Ondasal':'korrath-ondasal.png',
  'Mira Soren':'mira-soren.png','Serath o Exilado':'serath-exilado.png',
  'Varath o Memorialista':'varath-memorialista.png','Yshara a Inquebrável':'yshara-inquebravel.png',
  'Eira a Sussurradora':'eira-sussurradora.png','Orvena de Sal':'orvena-de-sal.png',
  'Caim das Ondas':'caim-das-ondas.png','Leva Mão-Aberta':'leva-mao-aberta.png',
  'Velmira das Raízes':'velmira-das-raizes.png','Kessa Porto-Fundo':'kessa-porto-fundo.png',
  'Vyr-Anath':'vyr-anath.png','Aeryn':'aeryn.png',
  'Vareleth Cinza':'vareleth-cinza.png','Varath Cinza':'varath-cinza.png',
  'Almirante Serafin Davar':'serafin-davar.png','Alto Sacerdote Aldren Vaux':'aldren-vaux.png',
  'Ancião Syleth':'anciao-syleth.png','Arauto Brenn':'arauto-brenn.png',
  'Auranthas':'auranthas.png','Groven Profundo':'groven-profundo.png',
  'Grath-Nor':'grath-nor.png','Porto das Bandeiras':'porto-das-bandeiras.png',
  'Cinzaferra':'cinzaferra.png','Claro da Memória':'claro-da-memoria.png',
  'Ilha Cinza':'ilha-cinza.png','A Sétima Ilha':'a-setima-ilha.png',
  'Templo das Chamas':'templo-das-chamas.png','Grande Biblioteca de Auranthas':'grande-biblioteca.png',
  'Os Ossos do Mundo':'ossos-do-mundo.png','As Raízes':'as-raizes.png',
  'Linha do Tempo Completa':'linha-do-tempo.png',
  'Sylara':'sylara.png','Fen Coralina':'fen-coralina.png',
  'Veth Pedra-Viva':'veth-pedra-viva.png','Tessara Venn':'tessara-venn.png',
  'Oreth de Ferro':'oreth-de-ferro.png',
  'Davan Ouro-Vivo':'davan-ouro-vivo.png','Imra Sal-de-Rua':'imra-sal-de-rua.png',
  'Toven Brasa':'toven-brasa.png','Savel das Tábuas':'savel-das-tabuas.png',
  'Saeris Garra-Torta':'saeris-garra-torta.png','Korven-em-Véspera':'korven-em-vespera.png',
  'Brem das Palmas':'brem-das-palmas.png',
};

function getImgSrc(key) {
  const f = imgMap[key];
  if (!f) return null;
  try { return app.vault.adapter.getResourcePath('Imagens/' + f); } catch(e) { return null; }
}

// ── UI ────────────────────────────────────────────────────────────────────────
const root = dv.container;
Object.assign(root.style, {
  maxWidth: '600px', margin: '48px auto 0', position: 'relative',
  fontFamily: 'var(--font-interface, inherit)',
});

// Título
const title = root.createEl('div');
title.textContent = 'ERYNDAL';
Object.assign(title.style, {
  textAlign: 'center', fontSize: '1.8rem', fontWeight: '800',
  letterSpacing: '.18em', color: 'var(--text-accent, #c9a84c)',
  marginBottom: '6px',
});

// Subtítulo
const sub = root.createEl('div');
sub.textContent = 'CF 4.247';
Object.assign(sub.style, {
  textAlign: 'center', fontSize: '.78rem', color: 'var(--text-muted)',
  letterSpacing: '.08em', marginBottom: '20px',
});

// Barra de busca
const wrap = root.createEl('div');
Object.assign(wrap.style, { position: 'relative', display: 'flex', alignItems: 'center' });

const icon = wrap.createEl('span');
icon.textContent = '🔍';
Object.assign(icon.style, {
  position: 'absolute', left: '14px', fontSize: '1rem',
  pointerEvents: 'none', color: 'var(--text-muted)',
});

const inp = wrap.createEl('input');
inp.type = 'text';
inp.placeholder = 'Buscar personagens, lugares, facções, crônicas…';
Object.assign(inp.style, {
  width: '100%', background: 'var(--background-secondary)',
  border: '1px solid var(--background-modifier-border)',
  borderRadius: '24px', padding: '12px 44px', fontSize: '.95rem',
  color: 'var(--text-normal)', outline: 'none',
  fontFamily: 'var(--font-interface, inherit)', transition: 'border-color .2s',
});
inp.addEventListener('focus', () => inp.style.borderColor = 'var(--interactive-accent)');
inp.addEventListener('blur',  () => inp.style.borderColor = 'var(--background-modifier-border)');

const clrBtn = wrap.createEl('button');
clrBtn.textContent = '✕';
Object.assign(clrBtn.style, {
  position: 'absolute', right: '14px', background: 'none', border: 'none',
  color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1rem',
  display: 'none', padding: '2px 4px', borderRadius: '50%',
});

// ── PAINEL (no body — escapa do stacking context das panes) ───────────────────
document.getElementById('ei-results-panel')?.remove();
const res = document.body.createEl('div');
res.id = 'ei-results-panel';
Object.assign(res.style, {
  display: 'none', position: 'fixed',
  background: 'var(--background-primary)',
  border: '1px solid var(--background-modifier-border)',
  borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,.15)',
  maxHeight: '560px', overflowY: 'auto', zIndex: '9999',
  padding: '16px', flexWrap: 'wrap', gap: '8px', width: '520px',
});

function positionPanel() {
  const r = inp.getBoundingClientRect();
  const pw = 520;
  let left = r.right + 12;
  if (left + pw > window.innerWidth - 8) left = r.left - pw - 12;
  Object.assign(res.style, { top: r.top + 'px', left: Math.max(8, left) + 'px' });
}

function makeCard(i) {
  const a = res.createEl('div');
  Object.assign(a.style, {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: '6px', padding: '10px 6px', width: '96px',
    borderRadius: '10px', cursor: 'pointer',
  });
  a.addEventListener('mouseenter', () => a.style.background = 'var(--background-modifier-hover)');
  a.addEventListener('mouseleave', () => a.style.background = '');
  a.addEventListener('click', (e) => {
    e.stopPropagation();
    res.style.display = 'none';
    inp.value = '';
    clrBtn.style.display = 'none';
    app.workspace.openLinkText(i.h, '', true);
  });

  const circle = a.createEl('div');
  Object.assign(circle.style, {
    width: '68px', height: '68px', borderRadius: '50%', overflow: 'hidden',
    border: '1px solid var(--background-modifier-border)',
    background: 'var(--background-secondary)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0',
  });

  const src = getImgSrc(i.h);
  if (src) {
    const img = circle.createEl('img');
    img.src = src;
    Object.assign(img.style, { width:'100%', height:'100%', objectFit:'cover', display:'block' });
    img.onerror = () => { img.remove(); circle.textContent = i.icon; };
  } else {
    circle.textContent = i.icon;
  }

  const lbl = a.createEl('span');
  lbl.textContent = i.n;
  Object.assign(lbl.style, {
    fontSize: '.72rem', textAlign: 'center', lineHeight: '1.25',
    color: 'var(--text-normal)', width: '100%', overflow: 'hidden',
    display: '-webkit-box', webkitLineClamp: '2', webkitBoxOrient: 'vertical',
  });

  const badge = a.createEl('span');
  badge.textContent = i.cat;
  Object.assign(badge.style, {
    fontSize: '.58rem', color: 'var(--text-muted)',
    background: 'var(--background-modifier-border)',
    padding: '1px 6px', borderRadius: '8px',
  });

  return a;
}

function render(q) {
  const t = q.toLowerCase().trim();
  if (!t) { res.style.display = 'none'; clrBtn.style.display = 'none'; return; }
  clrBtn.style.display = 'block';
  const found = items.filter(i =>
    i.n.toLowerCase().includes(t) || i.cat.toLowerCase().includes(t)
  ).slice(0, 24);
  res.empty();
  positionPanel();
  res.style.display = 'flex';
  if (!found.length) {
    const msg = res.createEl('div');
    Object.assign(msg.style, { padding:'16px', textAlign:'center', color:'var(--text-muted)', fontSize:'.88rem', width:'100%' });
    msg.textContent = `Nenhum resultado para "${q}"`;
  } else {
    found.forEach(i => res.appendChild(makeCard(i)));
  }
}

inp.addEventListener('input', () => render(inp.value));
inp.addEventListener('keydown', e => {
  if (e.key === 'Escape') { inp.value = ''; render(''); inp.blur(); }
});
clrBtn.addEventListener('click', () => { inp.value = ''; render(''); inp.focus(); });
document.addEventListener('click', e => {
  if (e.target !== inp && e.target !== clrBtn && !res.contains(e.target))
    res.style.display = 'none';
});
```
