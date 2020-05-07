"use strict";

import Utils from "./Utils.js";
import {
    firebasePush
} from "./firebase.js";


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
        // this.uploadDataFirebase();
    }
    async fetch() {
        const response = await fetch("https://api.covid19api.com/summary");
        const json = await response.json();
        // landen
        this.countries = json.Countries.map(country => {
            return new Country(country);
        })
        // // global
        // this.global = json.Global.map(global => {
        //     return new GlobalInfo(global);
        // })
        console.log('Fetch JSON', json)
    }
    submitForm() {

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
        this.htmlElement.insertAdjacentHTML('beforeend', writeDropdown);
        this.writeDropdownList();
        this.bindEvents();
    }

    // landen van api zetten in een html dropdownlist
    writeDropdownList() {
        for (i = 0; i < this.countries.length; i++) {
            let addContent = this.countries[i];
            return `<option value="${addContent}">${addContent}</option>`;
        }
    }
    // uploadDataFirebase(){
    //     firebasePush.postsCollection.add({
    //         confrimed = this.TotalConfirmed,
    //     })
    // }
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

}


// deel1
const test = new allData('land');
console.log(test.init());

console.log("Informatie inladen", test);