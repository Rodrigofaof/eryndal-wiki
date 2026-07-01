// filter-player-content.mjs
// Remove conteudo restrito do Narrador dos arquivos publicos do wiki.
//
// O que remove:
//   - Frontmatter duplicado (bug do apply-urls: banner extra no topo)
//   - Blocos [!danger] em qualquer nivel de aninhamento
//   - Blocos [!abstract] que contem links para Fichas de Roleplay
//   - Wikilinks [[Ficha — X|texto]] e [[Ficha — X]] inline

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { join } from "path"

const contentDir = new URL("./content", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")

function getMdFiles(dir) {
  const results = []
  for (const f of readdirSync(dir)) {
    const full = join(dir, f)
    if (statSync(full).isDirectory()) results.push(...getMdFiles(full))
    else if (f.endsWith(".md")) results.push(full)
  }
  return results
}

function countGt(line) {
  return (line.match(/>/g) || []).length
}

function filterContent(content) {
  // Normalize line endings to LF for consistent processing
  content = content.replace(/\r\n/g, "\n")

  // 1. Fix double frontmatter: "---\nbanner: ...\n---\n---\n..."
  // Remove the leading single-field block if the file starts with one
  content = content.replace(/^---\n(?:banner|banner_y):[^\n]*\n---\n(?=---\n)/, "")

  const lines = content.split("\n")
  const result = []
  let inSkip = false
  let skipDepth = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Detect [!danger] block start (any nesting level)
    const dangerMatch = line.match(/>\s*\[!danger\]/i)
    // Detect [!abstract] block that is a ficha link (e.g. "🎭 [[Ficha — X|...]]")
    const fichaAbstractMatch = line.match(/>\s*\[!abstract\][^\n]*Ficha\s*—/i)

    if (dangerMatch || fichaAbstractMatch) {
      inSkip = true
      skipDepth = countGt(line)
      continue
    }

    if (inSkip) {
      const gtCount = countGt(line)
      const isNewCallout = /\[!/.test(line)

      // Exit block when:
      // - Line has fewer > chars than the block (went to parent context)
      // - Line starts a new callout at same or shallower level
      if (gtCount < skipDepth || (isNewCallout && gtCount <= skipDepth)) {
        inSkip = false
        // Fall through: process this line normally
      } else {
        // Still inside the skipped block
        continue
      }
    }

    // Remove inline ficha wikilinks
    let filtered = line
    // [[Ficha — X|display text]] -> display text
    filtered = filtered.replace(/\[\[Ficha\s*—\s*[^\]|]+\|([^\]]+)\]\]/g, "$1")
    // [[Ficha — X]] -> remove entirely
    filtered = filtered.replace(/\[\[Ficha\s*—\s*[^\]]+\]\]/g, "")

    result.push(filtered)
  }

  return result.join("\n")
}

const files = getMdFiles(contentDir)
let updated = 0

for (const file of files) {
  const original = readFileSync(file, "utf8")
  const filtered = filterContent(original)
  if (filtered !== original) {
    writeFileSync(file, filtered, "utf8")
    const name = file.split(/[\\/]/).pop()
    console.log(`Filtrado: ${name}`)
    updated++
  }
}

console.log(`\n${updated} arquivos filtrados.`)
