import { CommandClient, Command, Intents, CommandContext } from './deps.ts'
import { getEnv } from "./utils.ts";

const client = new CommandClient({
    prefix: 'g!'
})

client.on('ready', () => {
    console.log('Ready!')
})

for (let i of Deno.readDirSync("./commands")) {
    let file = await import(`./commands/${i.name}`);

    client.commands.add(file.default);
    console.log(`Added command from file ${i.name}`)
}

client.connect(getEnv().get("TOKEN"), Intents.None)