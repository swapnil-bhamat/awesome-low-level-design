abstract class Observer {
    abstract update(temperature: number): void;
}

class WebUI extends Observer {
    update(temperature: number): void {
        console.log(`Temperature showing in web UI: ${temperature}`);
    }
}

class MobileUI extends Observer {
    update(temperature: number): void {
        console.log(`Temperature showing in mobile UI: ${temperature}`);
    }
}

export { WebUI, MobileUI, Observer };
