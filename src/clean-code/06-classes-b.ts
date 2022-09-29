(() => {
  type Gender = 'M' | 'F'

  interface PersonProps {
    name: string,
    gender: Gender,
    birthdate: Date
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps extends PersonProps {
    email: string
    role: string
  }

  class User extends Person {
    public email: string
    public role: string
    private lastAccess: Date

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({name, gender, birthdate})
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string
    lastOpenFolder: string
  }

  class UserSettings extends User {
    public workingDirectory: string
    public lastOpenFolder: string
    constructor({
      workingDirectory,
      lastOpenFolder,
      name,
      gender,
      birthdate,
      email, 
      role,
    }: UserSettingsProps) {
      super({email, role, name, gender, birthdate})
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }

    checkCredentials() {
      return true;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/home/caro',
    lastOpenFolder: 'home',
    name: 'caro',
    gender: 'F',
    birthdate: new Date('1994-03-28'),
    email: 'caro@email.com',
    role: 'Admin',
  })
  console.log({userSettings})
})();