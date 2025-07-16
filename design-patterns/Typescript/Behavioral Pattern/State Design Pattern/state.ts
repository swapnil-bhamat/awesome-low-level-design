abstract class PhoneState {
    abstract alert(context?: PhoneContext): void;
    abstract answer(context?: PhoneContext): void;
    abstract hangup(context?: PhoneContext): void;
}

class Ringing extends PhoneState {
    alert(): void {
        console.log('Phone is ringing...');
    }
    answer(context: PhoneContext): void {
        console.log('Phone is answering...');
        context.setState(new InCall());
    }
    hangup(): void {
        console.log('Cannot hangup while ringing');
    }
}

class InCall extends PhoneState {
    alert(): void {
        console.log('Phone is in call...');
    }
    answer(): void {
        console.log('Cannot answer while in call');
    }
    hangup(context: PhoneContext): void {
        console.log('Phone is hanging up...');
        context.setState(new Idle());
    }
}

class Idle extends PhoneState {
    alert(): void {
        console.log('Phone is idle...');
    }
    answer(): void {
        console.log('Cannot answer while idle');
    }
    hangup(): void {
        console.log('Cannot hangup while idle');
    }
}

class PhoneContext {
    private state: PhoneState;
    constructor(state: PhoneState) {
        this.state = state;
    }
    setState(state: PhoneState): void {
        this.state = state;
    }
    alert(): void {
        this.state.alert(this);
    }
    answer(): void {
        this.state.answer(this);
    }
    hangup(): void {
        this.state.hangup(this);
    }
}

export { PhoneState, Ringing, InCall, Idle, PhoneContext };
