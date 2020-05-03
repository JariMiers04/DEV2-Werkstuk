"use strict";

import Utils from "./Utils.js";


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
        console.log(json);
    }
}

class Country extends allData {
    constructor(allData, htmlElement, chart) {
        super(allData);
        this.countries = [];
        this.htmlElement = document.getElementById(htmlElement);
        this.chart = chart;

    }
    async init() {
        await this.fetchCountries();
    }
    async fetchCountries() {
        const response = await fetch("https://api.covid19api.com/countries");
        const json = await response.json();
        console.log("Fetch JSON:", json);
    }
    bindEventsListeners() {
        this.htmlElement = document.getElementById("land")
        let inputsUser = document.getElementsByName('select');
        console.log('Inputs', inputsUser);
    }
}

// deel1
const test = new allData();
console.log(test.init());


// // landen deel2

const countries = new country;
console.log(countries.init());