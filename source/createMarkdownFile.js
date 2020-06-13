"use strict";
exports.__esModule = true;
var fs = require("fs");
var year = (new Date().getFullYear()).toString();
var month = (new Date().getMonth() + 1).toString().padStart(2, '0');
var date = (new Date().getDate()).toString().padStart(2, '0');
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
