class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }

    getKey(): Key {
        return key;
    }
}

abstract class House {
    protected door: boolean = false;
    private tenants: Person[];

    constructor(protected key:Key) {}

    public comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log(this.tenants);
        }
    }

    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key === this.key)
            this.door = true;
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};