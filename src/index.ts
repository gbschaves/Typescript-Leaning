// Tipos Básicos

let age: number = 5;
const fisrtName: String = 'Guilherme';
const isValid: boolean = true;
let idk: any = 5

idk = '21'
idk = true

const ids: number[] = [1,2,3,4,]
const booleans: boolean[] = [true, false, true];
const names: string[] = ['Ana', 'Guilherme'];

// Tupla
const person: [number, string] = [1, 'Ana']

// Lista de Tuplas
const people: [number, string][] = [
    [1, 'Ana'],
    [2, 'Guilherme'],
];

// Intersections
const productId: string | number | boolean = false

// Enum
enum Diretcion {
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
};

const direction = Diretcion.Up

// Type Assertions
const productName: any = 'Boné';

// let itemId = productName as string;
let item = <string>productName;


console.log(direction);


