const path = require("path");

// console.log(path.dirname(process.mainModule.filename));
// process.mainModule is deprecated. So, we use require.main.filename

module.exports = path.dirname(require.main.filename);
