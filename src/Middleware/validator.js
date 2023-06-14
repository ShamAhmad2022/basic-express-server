'use strict';

module.exports = (req, res, next)=> {
    
    let name = req.query.name;
    
    if(!(isNaN(name) || '')){
        next(`${name} is a number or empty}`);
    }
    req.userName = name;
    next()
}