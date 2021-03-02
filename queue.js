class Queue {
    constructor(){
        this.Store = []
    }

    enqueue(element){
        this.Store.push(element)
    }

    dequeue(){
        return this.Store.shift()
    }

    front(){
        return this.Store[0]
    }

    back(){
        return this.Store[this.Store.length-1]
    }

    toString(){
        let str = ""
        for(let element of this.Store){
            str += element + "\n"
        }
        return str
    }

    empty(){
        this.Store.length == 0 ? true : false
    }
}

let q = new Queue()

q.enqueue("daniel")
q.enqueue("ann")
q.enqueue("sherry")
console.log(q.toString())
q.dequeue()
console.log(q.front())
console.log(q.back())
