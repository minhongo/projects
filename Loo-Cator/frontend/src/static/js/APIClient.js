import HTTPClient from "./HTTPClient.js";
const API_BASE = '/api';

export default {
    logIn: (username, password) => {
        let data = {
            username: username,
            password: password
        }
        return HTTPClient.post(API_BASE + '/login', data);
    },
    logOut: () => {
        return HTTPClient.post(API_BASE + '/logout', {});
    },
    signUp: (userData) => {
        return HTTPClient.post(API_BASE + '/register', userData);
    },
    getCurrentUser: () => {
        return HTTPClient.get(API_BASE + '/users/current');
    },
    getFavorites: () => {
        return HTTPClient.get(API_BASE + '/favorites/all');
    },
    favoriteBathroom: (usrId, bathroom_id) => {
        let favoritedData = {
            userId: usrId,
            bathroomId: bathroom_id
        }
        return HTTPClient.post(API_BASE + '/favorites/add/user', favoritedData);
    },
    unfavoriteBathroom: (usrId, bathroom_id) => {
        let unfavoriteData = {
            userId: usrId,
            bathroomId: bathroom_id
        }
        return HTTPClient.put(API_BASE + '/favorites/delete/user', unfavoriteData);
    },
    getCampuses: () => {
        return HTTPClient.get('/api/campuses').then(campuses => {
            return campuses;
        });
    },
    getBuildings: (c) => {
        return HTTPClient.get(`/api/${c}/buildings`).then(buildings => {
            return buildings;
        });
    },
    getFloors: (b) => {
        return HTTPClient.get(`/api/${b}/floors`).then(floors => {
            return floors;
        });
    },
    getBathrooms: (f) => {
        return HTTPClient.get(`/api/${f}/bathrooms`).then(bathrooms => {
            return bathrooms;
        });
    },
    getOverviewOfBathroom: (b, f, br) => {
        return HTTPClient.get(`/api/${b}/${f}/${br}`).then(overview => {
            console.log("overview From the server: ", overview);
            return overview;
        });
    },
    getBathroomReviews: (br) => {
        return HTTPClient.get(`/api/reviews/bathroom/${br}`).then(reviews => {
            return reviews;
        });
    },
    getUserReviews: (usr) => {
        return HTTPClient.get(API_BASE +`/reviews/user/${usr}`).then(reviews => {
            return reviews;
        });
    },
    postReview: (cr, pr, aer, amr, ovr, ct, a, c, bth_id, usr_id) => {
        let data = {
            cleanliness_rtng: cr,
            privacy_rtng: pr,
            aesthetic_rtng: aer,
            amenities_rtng: amr,
            overall_rtng: ovr,
            hasChangingTable: ct,
            hasAccessibility: a,
            comment: c,
            bth_id: bth_id,
            usr_id: usr_id
        }
        return HTTPClient.post(API_BASE + '/review', data);
    },
};

