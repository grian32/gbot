export function getEnv(): Map<string, string> {
    // a bit counter intuitive but idk if you can go from [string, string] straight to map so
    return new Map(Object.entries(Object.fromEntries(Deno.readTextFileSync("./.env").split("\n").map(i => i.split("=")))));
}