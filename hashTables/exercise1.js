class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    } // O(1)

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    } // O(1) is no collisions, O(n) if there are collisions

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        return this.data;
    } // O(1)

    keys() {
        if (!this.data.length) {
            return undefined;
        }
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data.length[i] > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        console.log(this.data[i][j][0]);
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    console.log(this.data[i][0][0]);
                    keysArray.push(this.data[i][0][0])
                }

            }
        }
        return keysArray;
    }
}

const hashTableObj = new HashTable(500);
hashTableObj.set('bananas', 40);
hashTableObj.set('apples', 50);
hashTableObj.set('grapes', 30);
// hashTableObj.keys();
console.log(hashTableObj.keys());
// console.log(hashTableObj.get('grapes'));
