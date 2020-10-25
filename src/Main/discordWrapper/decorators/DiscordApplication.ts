import * as dotenv from "dotenv";
import {path} from "app-root-path";
import DiscordClient from "../DiscordClient";

export function DiscordApplication(token?: string) {
    let resolvedToken = ""

    if (token === undefined) {
        dotenv.config({path: `${path}/.env`})
        if (process.env.DISCORD_TOKEN !== undefined) {
            resolvedToken = process.env.DISCORD_TOKEN
        } else console.log("No Bot Token supplied")
    } else resolvedToken = token

    return function (constructor: Function) {
        const discordClient = new DiscordClient(resolvedToken)
        discordClient.connect()
            .then(() => {
                const functionConstructor = constructor as FunctionConstructor
                const app = new functionConstructor()
            })
            .catch(console.log)
    }
}
