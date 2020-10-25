import {DiscordApplication} from "./discordWrapper/decorators/DiscordApplication";
import DiscordClient from "./discordWrapper/DiscordClient";
import InjectClient from "./discordWrapper/decorators/InjectClient";
import On from "./discordWrapper/decorators/On";
import {Message} from "discord.js";

@DiscordApplication()
class App {

    @InjectClient
    public readonly client?: DiscordClient

    @On('message')
    public init(msg: Message) {
        console.log(msg)
    }
}
