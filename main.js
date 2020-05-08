"use strict";

import Utils from "./Utils.js";
import {
    firebasePush
} from "./firebase.js";


class allData {
    constructor(htmlElement) {
        this.countries = [];
        this.global = [];
        this.htmlElement = document.getElementById('land');
        this.button = document.getElementById('btn');
    }
    async init() {
        await this.fetch();
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
        this.selectedCountry = console.log(document.getElementById("land"));
        let pinda = this.button.addEventListener("click", function () {
            document.getElementById('totalCases').innerHTML = '12345';
            document.getElementById('totalDeaths').innerHTML = "test";
            document.getElementById('totalRecovered').innerHTML = 'pinda';
        });
        console.log(pinda)
    }

    selectCheckedInput() {
        console.log(this.button);
        this.selectedCountry.forEach((selected) => {
            if (selected.checked) {
                console.log(selected = this.selectedCountry.value);
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
        this.selectInput();
        this.selectCheckedInput();
        this.globalInfo();
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

// werkcollege 9 DEV2
class Chart {
    constructor() {
        var ctx = document.getElementById('myChart').getContext('2d');
        const chart = (ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: []
            },
            // Configuration options go here
            options: {}
        });
    }
    addData(id, data) {
        console.log('Chart added Data', data);
        const newDataset = Utils.convertDetailedDataToDataset(id, data);
        console.log('Converted data', newDataset);
        this.data.labels = newDataset.labels;
        this.data.datasets.push(newDataset);
        this.update();
    }
    removeData(id) {
        console.log("Remove data", id);
        this.data.datasets = this.data.datasets.filter(dataset => {
            return dataset.di !== id;
        })
        console.log(this.data.datasets);
        this.update();
    }
}


// deel1
const test = new allData('land');
console.log(test.init());
console.log("Informatie inladen", test);


const chart = new Chart();