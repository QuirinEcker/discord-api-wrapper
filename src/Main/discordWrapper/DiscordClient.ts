import {Client} from 'discord.js'

export default class DiscordClient {
    public readonly client: Client
    public readonly token: string
    private static instanceResolve: Function
    private static _instance: Promise<DiscordClient> =
        new Promise<DiscordClient>(resolve => DiscordClient.instanceResolve = resolve)

    constructor(token: string) {
        this.token = token
        this.client = new Client()
        DiscordClient.instanceResolve(this)
    }

    public connect() {
        return new Promise(((resolve, reject) => {
            this.client.login(this.token)
                .then(() => {
                    resolve()
                    console.log("login callback is finished")
                })
                .catch(reject)
        }))
    }

    public static get instance(): Promise<DiscordClient> {
        return DiscordClient._instance
    }
}
