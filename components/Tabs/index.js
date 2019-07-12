// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const subjects = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('Success! Data here: ', data);
        const topic = data.data.topics;
        topic.forEach(topics => {
            subjects.appendChild(createTabs(topics));
        });
    })
    .catch(err => {
        console.log('Error retrieving data from link: ', err);
    })


function createTabs(data) {
    // create the elements
    const topics = document.createElement('div');

    // set the styles
    topics.classList.add('tab');

    // set the content
    topics.textContent = data;

    return topics;
}