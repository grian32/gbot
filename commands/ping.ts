import { Command, CommandContext, CommandOptions } from '../deps.ts';

export default class PingCommand extends Command {
    static meta: CommandOptions = {
        name: "ping"
    }

    execute(ctx: CommandContext) {
        ctx.message.reply(`Pong! \`${ctx.client.gateway.ping}ms\``);
    }
}