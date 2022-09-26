export default class DataManager {
    static myInstance = null;
    userID = "";
    meetingsCount = 0;

    photos = [
        {
            userid: "user1",
            photoid: 1,
            date: "28th December 2021",
            image: require("../assets/family.jpeg"),
            category: "Family"
        },
        {
            userid: "user1",
            photoid: 2,
            date: "31st July 2021",
            image: require("../assets/wine.jpeg"),
            category: "Outing"
        },
        {
            userid: "user1",
            photoid: 3,
            date: "5th June 2021",
            image: require("../assets/ramen.jpeg"),
            category: "Food"
        },
    ]

    meetings = [
        {
             date: "Mon Sep 26 2022 01:15:00 GMT+1000 (Australian Eastern Standard Time)",
             id: 0
        },
    ]

    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID() {
        return this.userID;
    }

    setUserID(id) {
        return this.userID = id;
    }
    getPhotos(id) {
        return this.photos.filter((photo) => photo.userid === id);
    }

    addMeeting(obj) {
        this.meetings.push({
            id: this.meetingsCount,
            date: obj
        });
        this.meetingsCount++;
    }
}