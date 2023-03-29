class MyQueue {
    private s1: any[];
    private s2: any[];
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    push(x: number): void {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }

        this.s1.push(x);
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    pop(): number {
        return this.s1.pop();
    }

    peek(): number {
        return this.s1[this.s1.length-1];
    }

    empty(): boolean {
        if (this.s1.length === 0 ) {
            return true;
        }
        return false;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
