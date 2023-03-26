//10-->5-->16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         },
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
        };

        this.tail = this.head;
        this.length = 1;
    };

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        let currentNode = this.head;
        let i = 0;

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        while(currentNode !== null) {

            if (i === index -1) {
                const newNode = new Node(value);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.length++;
            } else {
                currentNode = currentNode.next;
            }

            i++;
        }
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(160);

myLinkedList.prepend(6);
myLinkedList.prepend(7);
myLinkedList.prepend(8);
myLinkedList.insert(2, 189);
console.log(myLinkedList.printList());
