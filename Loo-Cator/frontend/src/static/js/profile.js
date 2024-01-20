import api from './APIClient.js';

// whenever the page loads, call functions
window.addEventListener('load', populateReviewList());

function populateReviewList() {
    api.getCurrentUser().then( user => {
        console.log(user.id)
        api.getUserReviews(user.id).then(reviews => {
            console.log(reviews)
            const reviewsUl = document.getElementById('reviews');
    
            reviewsUl.innerHTML = '';
    
            // populate the list reviews
            reviews.forEach(review => {
                const li = document.createElement('li');                
                populateReview(li, review);
                reviewsUl.appendChild(li);
            });
        });
    });
}

function populateReview(listItem, review) {
    //Cleanliness
    let category = document.createElement('h3');
    category.setAttribute("class", "review-field");
    category.innerText = `Cleanliness: ${review.cleanliness_rtng} / 5`;
    listItem.appendChild(category);
    //privacy
    let category2 = document.createElement('h3');
    category2.setAttribute("class", "review-field");
    category2.innerText = `Privacy: ${review.privacy_rtng} / 5`;
    listItem.appendChild(category2);
    //aesthetic_rtng
    let category3 = document.createElement('h3');
    category3.setAttribute("class", "review-field");
    category3.innerText = `Aesthetics: ${review.aesthetic_rtng} / 5`;
    listItem.appendChild(category3);
    //amenities_rtng
    let category4 = document.createElement('h3');
    category4.setAttribute("class", "review-field");
    category4.innerText = `Amenities: ${review.amenities_rtng} / 5`;
    listItem.appendChild(category4);
    //overall_rtng
    let category5 = document.createElement('h3');
    category5.setAttribute("class", "review-field");
    category5.innerText = `Overall: ${review.overall_rtng} / 5`;
    listItem.appendChild(category5);
    //changingtable
    let category6 = document.createElement('h3');
    category6.setAttribute("class", "review-field-bool");
    const val = review.hasChangingTable ? "Yes" : "No";
    category6.innerText = `Has Changing Table: ${val}`;
    listItem.appendChild(category6);
    //accessible
    let category7 = document.createElement('h3');
    category7.setAttribute("class", "review-field-bool");
    const val2 = review.hasAccessibility ? "Yes" : "No";
    category7.innerText = `Has Accessibility Features: ${val2}`;
    listItem.appendChild(category7);
    //commment
    let category8 = document.createElement('h3');
    category8.setAttribute("class", "review-comment");
    category8.innerText = `${review.comment}`;
    listItem.appendChild(category8);
}