import api from './APIClient.js';

const reviewList = document.querySelector('.review-list');
const urlParams = new URLSearchParams(window.location.search);
const bathroomId = urlParams.get('id');

const ratingElements = document.querySelectorAll('.ratings');
const checkboxElements = document.querySelectorAll('input[type="checkbox"]');
const commentTextarea = document.getElementById('comment');
const charCount = document.getElementById('charCount');
const submit = document.getElementById('submit-review');

window.addEventListener('load', start);

function start() {


    api.getBathroomReviews(bathroomId).then(reviews => {

        reviews.forEach(review => {
            let listItem = document.createElement('li');
            populateReview(listItem, review);
            reviewList.appendChild(listItem);
        });

        ratingListener();

    }).catch(error => {
      console.error('Bathrooms not found. Error: ', error);
    });
}

//Change this method to edit what gets added to html doc for each review
function populateReview(listItem, review) {
    let row1 = document.createElement('div');
    row1.id = "row1";
    //Cleanliness
    let category = document.createElement('h3');
    category.setAttribute("class", "review-field");
    category.innerText = `Cleanliness: ${review.cleanliness_rtng} / 5`;
    row1.appendChild(category);
    //privacy
    let category2 = document.createElement('h3');
    category2.setAttribute("class", "review-field");
    category2.innerText = `Privacy: ${review.privacy_rtng} / 5`;
    row1.appendChild(category2);

    listItem.appendChild(row1);

    let row2 = document.createElement('div');
    row2.id = "row2";
    //aesthetic_rtng
    let category3 = document.createElement('h3');
    category3.setAttribute("class", "review-field");
    category3.innerText = `Aesthetics: ${review.aesthetic_rtng} / 5`;
    row2.appendChild(category3);
    //amenities_rtng
    let category4 = document.createElement('h3');
    category4.setAttribute("class", "review-field");
    category4.innerText = `Amenities: ${review.amenities_rtng} / 5`;
    row2.appendChild(category4);

    listItem.appendChild(row2);


    let row3 = document.createElement('div');
    row3.id = "row3";
    //changingtable
    let category6 = document.createElement('h3');
    category6.setAttribute("class", "review-field-bool");
    const val = review.hasChangingTable ? "Yes" : "No";
    category6.innerText = `Changing Table? ${val}`;
    row3.appendChild(category6);
    //accessible
    let category7 = document.createElement('h3');
    category7.setAttribute("class", "review-field-bool");
    const val2 = review.hasAccessibility ? "Yes" : "No";
    category7.innerText = `Accessibility Features? ${val2}`;
    row3.appendChild(category7);

    listItem.appendChild(row3);


    let row4 = document.createElement('div');
    row4.id = "row4";
    //overall_rtng
    let category5 = document.createElement('h3');
    category5.setAttribute("class", "review-field");
    category5.innerText = `Overall: ${review.overall_rtng} / 5`;
    row4.appendChild(category5);

    listItem.appendChild(row4);
    
    let row5 = document.createElement('div');
    row5.id = "row5";
    //commment
    let category8 = document.createElement('h3');
    category8.setAttribute("class", "review-comment");
    category8.innerText = `Comment: ${review.comment}`;
    row5.appendChild(category8);

    listItem.appendChild(row5);
}

function ratingListener() {
    ratingElements.forEach(ratingElement => {
        ratingElement.addEventListener('click', event => {
            const selectedRating = event.target.getAttribute('data-rating');
            // const category = ratingElement.getAttribute('data-category');
            console.log(selectedRating);
            // console.log(category);
            ratingElement.setAttribute('value', selectedRating);

            switch (ratingElement.id) {
                case "clean-rating":
                    let stars = ratingElement.querySelectorAll('span');
                    for (let i = 5 - selectedRating; i < 5; i++) {
                        stars[i].style.color = 'orange';
                    }
                  break;
              
                case "privacy-rating":
                    let stars2 = ratingElement.querySelectorAll('span');
                    for (let i = 5 - selectedRating; i < 5; i++) {
                        stars2[i].style.color = 'orange';
                    }
                    break;

                case "aesthetic-rating":
                    let stars3 = ratingElement.querySelectorAll('span');
                    for (let i = 5 - selectedRating; i < 5; i++) {
                        stars3[i].style.color = 'orange';
                    }
                    break;

                case "amenities-rating":
                    let stars4 = ratingElement.querySelectorAll('span');
                    for (let i = 5 - selectedRating; i < 5; i++) {
                        stars4[i].style.color = 'orange';
                    }
                    break;

                case "overall-rating":
                    let stars5 = ratingElement.querySelectorAll('span');
                    for (let i = 5 - selectedRating; i < 5; i++) {
                        stars5[i].style.color = 'orange';
                    }
                    break;
              
                default:
                  // Code to be executed if expression doesn't match any case
              }
        });
    })

    commentTextarea.addEventListener('input', updateCharCount);
    commentTextarea.addEventListener('change', updateCharCount);

    // checkboxElements.forEach(checkboxElement => {
    //     checkboxElement.addEventListener('change', function () {
    //         const selectedRating = checkboxElement.checked;
    //         const category = checkboxElement.getAttribute('data-category');

    //         console.log(`Category: ${category}, Rating: ${selectedRating}`);
    //     });
    // });

    submit.addEventListener('click', e => {
        let review = {
            cr: ratingElements[0].getAttribute('value'),
            pr: ratingElements[1].getAttribute('value'),
            aer: ratingElements[2].getAttribute('value'),
            amr: ratingElements[3].getAttribute('value'),
            ovr: ratingElements[4].getAttribute('value'),
            ct: checkboxElements[0].checked,
            a: checkboxElements[1].checked,
            c: commentTextarea.value,
        }
        console.log(review);
        api.getCurrentUser().then(user => {
            api.postReview(review.cr,review.pr,review.aer,review.amr,review.ovr,review.ct,review.a,review.c,bathroomId,user.id).then(response => {
                console.log('Success');
            }).catch(error => console.error('Error:', error));;
        });
    })
}


function updateCharCount() {
    const remainingChars = 400 - commentTextarea.value.length;
    charCount.textContent = `Characters left: ${remainingChars}`;
}