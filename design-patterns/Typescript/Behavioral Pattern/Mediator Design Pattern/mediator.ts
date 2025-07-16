abstract class Mediator {
    abstract register(user: User): void;
    abstract send(message: string, user: User): void;
}

class ChatRoom extends Mediator {
    private users: User[] = [];

    register(user: User): void {
        this.users.push(user);
    }

    send(message: string, from: User): void {
        this.users.forEach((user) => {
            if (user !== from) {
                user.receive(message, from);
            }
        });
    }
}

class User {
    private _name: string;
    private mediator: Mediator;

    constructor(name: string, mediator: Mediator) {
        this._name = name;
        this.mediator = mediator;
        this.mediator.register(this);
    }

    send(message: string): void {
        this.mediator.send(message, this);
    }

    receive(message: string, from: User): void {
        console.log(`${this._name} received message from ${from.name}: ${message}`);
    }

    get name(): string {
        return this._name;
    }
}

export { Mediator, ChatRoom, User };
