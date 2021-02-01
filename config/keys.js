if(process.env.NODE_ENV === 'production') {
    // return the prod set of keys
    module.exports = require('prod')
} else {
    //return dev keys
    module.exports = require('dev');
}

