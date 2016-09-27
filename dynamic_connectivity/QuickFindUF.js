////////////////////////////////////////
/// QuickFind - Union Find algo
/// Sumant Chhunchha
/// https://jsbin.com/nidufuz/edit?js,console
///////////////////////////////////////

/*
Union is too expensive. It takes N^2 array accesses to process a sequence of
N union commands on N objects.
*/

'use strict';

function QuickFindUF(N) {
  this.id = new Array(N);
  for(var i = 0; i < N; i++) {
    this.id[i] = i;
  }
}

var proto = QuickFindUF.prototype;
/*
check whether p and q
are in the same component
(2 array accesses)
*/
proto.isConnected = function(p, q) {
  console.log(p + " connected to " + q + " " + (this.id[p] == this.id[q]));
  return this.id[p] == this.id[q];
}

/*
change all entries with id[p] to id[q]
(at most 2N + 2 array accesses)
*/

proto.union = function(p, q) {
  var pid = this.id[p];
  var qid = this.id[q];
  var len = this.id.length;
  for(var i = 0; i < len; i++) {
    if(this.id[i] == pid) {
      this.id[i] = qid;
    }
  }
  console.log("AFter " + p + " union " + q );
  console.log(this.id);
}

//////

var q = new QuickFindUF(10);
console.log(q.id);

q.union(1, 4);
q.union(2, 5);
q.union(3, 2);

q.isConnected(1,2);

q.union(1, 2);
q.isConnected(1,2);

q.isConnected(3,5);

q.isConnected(1,9);
