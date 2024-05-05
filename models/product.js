const path = require("path");
const fs = require("fs");

module.exports = class {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      console.log(fileContent);
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};
