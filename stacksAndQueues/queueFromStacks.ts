class MyQueue {
    private s1: any[];
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    push(x: number): void {
        return this.s1.push(x);

    }

    pop(): number {

        return 0;
    }

    peek(): number {
        return this.s1[this.s1.length -1];
    }

    empty(): boolean {
        return true;
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
