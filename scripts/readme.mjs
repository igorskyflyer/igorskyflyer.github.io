import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const readmeUrl = 'https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/README.md'
const response = await fetch(readmeUrl)
const markdown = await response.text()
const frontmatter = `---
title: IgorSkyFlyer
layout: ../layouts/post.astro
publishDate: 2022-09-15 00:00
---
`
const fileContents = `${frontmatter}
${markdown}`

const outFile = fileURLToPath(new URL('../src/pages/igorskyflyer.md', import.meta.url))
await writeFile(outFile, fileContents)
