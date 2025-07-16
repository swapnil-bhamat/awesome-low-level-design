// Creating a chain for attaining support team

abstract class SupportHandler {
    protected nextHandler: SupportHandler | null;

    constructor(nextHandler: SupportHandler | null) {
        this.nextHandler = nextHandler;
    }

    handleRequest(request: string, type: string): void {
        if (this.nextHandler) {
            console.log("Passing to the next executive team to resolve your issue");
            this.nextHandler.handleRequest(request, type);
        } else {
            console.log("No further handlers available to process the request.");
        }
    }
}

class InternetConnectionTeam extends SupportHandler {
    handleRequest(request: string, type: string): void {
        if (request === "internet" && type === "newConnection") {
            console.log("Your newConnection request is taken. Thank you! 🙂");
        } else if (request === "internet" && type === "problem") {
            console.log("Seems you have an issue; we will redirect to the support team");
            super.handleRequest(request, type);
        } else {
            console.log("Unknown request type in InternetConnectionTeam. Passing to next team.");
            super.handleRequest(request, type);
        }
    }
}

class InternetSupportTeam extends SupportHandler {
    handleRequest(request: string, type: string): void {
        if (request === "internet" && type === "problem") {
            console.log("Your internet request is taken. Thank you! 🙂");
        } else {
            console.log("Unknown request type in InternetSupportTeam. Passing to next team.");
            super.handleRequest(request, type);
        }
    }
}

class PhoneConnectionTeam extends SupportHandler {
    handleRequest(request: string, type: string): void {
        if (request === "phone" && type === "newConnection") {
            console.log("Your newConnection request is taken. Thank you! 🙂");
        } else if (request === "phone" && type === "problem") {
            console.log("Seems you have an issue; we will redirect to the support team");
            super.handleRequest(request, type);
        } else {
            console.log("Unknown request type in PhoneConnectionTeam. Passing to next team.");
            super.handleRequest(request, type);
        }
    }
}

class PhoneSupportTeam extends SupportHandler {
    handleRequest(request: string, type: string): void {
        if (request === "phone" && type === "problem") {
            console.log("Your phone request is taken. Thank you! 🙂");
        } else {
            console.log("Unknown request type in PhoneSupportTeam. This is the last support level.");
        }
    }
}

export { InternetConnectionTeam, InternetSupportTeam, PhoneConnectionTeam, PhoneSupportTeam };
