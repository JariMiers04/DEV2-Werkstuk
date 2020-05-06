"use strict";

import Utils from "./Utils.js";

firebase.initializeApp({
    apiKey: 'BwobZQQTto6nSzn9vvsp',
    projectId: 'werkstuk-c1d86'
});

const database = firebase.firestore();
const covid19api = database.collection("covid");

// fetch inladen

class allData {
    constructor(htmlElement, chart) {
        this.countries = [];
        this.htmlElement = document.getElementById(htmlElement);
        this.chart = chart;
    }
    async init() {
        await this.fetch();
    }
    async fetch() {
        const response = await fetch("https://api.covid19api.com/summary");
        const json = await response.json();
        console.log(json);
    }
    bindEventsListeners() {
        this.htmlElement = document.getElementById("land")
        let inputsUser = document.getElementsByName('select');
        console.log('Inputs', inputsUser);
    }
}


class Country {
    constructor(Countries) {
        // super(allData);
        this.countries = Countries.Country;
        this.confirmed = Countries.TotalConfirmed;
        this.country_code = Countries.CountryCode;
        this.test = console.log("12356");

    }

    get writeDropdown() {

    }

}

// deel1
const test = new allData();
console.log(test.init());