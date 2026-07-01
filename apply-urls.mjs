// apply-urls.mjs
// Substitui referências locais de imagem por URLs do Cloudinary nos arquivos do wiki.
//
// Substituições:
//   - banner: "Imagens/filename.ext"  →  banner: "https://res.cloudinary.com/..."
//   - ![[filename.ext]]               →  ![filename](https://res.cloudinary.com/...)

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { join } from "path"

const contentDir = new URL("./content", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")
const urlMapPath = "C:/Users/RODRIG~1/AppData/Local/Temp/claude/e--Games-World/11924e11-567e-46ee-bcd4-f50429cabef4/scratchpad/url-map.json"

const urlMap = JSON.parse(readFileSync(urlMapPath, "utf8"))

// Build case-insensitive lookup
const lookupMap = new Map()
for (const [k, v] of Object.entries(urlMap)) {
  lookupMap.set(k.toLowerCase(), v)
}

function getUrl(filename) {
  return urlMap[filename] || lookupMap.get(filename.toLowerCase()) || null
}

function getMdFiles(dir) {
  const results = []
  for (const f of readdirSync(dir)) {
    const full = join(dir, f)
    if (statSync(full).isDirectory()) results.push(...getMdFiles(full))
    else if (f.endsWith(".md")) results.push(full)
  }
  return results
}

function applyUrls(content) {
  // 1. Frontmatter banner: "Imagens/filename.ext" → Cloudinary URL
  content = content.replace(/^banner: ["']Imagens\/([^"'\n]+)["']/m, (match, filename) => {
    const url = getUrl(filename)
    return url ? `banner: "${url}"` : match
  })

  // 2. Inline embeds: ![[filename.ext]] → ![filename](url)
  content = content.replace(/!\[\[([^\]]+\.(png|jpg|jpeg|gif|webp))\]\]/gi, (match, filename) => {
    const url = getUrl(filename)
    return url ? `![${filename}](${url})` : match
  })

  return content
}

const files = getMdFiles(contentDir)
let updated = 0

for (const file of files) {
  const original = readFileSync(file, "utf8")
  const result = applyUrls(original)
  if (result !== original) {
    writeFileSync(file, result, "utf8")
    updated++
  }
}

console.log(`${updated} arquivos com URLs aplicadas.`)
