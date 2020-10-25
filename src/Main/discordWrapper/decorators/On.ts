import DiscordClient from "../DiscordClient";

export default function (event: string) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        DiscordClient.instance
            .then(instance => {
                instance.client.on(event, (...args) => {
                    descriptor.value(args)
                })
            })
    }
}
