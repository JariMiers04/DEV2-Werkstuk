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
        // this.chart = chart;
    }
    async init() {
        await this.fetch();
        this.reset();
        this.globalInfo();
        this.filter();
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
    submitForm() {

    }
    reset() {

    }
    globalInfo() {
        document.getElementById('totalCases').innerHTML = this.globalCases;
        document.getElementById('totalDeaths').innerHTML = this.globalDeaths;
        document.getElementById('totalRecovered').innerHTML = this.globalRecovered;
    }
    bindEvents() {
        let inputsUser = document.getElementsByName('select');
        console.log('Inputs', inputsUser);
        this.formElement.addEventListener('submit', this.submitForm.bind(this));
    }
    filter() {
        // this.countries.sort(Utils.sortCountriesBy(this.confirmed));
        // this.countries = this.countries.slice(0, 10);
    }
    render() {
        let writeDropdown = '';
        this.writeDropdownList();
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
        console.log(htmlString);
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
        // super(allData);
        // landen
        this.Country = country.Country;
        this.CountryCode = country.CountryCode;
        this.TotalConfirmed = country.TotalConfirmed;
        this.TotalDeaths = country.TotalDeaths;
        this.TotalRecovered = country.TotalRecovered;

    }

}


// deel1
const test = new allData('land');
console.log(test.init());
console.log("Informatie inladen", test);