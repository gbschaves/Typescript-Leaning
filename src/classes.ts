interface iPerson {
    id: number;
    age: number;
    sayMyName(): string;
}

class Person implements iPerson{
    readonly id: number;
    protected name: string;
    public age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    };


    sayMyName(): string {
        return this.name
    };
};

class Employee extends Person {

     constructor(id: number, name: string, age: number){
        super(id, name, age);
    };

    whoImI(): string {
        return this.name;
    };
}


const personTest = new Person(1, 'Guilherme', 26);


// Refact

class PersonRefact{
    constructor(readonly id: number,
        protected name: string,
        public age: number,
    ){}
}

