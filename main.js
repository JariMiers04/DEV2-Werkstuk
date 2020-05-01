"use strict";


// fetch inladen

class allData {
    constructor(){
        
    }
    async init() {
        await this.fetch();
    }
    async fetch() {
        const response = await fetch("https://api.covid19api.com/all");
        const json = await response.json();
    }
}


const test = new allData();
console.log(test);