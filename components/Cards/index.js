// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

const bootstrapArray = [];
const javascriptArray = [];
const jq = [];
const nodejs = [];
const tech = [];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('Here is your data: ', data.data.articles);       
        const topicsData = data.data.articles;
        // console.log(topicsData);

        // bootstrap 
        const bsDatas = data.data.articles.bootstrap;
        bsDatas.forEach(bsData => {
            bootstrapArray.push(bsData);
        });
        // console.log(bootstrapArray);

        // javascript
        const jsDatas = data.data.articles.javascript;
        jsDatas.forEach(jsData => {
            javascriptArray.push(jsData);
        });
        // console.log(javascriptArray);

        // jquery
        const jqDatas = data.data.articles.jquery;
        jqDatas.forEach(jqData => {
            jq.push(jqData);
        });
        // console.log(jq);

        // node.js
        const nodeDatas = data.data.articles.node;
        nodeDatas.forEach(nodeData => {
            nodejs.push(nodeData);
        });
        // console.log(nodejs);

        // technology
        const techDatas = data.data.articles.technology;
        techDatas.forEach(techData => {
            tech.push(techData);
        });
        // console.log(tech);

        bootstrapArray.forEach(boots => {
            cardContainer.appendChild(createArticles(boots));
        });

        javascriptArray.forEach(javas => {
            cardContainer.appendChild(createArticles(javas));
        });

        jq.forEach(jqs => {
            cardContainer.appendChild(createArticles(jqs));
        });

        nodejs.forEach(nodesjs => {
            cardContainer.appendChild(createArticles(nodesjs));
        });

        tech.forEach(techs => {
            cardContainer.appendChild(createArticles(techs));
        });
    })

    .catch(err => {
        console.log('There was an error retrieving your data: ', err);
    })

function createArticles(data) {
    // create the elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    // set the styles
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    // set the content
    headline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;

    // put together
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    return card;
}