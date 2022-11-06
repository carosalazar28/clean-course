(() => {
  interface Bird {
    eat(): void
  }

  interface FlyingBird {
    fly(): void
  }

  interface RunningBird {
    run(): void
  }

  class Tucan implements Bird {
    public fly() {}
    public eat() {}
  }

  class Huminbird implements Bird, FlyingBird, RunningBird{

    public fly() {}
    public eat() {}
    public run() {}
  }
})()