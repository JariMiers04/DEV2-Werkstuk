"use strict";


// fetch inladen

class allData {
    constructor() {

    }
    async init() {
        await this.fetch();
    }
    async fetch() {
        const response = await fetch("https://api.covid19api.com/all");
        const json = await response.json();
    }
}

class country extends allData {
    constructor(allData) {
        super(allData);
    }
    async init() {
        await this.fetchCountries();
    }
    async fetchCountries() {
        const response = await fetch("https://api.covid19api.com/countries");
        const json = await response.json();
    }
}

// deel1
const test = new allData();
let test2 = test.init();
console.log(test);
console.log(test2);

// landen deel2

const countries = new country;
console.log(countries);