class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            const node = new TreeNode(value);
            this.root = node;
        } else {
            let newNode = new TreeNode(value);
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // Left
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        return this;
                    }
                } else {
                    // Right
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = newNode;
                        return this;
                    }
                }
            }
        }

        return this;
    }

    lookup(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode?.value) {
                return currentNode;
            } else if (value < currentNode?.value) {
                // Left
                currentNode = currentNode?.left;
            } else if (value > currentNode?.value) {
                // Right
                currentNode = currentNode?.right;
            }
        }
        return false;
    }

    //TODO: Need to complete
    remove(value) {

        let currentNode = this.root;
        let deleteNode = null;

        while (currentNode) {
            if (value === currentNode.value && !deleteNode) {
                deleteNode = currentNode;
                currentNode = currentNode.right;
                while (true) {
                    if (!currentNode.left) {

                    }
                    return true;
                }
            }

        }


    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(170));
// console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = {value: node?.value};
    tree.left = node?.left === null ? null : traverse(node?.left);
    tree.right = node?.right === null ? null : traverse(node?.right);
    return tree;
}
