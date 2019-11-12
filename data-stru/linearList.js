
class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinearList {
    constructor(){
        this.headNode = new ListNode("head");
    }
}

module.exports = {
    ListNode,
    LinearList,
}