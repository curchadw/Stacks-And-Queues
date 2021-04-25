//classes
//Data Structures

//Queue
//- A line
//First In, First Out


class Queue{
  constructor(){
    this.items = []
    this.rear = undefined
    this.size = 0
  }

  enqueue(element){
    this.items.push(element)
    this.rear = this.items[this.items.length - 1]
    this.size++
  }

  dequeue(){
    if(this.isEmpty()){
      return 'Empty'
    }
    this.size--
    return this.items.shift()
  }

  length() {
     this.items.size()
  }

  getFront() {
    return items[0]
  }

  getLast(){
      return this.rear
  }

  isEmpty(){
      if(this.items !== 0){
        return false
      }

      return true
  }

  print() {
    console.log(this.items)
  }
}


let result = new Queue

result.enqueue(8)

console.log(result)

result.enqueue(7)

console.log(result)

result.dequeue()

console.log(result)






//Stack

//first in, last out

//Add new items to the end of a collection
//Remove items from end of collection
class Stack{
  constructor(){
    this.data = []
    this.top = 0
   
  }

  push(el){
    this.data[this.top] = el
    this.top = this.top + 1
  }

  length() {
    return this.data.size()
  }

  pop(){
     if(this.isEmpty()){
      return null
     }
    
     return this.data && this.data.splice(-1)[0]
  }

  peek(){
    return this.data[0]
  }

  print(){
    return this.data
  }

  isEmpty(){
      if(this.data !== 0){
        return false
      }

      return true
  }
}

let info = new Stack

info.push(1)
console.log(info)
info.push(2)
console.log(info)
info.pop()
console.log(info)