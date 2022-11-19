import {format, isThisQuarter} from 'date-fns'

export default class DataManager {
    static myInstance = null;
    userID = "";
    meetingsCount = 0;
    currUser = [];
    loggedIn = false;

    meetings = [
    ]

    users = [
        {
            id: "0",
            firstName: "Bucky",
            lastName: 'Barnes',
            username: "winter.soldier",
            email:"winter.soldier@gmail.com",
            password:"1922",
            image: require('../public/bucky.jpg'),
            background: require("../assets/we.jpeg")
        },
        {
            id: "1",
            firstName: "Steve",
            lastName: 'Rogers',
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

    getMeetingsList() {
        let ans = []
        this.meetings.forEach((e) => {
            if (e.userID == this.currUser.id) {
                ans.push(e);
            }
        })
        return ans
    }

    getMeeting(id) {
        let ans = []
        this.meetings.forEach((e) => {
            if (e.id == id) {
                ans = e
            }
        })
        return ans;
    }

    addMeeting(date, time, location, description) {
        this.meetings.push({
            id: this.meetingsCount,
            date: date,
            time: time,
            userID: this.currUser.id,
            location: location,
            description: description
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

    logout() {
        this.currUser = [];
        this.loggedIn = false;
    }

    addUser(email, password, username, firstName, lastName) {
        this.users.push({
            id: this.users.length,
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password
        })
    }

    getPrevMeetings() {
        let date = new Date();
        let currDate = format(date, "yyyy/MM/dd")
        let currTime = format(date, "h:mmaaa")
        let ans = [];
        this.meetings.forEach((e) => {
            if (e.userID == this.currUser.id) {
                if (e.date < currDate) {
                    ans.push(e)
                } 
            }
        })
        return ans.sort((a, b) => a.date < b.date);
    }

    getUpcomingMeetings() {
        let date = new Date();
        let currDate = format(date, "yyyy/MM/dd")
        let currTime = format(date, "h:mmaaa")
        let ans = [];
        this.meetings.forEach((e) => {
            if (e.userID == this.currUser.id) {
                if (e.date > currDate) {
                    ans.push(e)
                } 
            }
        })
        return ans.sort((a, b) => a.date > b.date);
    }

    getNextUpcoming() {
        let meetings = this.getMeetingsList();
        let ans = {description: 'Nothing Upcoming', location:'', date: '', time: ''}
        if (meetings.length != 0) {
            ans = meetings[0];
        } 
        return ans;
    }


}