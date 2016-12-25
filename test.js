console.log("aaaa")

var json={
  rule:function(c){
    for(var prop in c){
        this[prop]=c[prop];
    }
    return this
  },
  guess: function(){return this}
}

json.rule({'F':20,
           'm':10,
           'a':2,
           'solve_F':function(){return this['a']*this['m'];},
           'solve_m':function(){return this['F']/this['a'];},
           'solve_a':function(){return this['F']/this['m'];},
           solve:function(s){
                return this['solve_'+s]();
           }
         });
json.guess();
var s=json.solve("F");
console.log(s);

var html = (function () {/*
  <!DOCTYPE html>
  <html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>        
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

console.log(html)
