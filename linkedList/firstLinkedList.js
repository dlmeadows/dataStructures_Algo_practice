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

        const prevIndexedNode = this.traverseToIndex(index);
        const newNode = new Node(value);
        newNode.next = prevIndexedNode.next;
        prevIndexedNode.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            // traverse to the second to the last node
            const prevIndexedNode = this.traverseToIndex(this.length - 1);
            prevIndexedNode.next = null;
            this.tail = prevIndexedNode;
        } else if (index === 0) {
            this.head = this.head.next;
        } else {
            const prevIndexedNode = this.traverseToIndex(index);
            prevIndexedNode.next = prevIndexedNode.next.next;
        }
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;

        while (counter !== index - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
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
myLinkedList.remove(2);
myLinkedList.remove(2);

console.log(myLinkedList.printList());
