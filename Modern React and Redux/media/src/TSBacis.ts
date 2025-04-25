const color: string = 'red';
const isRed: boolean = color === 'red';
const colors: string[] = [ 'banku','fish','tilapia'];

function formatCar(car: {year:number, model:string, make: string}){
    console.log(`Year: ${car.year}, model: ${car.model}, make: ${car.make}`)
}

formatCar({
    year:2015,
    make: 'Ford',
    model: 'Mustang'
})

// INTERFACE
interface Bike extends Wuz{
    name: string,
    model: string,
    
}

interface Wuz{
    year: number
}


const moto = (arg : Bike) => {
    return `${arg.name}, ${arg.model} - ${arg.year}`
}

moto({name: "bozanga",model: 'bmx',year:12})

// UNION TYPE
const func = (value: string | number | string[] | number[] | boolean) => {
  if (typeof value === "string") {
    // ✅ `value` is narrowed to `string`
    return value.toUpperCase(); // Example: string operation
  } else if (typeof value === "number") {
    // ✅ `value` is narrowed to `number`
    return value.toFixed(2); // Example: number operation
  } else if (Array.isArray(value)) {
    // ✅ `value` is narrowed to `string[] | number[]`
    if (value.length > 0 && typeof value[0] === "string") {
      // ✅ Further narrowed to `string[]`
      return value.join(", "); // Example: array of strings
    } else {
      // ✅ Narrowed to `number[]`
      return value.reduce((a, b) => a + b, 0); // Example: sum numbers which will give error because TS cannot guarantee that the + operation is safe between two values of type string | number
    }
  } else if (typeof value === "boolean") {
    // ✅ `value` is narrowed to `boolean`
    return !value; // Example: negate boolean
  } else {
    // Fallback (should never happen due to union type)
    throw new Error("Unexpected type");
  }
};

// Distinguishing Between Arrays and Objects in TypeScript
function isArrayOrObject(value: unknown) {
  if (Array.isArray(value)) { // Array.isArray() correctly identifies arrays (even if they’re typed as any[] or unknown[])
    // ✅ Narrowed to array (any type)
    console.log("Array:", value);
  } else if (typeof value === "object" && value !== null) { // The value !== null check excludes null (since typeof null === "object").
    // ✅ Narrowed to plain object (non-null)
    console.log("Object:", value);
  }
}

// Type Predicates
// Syntax 
function isType(value: any): value is TargetType {
  // return true if `value` matches `TargetType`
} 
// The ''value is TargetType'' syntax is the type predicate.
// If the function returns true, TypeScript treats value as TargetType in subsequent code.
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const input: unknown = "hello";

if (isString(input)) {
  console.log(input.toUpperCase()); // ✅ TypeScript knows `input` is `string`
}

// Generic functions
function identity<T>(arg: T): T {
  return arg;
}
const output1 = identity<string>("Hello"); // Type: string
const output2 = identity<number>(42);     // Type: number

// Generic interfaces
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
const pair1: KeyValuePair<string, number> = { key: "age", value: 30 };
const pair2: KeyValuePair<number, boolean> = { key: 1, value: true };

// Generic constraints
// Basic Syntax
function example<T extends ConstraintType>(arg: T) {
  // `T` must match `ConstraintType`
}
interface HasLength {
  length: number;
}
function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

function collect<T exyends keyof U, U extends object>(key: T, arr: U[]){
    return arr.map(el => el[key]);
}
// U extends object - Constrains U to be any object type (non-primitive).
// T extends keyof U - keyof U gets all property names of U as a union type. Example: If U = { id: number; name: string }, then keyof U = "id" | "name".T extends keyof U means T must be one of U's keys.