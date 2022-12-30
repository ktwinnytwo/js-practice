
/*How to prevent the default behavior that is triggered by a certain event:
 e.preventDefault(); 90% of the time it's used on a form submission*/


 //Challenge: Capture the inputs and add them as a list under Tweets

 //select form
 const form = document.querySelector('#tweetForm');
 //select username input
 const username = form.elements.username;
 //select tweet input
 const tweet = form.elements.tweet;
 //select the tweet ul container
 const feed = document.querySelector('#tweets');
 
 form.addEventListener('submit', function(e){
     e.preventDefault();
     //create an li element
     const newLi = document.createElement('li');
     
    //if we want to bold the username:
     const boldUsername = document.createElement('strong');
     //Put the username value into a span tag because you cant append a string
     //to a bold tag. It must be in a node (div,span,etc)
     const span = document.createElement('span');
     span.innerText = username.value;
     boldUsername.appendChild(span);

     newLi.append(boldUsername);
     newLi.append(`: ${tweet.value}`);
     feed.appendChild(newLi);
     form.reset(); //can also just reset them by setting the values to ""
  
 })





//ALTERNATIVE METHOD:

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }
 

