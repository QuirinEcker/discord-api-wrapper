import DiscordClient from "../DiscordClient";

export default function InjectClient(target: any, propertyKey: string) {
    DiscordClient.instance.then(instance => {
        Reflect.defineProperty(target, propertyKey, {
            value: instance,
        })
    })

}
