class Firebase {
    constructor(apiKey, projectId, ) {
        firebase.initializeApp({
            apiKey,
            projectId,
        });
        this.database = firebase.firestore();
    }
    get postsCollection() {
        return this.database.collection("country");
    }
}

export const firebasePush = new Firebase('BwobZQQTto6nSzn9vvsp', 'werkstuk-c1d86');