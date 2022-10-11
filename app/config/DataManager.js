export default class DataManager {
    static myInstance = null;
    userID = "";
    meetingsCount = 1;
    currUser = [];
    loggedIn = false;

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
             date: "26/09/2022",
             time: "5:00pm",
             id: 0
        }
    ]

    users = [
        {
            id: "user1",
            name:"Winter Soldier",
            email:"winter.soldier@gmail.com",
            username: "winter.soldier",
            password:"1922",
            image: require('../public/bucky.jpg')
        },
        {
            id: "user2",
            name:"Steve Rogers",
            username: 'steve.rogers',
            email:"captain.steve@yahoo.com",
            password:"1945",
            image: require('../assets/cap.jpeg')
        },
    ];

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

    getMeetings() {
        return this.meetings
    }

    addMeeting(date, time) {
        this.meetings.push({
            id: this.meetingsCount,
            date: date,
            time: time
        });
        this.meetingsCount++;
    }

    getCurrUser() {
        return this.currUser
    }

    login(email, password) {
        this.users.forEach(e => {
            if (e.email == email && e.password == password) {
                this.currUser = e;
                this.loggedIn = true;
            }
        })
    }

    addUser(email, password, username) {
        this.users.push({
            id: this.users.length,
            username: username,
            email: email,
            password: password
        })
    }


}