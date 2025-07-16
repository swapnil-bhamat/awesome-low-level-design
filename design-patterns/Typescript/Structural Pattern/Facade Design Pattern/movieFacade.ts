import SoundSystem from './soundSystem';
import DVDPlayer from './dvdPlayer';
import Projector from './projector';
import Lights from './lights';
import Snacks from './snacks';

class MovieFacade {
    private soundSystem: SoundSystem;
    private dvdPlayer: DVDPlayer;
    private projector: Projector;
    private lights: Lights;
    private snacks: Snacks;

    constructor() {
        this.soundSystem = new SoundSystem();
        this.dvdPlayer = new DVDPlayer();
        this.projector = new Projector();
        this.lights = new Lights();
        this.snacks = new Snacks();
    }

    watchMovie(movie: string): void {
        console.log(`Starting to watch a movie ${movie}`);
        this.lights.on();
        this.projector.on();
        this.projector.connect("DVD Player");
        this.dvdPlayer.on();
        this.soundSystem.on();
        this.dvdPlayer.play(movie);
        this.soundSystem.setVolume(10);
    }

    getSnacks(snacks: string): void {
        console.log("1st part of the movie is great! Let's order some snacks");
        this.snacks.noteOrder(snacks);
        this.snacks.prepare();
        this.snacks.serve(snacks);
    }

    endMovie(): void {
        console.log("End of the movie, shutting down");
        this.lights.off();
        this.projector.off();
        this.dvdPlayer.off();
        this.soundSystem.off();
    }
}

export default MovieFacade;
