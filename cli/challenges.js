import * as clack from '@clack/prompts'
import { setTimeout } from 'node:timers/promises'
import color from 'picocolors'
import { createChallenge } from './utils.js'

/*
  TODO:
  - validate the challenge name with no spaces and strange chars
  - validate if the directory with the challenge name already exists
  - handle the error
*/

async function main () {
  console.clear()

  await setTimeout(400)

  clack.intro(`${color.bgYellow(color.black('Time to create a new adventJs Challenge 🎄 ...'))}`)

  const challenge = await clack.group(
    {
      name: () =>
        clack.text({
          message: 'What should be the name of your new challenge?',
          placeholder: 'challenge1',
          validate: (value) => {
            if (!value) return 'Please enter a name.'
          }
        }),
      create: () =>
        clack.confirm({
          message: 'Time to create your challenge?',
          initialValue: false
        })
    },
    {
      onCancel: () => {
        clack.cancel('Operation cancelled.')
        process.exit(0)
      }
    }
  )

  if (challenge.create) {
    const spinner = clack.spinner()
    spinner.start('Creating your challenge files...')
    // await setTimeout(2500)
    await createChallenge(challenge.name, spinner)
    spinner.stop('Challenge created sucessfully ✅')

    const nextSteps = 'Check your new challenge files and resolve another adventJS challenge 🎅'
    clack.note(nextSteps, 'Next steps.')
  }

  clack.outro(`Problems? ${color.underline(color.cyan('https://github.com/francisco-solis99/adventJs/issues'))}`)
}

main().catch(console.error)
