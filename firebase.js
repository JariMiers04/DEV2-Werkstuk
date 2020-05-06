class Firebase {
    constructor(apiKey, projectId, ) {
        firebase.initializeApp({
            apiKey,
            projectId,
        });
        this.database = firebase.firestore();
        this.fileStorage = firebase.storage().ref();
    }
    get postsCollection() {
        return this.database.collection("posts");
    }
}

export const firebasePush = new Firebase('BwobZQQTto6nSzn9vvsp', 'werkstuk-c1d86');