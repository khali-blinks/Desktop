import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// TYPESCRIPT
const color: string = 'red';
const isRed: boolean = color === 'red';
const colors: string[] = [ 'banku','fish','tilapia'];

function formatCar(car: {year:number, model:string, make: string}){
  return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`
}


formatCar({
  year:2015,
  make: 'Ford',
  model: 'Mustang'
})

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