function Node(value, next, down) {
    this.data = value;
    this.next = next || null;
    if (down) {
        this.down = down;
    }
}
function LinkList() {
    this.head = null;
}

LinkList.prototype.insert = function(value) {
    let insertee = new Node(value);
    if (this.head === null) {
        this.head = insertee;
    } else {
        insertee.next = this.head;
        this.head = insertee;
    }
}

LinkList.prototype.search = function (value) {
    let cur = this.head;
    while(cur !== null) {
        if(cur.data === value) {
            return cur;
        }
        cur = cur.next;
    }
    return null;
}
LinkList.prototype.delete = function (value) {
    let cur = this.head;
    let prev = null;
    while(cur !== null) {
        if(cur.data === value) {
          if(prev === null) {
              this.head = cur.next;
          } else {
              prev.next = cur.next;
          }
        }
        prev = cur;
        cur = cur.next;
    }
}

function SkipList(linkList) {
    this.levels = [linkList.head];

}

SkipList.prototype.createLevel = function() {

}
