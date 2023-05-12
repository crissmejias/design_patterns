let counter = 0;
let instance;
class Counter {
    constructor(){
        if(instance){
            throw new Error('Solo puedes instanciar la clase una vez!!')
        }
        instance = this;
    }
    getInstance(){
        return this;
    }
    getCount(){
        return counter;
    }
    increment(){
        return ++counter;
    }
    decrement(){
        return --counter;
    }
}
const singletonCounter = Object.freeze(new Counter());
