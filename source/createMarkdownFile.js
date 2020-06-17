"use strict";
exports.__esModule = true;
var fs = require("fs");
var _a = process.argv, args = _a.slice(2);
var yyyymmdd = args[0];
var year = yyyymmdd ? yyyymmdd.slice(0, 4) : (new Date().getFullYear()).toString();
var month = yyyymmdd ? yyyymmdd.slice(4, 6) : (new Date().getMonth() + 1).toString().padStart(2, '0');
var date = yyyymmdd ? yyyymmdd.slice(6, 8) : (new Date().getDate()).toString().padStart(2, '0');
var fileName = "" + year + month + date + ".md";
var isExist = fs.existsSync(fileName);
var template = "---\ntitle: ''\ndate: " + year + "-" + month + "-" + date + "\ntags: []\n---\n";
if (!isExist) {
    try {
        fs.writeFileSync(fileName, template);
        console.log("Success: " + fileName + " was created.");
    }
    catch (e) {
        console.log("Failed: Can not create " + fileName);
    }
}
else {
    console.log("Failed: " + fileName + " is already exist.");
}
