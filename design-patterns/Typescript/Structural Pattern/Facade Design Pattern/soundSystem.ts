class SoundSystem {
    on(): void {
        console.log("Sound system is on");
    }

    setVolume(volume: number): void {
        console.log(`Setting volume to ${volume}`);
    }

    off(): void {
        console.log("Sound system is off");
    }
}

export default SoundSystem;
