////////////////////////////////////////
/// Weighted Quick Union - Union Find algo
/// Sumant Chhunchha
/// https://jsbin.com/xeweqo/edit?js,console
///////////////////////////////////////

function WeightedQuickUnionUF(N) {
  this.id = new Array(N);

  //maintaining size array for each root
  this.size = new Array(N).fill(1);

  for(var i = 0; i < N; i++) {
    this.id[i] = i;
  }
}

var proto = WeightedQuickUnionUF.prototype;

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
Link root of smaller tree to root of larger tree
*/

proto.union = function(p, q) {
  var pid = this.rootOf(p)
  var qid = this.rootOf(q);
  if(pid == qid) return;
  if(this.size[pid] < this.size[qid]) {
    this.id[pid] = q;
    this.size[qid] += this.size[pid];
  } else {
    this.id[qid] = p;
    this.size[pid] += this.size[qid];
  }
  console.log("AFter " + p + " union " + q );
  console.log(this.id);
}

//////

var q = new WeightedQuickUnionUF(10);
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
