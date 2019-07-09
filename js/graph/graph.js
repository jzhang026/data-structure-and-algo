var LinkList = require('./linkList');

// v is the vertex numnber
function Graph(v) {
    this.adj = [];
    this.v = v;
    for(let i = 0; i < v; i++) {
        this.adj[i] = new LinkList();
    }
}

Graph.prototype.addEdge = function(s, t) {
    this.adj[s].add(t);
    this.adj[t].add(s);
}

Graph.prototype.bfs = function(s, t) {
    let queue = new LinkList();
    let visited = Array.apply(null, {length: this.v}).map(() => false)
    let prev = Array.apply(null, {length: this.v}).map(() => -1)
    visited[s] = true;
    queue.add(s);

    while(queue.size > 0) {
        let w = queue.dequeue();
        let list = this.adj[w];
        for(let i = 0; i < list.size; ++i) {
            let p = list.getByIndex(i);
            while(p !== null && p.data !== t) {
                if(!visited[p.data]) {
                    queue.enqueue(p.data);
                    visited[p.data] = true;
                    prev[p.data] = w;
                }
                p = p.next;
            }
        }
    }

    Graph.print(prev, s, t)
}

Graph.print = function(prev, s, t) {
    // if (s !== t && prev[t] !== false) {
    //     Graph.print(prev, s, prev[t]);
    // }
    // console.log(t + ' ')
    console.log(prev)
}
module.exports = Graph;

let graph = new Graph(6);
graph.addEdge(0,2);
graph.addEdge(3,2);
graph.addEdge(2,1);
graph.addEdge(1,5);
graph.addEdge(4,5);

graph.bfs(2,4)