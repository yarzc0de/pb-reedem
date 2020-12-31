const fs    = require("fs");
const readline = require("readline-sync");
const { reedem } = require("./lib");

(async () => {
    var cookie = readline.question("Cookie : ");
    var list   = readline.question("File List : ");
    fs.readFile(list, "utf-8", async function(err, data) {
        if(err) throw err;
        var split = data.split(/\r\n|\r|\n/);
        for(let code of split) {
            var ridem = await reedem(cookie, code);
            if(ridem.ErrCode === '0') {
                console.log(code+" -> Success");
            } else {
                console.log(code+" -> "+ridem.ErrMsg)
            }
        }
    })
})();