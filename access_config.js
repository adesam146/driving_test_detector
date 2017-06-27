// Go to https://apps.twitter.com/ and click create a new app (you can put in any url for the Website section on the Create an application form, it doesn't matter). 
// Then after you've created the app you should be able to go to the 'Keys and Access Tokens" tab of the app to find the 'consumer_key', 'consumer_secret' and to generate the access_token.


module.exports = {
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}