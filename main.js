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
        this.filter();
        this.render();
    }
    async fetch() {
        const response = await fetch("https://api.covid19api.com/summary");
        const json = await response.json();
        this.countries = json.locations.map(location => {
            return new Country(location);
        })
        console.log('Fetch JSON', json)
    }
    bindEventsListeners() {
        let inputsUser = document.getElementsByName('select');
        console.log('Inputs', inputsUser);
    }
    filter() {
        this.countries.sort(Utils.sortCountriesBy(this.confirmed));
        this.countries = this.countries.slice(0, 10);
    }
    render() {
        let writeDropdown = '';
        this.htmlElement.insertAdjacentHTML('beforeend', writeDropdown);
        this.bindEventsListeners();
    }
}


class Country {
    constructor(location) {
        // super(allData);
        this.countries = location.Countries;
        this.confirmed = location.TotalConfirmed;
        this.country_code = location.CountryCode;

    }

    get writeDropdown() {
        return `<select id="land" name="land"><option value="${this.countries}">${this.countries}</option>`
    }

}

// deel1
const test = new allData();
console.log(test.init());


const testCountry = new Country(location);
console.log("Countries inladen", testCountry);