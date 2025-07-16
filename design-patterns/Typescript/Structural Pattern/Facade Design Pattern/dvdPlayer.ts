class DVDPlayer {
    on(): void {
        console.log('DVD player is on');
    }

    play(movie: string): void {
        console.log(`Playing ${movie}`);
    }

    off(): void {
        console.log('DVD player is off');
    }
}

export default DVDPlayer;
