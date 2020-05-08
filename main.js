"use strict";

import Utils from "./Utils.js";
import {
    firebasePush
} from "./firebase.js";


class allData {
    constructor(htmlElement, chart) {
        this.countries = [];
        this.global = [];
        this.htmlElement = document.getElementById('land');
        this.button = document.getElementById('btn');
        // this.chart = chart;
    }
    async init() {
        await this.fetch();
        this.reset();
        this.render();
        // this.uploadDataFirebase();
    }
    async fetch() {
        const response = await fetch("https://api.covid19api.com/summary");
        const json = await response.json();
        // landen
        this.countries = json.Countries.map(country => {
            return new Country(country);
        })
        this.globalCases = json.Global.TotalConfirmed;
        this.globalDeaths = json.Global.TotalDeaths;
        this.globalRecovered = json.Global.TotalRecovered;


    }
    reset() {

    }
    selectInput() {
        this.countries.forEach((country) => {
            if (this.htmlString) {
                console.log('SelectInput', country);
            }
        })
    }

    submit(event) {
        event.preventDefault()
    }
    globalInfo() {
        document.getElementById('totalCases').innerHTML = this.globalCases;
        document.getElementById('totalDeaths').innerHTML = this.globalDeaths;
        document.getElementById('totalRecovered').innerHTML = this.globalRecovered;
    }

    bindEvents() {
        let inputsUser = document.getElementsByName('select');
        console.log('Inputs', inputsUser);
        this.htmlElement.addEventListener('select', this.submit.bind(this));
    }
    filter() {
        // this.countries.sort(Utils.sortCountriesBy(this.TotalConfirmed));
        // this.countries = this.countries.slice(0, 10);
    }
    render() {
        this.writeDropdownList();
        this.globalInfo();
        this.selectInput();
        this.filter();
        this.bindEvents();
    }

    // landen van api zetten in een html dropdownlist
    writeDropdownList() {
        let htmlString = `<option>KIES EEN LAND</option>`;

        this.countries.forEach((country) => {
            htmlString += `
            <option value="${country.Country}">${country.Country}</option>
            `
        })
        // console.log(htmlString);
        this.htmlElement.innerHTML = htmlString;
    }
    // uploadDataFirebase(){
    //     firebasePush.postsCollection.add({
    //         confrimed = this.TotalConfirmed,
    //     })
    // }
}

class Country {
    constructor(country) {
        // landen
        this.Country = country.Country;
        this.CountryCode = country.CountryCode;
        this.TotalConfirmed = country.TotalConfirmed;
        this.TotalDeaths = country.TotalDeaths;
        this.TotalRecovered = country.TotalRecovered;

    }

}

class Chart {
    constructor() {

    }
}


// deel1
const test = new allData('land');
console.log(test.init());
console.log("Informatie inladen", test);