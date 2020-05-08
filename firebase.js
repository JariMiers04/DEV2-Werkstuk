import main from './main.js'

firebase.initializeApp({
    apiKey: 'BwobZQQTto6nSzn9vvsp',
    projectId: 'werkstuk-c1d86'
});

class Firebase {
    constructor() {
        this.db = firebase.firestore();
        this.artistenCollection = this.db.collection("covid19");
    }
    convertQuerySnapshotToRegularArray = (querySnapshot) => querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data()
    }));

    async renderAll() {
        this.globalCollection.onSnapshot((querySnapshot) => {
            // deze callback wordt elke keer als de data veranderd terug uitgevoerd
            const global = this.convertQuerySnapshotToRegularArray(querySnapshot);
            console.log(global);
        });
    }

    firebaseUpdate() {
        this.globalCollection.add({
            confirmed: "",
            country: "",
            deaths: "",
            globalTotalCases: "test",
            song2: "",
            createdAt: new Date()
        });
    }
}
export const firebasePush = new Firebase();