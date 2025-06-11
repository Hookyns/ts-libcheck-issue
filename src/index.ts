import { SomeClass } from "incriminated-package";

export class MyClass {
    property: string = "Hello, World!";
}

const instance = new SomeClass();
console.log(instance.property);