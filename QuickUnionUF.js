////////////////////////////////////////
/// QuickUnion - Union Find algo
/// Sumant Chhunchha
/// https://jsbin.com/xeweqo/edit?js,console
///////////////////////////////////////

/*
What is the maximum number of array accesses during a find operation of n elements?
- Linear
*/

function QuickUnionUF(N) {
  this.id = new Array(N);
  for(var i = 0; i < N; i++) {
    this.id[i] = i;
  }
}

var proto = QuickUnionUF.prototype;

proto.isConnected = function(p, q) {
  console.log(p + " connected to " + q + " " + (this.rootOf(p) == this.rootOf(q)));
  return this.rootOf(p) == this.rootOf(q);
}

/*
chase parent pointers until reach root
(depth of i array accesses)
*/

proto.rootOf = function(i) {
  while(i != this.id[i]) {
    i = this.id[i];
  }
  return i;
}

/*
check if p and q have same root
(depth of p and q array accesses)
*/

proto.union = function(p, q) {
  var pid = this.rootOf(p)
  var qid = this.rootOf(q);
  this.id[pid] = qid;
  console.log("After " + p + " union " + q );
  console.log(this.id);
}

//////

var q = new QuickUnionUF(10);
console.log(q.id);

q.union(4, 3);
q.union(3, 8);
q.union(6, 5);
q.union(9, 4);

q.isConnected(8, 9);
q.isConnected(5, 4);

q.union(2, 1);
q.union(5, 0);
q.union(7, 2);
q.union(6, 1);
q.union(7, 3);

q.isConnected(1,2);

q.isConnected(3,5);

q.isConnected(1,9);
