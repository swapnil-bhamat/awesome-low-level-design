import Component from './component';

// Composite: Folder that can hold files or other folders
class Folder extends Component {
    private name: string;
    private files: Component[];

    constructor(name: string) {
        super();
        this.name = name;
        this.files = [];
    }

    add(component: Component): void {
        this.files.push(component);
    }

    showDetails(): void {
        console.log(`Folder: ${this.name}`);
        this.files.forEach(file => file.showDetails());
    }
}

export default Folder;
