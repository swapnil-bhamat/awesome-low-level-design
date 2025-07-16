import Component from './component';

class File extends Component {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    showDetails(): void {
        console.log(`File: ${this.name}`);
    }
}

export default File;
