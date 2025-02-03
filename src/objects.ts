// Type
type Order = {
    productId: string;
    price: number;
    
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[],
    register(): string;
};

const user: User ={
    firstName: 'Guilherme',
    age: 26,
    email: 'gb.chaves@hotmail.com',
    password: 'teste123',
    orders: [{
        productId: '1',
        price: 200
    }],
    register() {
        return '2'
    },
}

user.password

const printLog = (message: string) => {}

printLog(user.password!);

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    firstName: 'Guilherme Chaves',
    age: 26,
    email: 'gb.chaves@hotmail.com',
    password: 'teste123',
    orders: [{
        productId: '2',
        price: 250
    }],
    register() {
        return '2'
    },
    books: ['48 leis do poder']
}

// Interface
interface UserInterface {
    firstName: string;
    email: string;
    login(): string;
}

const emailUser: UserInterface = {
    email: 'gb.chaves@hotmail.com',
    firstName: 'Guilherme',
    login() {
        return 'Login Efetuado'
    },
}

//interface UserInterface {
//    readonly firstName: string; ->>>> não pode alterar posteriormente
//    email: string
//}
// emailUser.firstName = 'teste'

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'gb.chaves@hotmail.com',
    firstName: 'Guilherme',
    books: [],
    login() {
        return 'Login Efetuado'
    },
};


type Grade = number | string;
const grade: Grade = 1;