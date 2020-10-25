import DiscordClient from "../DiscordClient";

export default function InjectClient(target: any, propertyKey: string) {
    DiscordClient.instance.then(instance => {
        console.log("instance finished")
        Reflect.defineProperty(target, propertyKey, {
            value: instance,
        })
    })

}
