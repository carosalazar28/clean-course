(() => {
  type Gender = 'M' | 'F'

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate)
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      name: string,
      gender: Gender,
      birthdate: Date,
      email: string, 
      role: string,
      lastAccess: Date,
    ) {
      super(email, role, lastAccess, name, gender, birthdate,)
    }

    checkCredentials() {
      return true;
    }
  }

  const userSettings = new UserSettings(
    '/home/caro',
    'home',
    'caro',
    'F',
    new Date('1994-03-28'),
    'caro@email.com',
    'Admin',
    new Date(),
  )
  console.log({userSettings})
})();