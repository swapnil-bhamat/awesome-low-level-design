// Singleton Design Pattern in TypeScript

class Singleton {
  private static instance: Singleton | null = null;
  private data: number;

  private constructor() {
    this.data = 0;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public increment(): void {
    this.data += 1;
  }

  public getData(): number {
    return this.data;
  }
}

export default Singleton;
