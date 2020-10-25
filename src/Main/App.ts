import {DiscordApplication} from "./discordWrapper/decorators/DiscordApplication";
import DiscordClient from "./discordWrapper/DiscordClient";
import InjectClient from "./discordWrapper/decorators/InjectClient";

@DiscordApplication()
class App {

    @InjectClient
    private readonly client?: DiscordClient

    constructor() {
        this.logClient()
    }

    public logClient() {
        console.log(this.client)
    }
}
