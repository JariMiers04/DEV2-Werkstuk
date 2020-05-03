const Utils = {
    convertDetailedDataToDataset(id, data) {
        const timeline = data.timelines.confirmed.timeline;
        const labels = Object.keys(timeline).map(key => {
            return key.substring(0, key.indexOf("T"));
        })
        return {
            labels,
            label: data.country,
            data: Object.values(timeline),
            borderColor: this.getRandomColor(),
            pointRadius: 0,
            id
        }
    },
    convertTimeline(timeline) {
        return {
            labels: Object.keys(timeline),
            data: Object.values(timeline),
            backgroundColor: 'orange'
        };
    },
    getRandomColor() {
        const colors = ['#fc5c65', '#fd9644', '#fed330', '#26de81', '#2bcbba', '#45aaf2', '#4b7bec', '#a55eea', '#778ca3', '#4b6584'];
        return colors[Math.floor(Math.random() * colors.length)];
    },
    sortCountriesBy(param) {
        return function(a, b) {
          return b[param] - a[param];
        }
    }
}

export default Utils;