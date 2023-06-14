'use strict';

let count =0;

module.exports = function(req, res, next){
    
    count+=1;
    console.log(`Request${count} : method: ${req.method}, route: ${req.originalUrl}`);
    next();
}