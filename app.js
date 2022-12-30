
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

//Making the tweet:

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});


//Function that contains the tweet creation with the bold tag and such
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

/*To delete the tweet: */

tweetsContainer.addEventListener('click', function (e) {
    /*e.target.remove() -> enough to remove the li, but if you want
    to ensure that it's an li first, then you can use e.target.nodeName === 'LI'
    first and if it checks out, then remove it*/
    e.target.nodeName === 'LI' && e.target.remove();
})

/*(cant use loops, because that would only work
with tweets that were already there, not future ones) */