"use strict";

import Utils from "./Utils.js";
// import {
//     firebasePush
// } from "./firebase.js";


class allData {
    constructor(htmlElement, chart) {
        this.countries = [];
        this.global = [];
        this.htmlElement = document.getElementById(htmlElement);
        // this.chart = chart;
    }
    async init() {
        await this.fetch();
        this.filter();
        this.render();
    }
    async fetch() {
        const response = await fetch("https://api.covid19api.com/summary");
        const json = await response.json();
        // landen
        this.countries = json.Countries.map(country => {
            return new Country(country);
        })
        // global
        this.global = json.Global.map(global => {
            return new GlobalInfo(global);
        })
        console.log('Fetch JSON', json)
    }
    bindEventsListeners() {
        let inputsUser = document.getElementsByName('select');
        console.log('Inputs', inputsUser);
    }
    filter() {
        // this.countries.sort(Utils.sortCountriesBy(this.confirmed));
        // this.countries = this.countries.slice(0, 10);
    }
    render() {
        let writeDropdown = '';
        this.htmlElement.insertAdjacentHTML('beforeend', writeDropdown);
        this.bindEventsListeners();
    }
}

class GlobalInfo {
    constructor(global) {
        this.TotalConfirmed = global.TotalConfirmed;
    }
}

class Country {
    constructor(country) {
        // super(allData);
        // landen
        this.Country = country.Country;
        this.CountryCode = country.CountryCode;
        this.TotalConfirmed = country.TotalConfirmed;
        this.TotalDeaths = country.TotalDeaths;
        this.TotalRecovered = country.TotalRecovered;

    }

    get writeDropdown() {
        return `<select id="land" name="land"><option value="${this.countries}">${this.countries}</option>`
    }

}


// deel1
const test = new allData('land');
console.log(test.init());

console.log("Informatie inladen", test);