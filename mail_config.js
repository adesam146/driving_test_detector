// If you search smtp for hotmail/gmail/yahoo then you should be able to 
// find and just copy the required values

module.exports = {
  host: '...',  // i.e. For Hotmail: 'smtp.live.com', for other just search smtp for gmail/yahoo/...
  port: 000,  // TODO: Change. Usually 465 or 587
  secure: false, // secure:true if using port 465, secure:false for port 587
  auth: {
      user: '...', // You email address
      pass: '...'  // Your password
  }
}