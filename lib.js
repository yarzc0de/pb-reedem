"use strict"
const fetch = require("node-fetch");

async function reedem(cookie, code) {
    return await fetch("https://topup.pointblank.id/Coupon/Register", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=UTF-8',
            'Cookie': cookie,
            'Host': 'topup.pointblank.id',
            'Origin': 'https://topup.pointblank.id',
            'Referer': 'https://topup.pointblank.id/Coupon/Index',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({"couponno":""+code+""})
    }).then(async res => {
        return await res.json();
    }) .catch(err => console.log(err));
}

module.exports = { reedem };