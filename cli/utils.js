import fs from 'node:fs/promises'
import color from 'picocolors'
import path from 'node:path'
import { fileURLToPath } from 'url'

// Global variables
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function createChallenge (name) {
  const pathFolderChallenges = path.join(path.dirname(__dirname), 'adventJs-2023', 'challenges')

  try {
    const isFolder = await checkIfIsFolder(pathFolderChallenges)

    if (isFolder.validate === false) {
      throw new Error(isFolder.message)
    }

    const pathChallenge = path.join(pathFolderChallenges, name)

    // Create directory
    await fs.mkdir(pathChallenge, { recursive: true })
    console.log(color.black('✅ Folder created...'))

    // Create the solution file
    const contentSolutionFile = getTemplate('solution', name)
    await fs.writeFile(path.join(pathChallenge, `${name}.ts`), contentSolutionFile)
    console.log(color.black('✅ Solution file created...'))

    // Create the test file
    const testSolutionFile = getTemplate('test', name)
    await fs.writeFile(path.join(pathChallenge, `${name}.test.js`), testSolutionFile)
    console.log(color.black('✅ Test file created...'))

    // Create the readme file
    const readmeSolutionFile = getTemplate('readme', name)
    await fs.writeFile(path.join(pathChallenge, 'README.md'), readmeSolutionFile)
    console.log(color.black('✅ Readme file created...'))
  } catch (error) {
    console.log(error.message)
  }
}

export async function checkIfIsFolder (pathDir) {
  try {
    const stats = await fs.stat(pathDir)

    if (stats.isDirectory()) {
      return {
        validate: true,
        message: ''
      }
    }
  } catch (err) {
    return {
      validate: false,
      message: err.message
    }
  }
}

export function getTemplate (template, challengeName) {
  const TEMPLATES = {
    solution: `export function ${challengeName}() {
      // Your code here...
    }`,
    test: `
    import { test, describe, expect, expectTypeOf } from 'vitest'
    import { ${challengeName} } from './${challengeName}'

    describe('${challengeName}', () => {
      test('Test 1', () => {
        expectTypeOf(${challengeName}).returns.toEqualTypeOf()
      })

      test('Test 2', () => {
        expect(${challengeName}()).toEqual()
      })
    })
    `,
    readme: `
    # ${challengeName}
    `
  }

  const cleanTemplate = TEMPLATES[template].replaceAll(/^\s+/gm, '').trim()
  return cleanTemplate
}
