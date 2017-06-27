console.log("The Detector is starting");

// This is the package used to interact with the twitter api
// See https://www.npmjs.com/package/twit
const Twit = require('twit');
const access_config = require('./access_config');
const T = new Twit(access_config);

// See https://nodemailer.com/about/
'use strict';
const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
const mail_config = require('./mail_config');
let transporter = nodemailer.createTransport(mail_config);

// TODO: These are the twitter user ids for the accounts I intented to
// to monitor. You can find a twitter account's user id here:
// http://gettwitterid.com/
// This is DVSA_HelpMe user ia
var dvsa_user_id = 1632603697;

var params = {
  follow: [dvsa_user_id]
};

// See https://dev.twitter.com/streaming/public &
// https://dev.twitter.com/streaming/reference/post/statuses/filter
var stream = T.stream('statuses/filter', params);
stream.on('tweet', gotDrivingTestTweet)


function gotDrivingTestTweet(data) {
  var tweet = data.text;

  // You can change Barking, Goodmayes and Testing to whatever keyword you're looking for
  if (aContainsB(tweet, 'Barking') || aContainsB(tweet, 'Goodmayes') ||aContainsB(tweet, 'Testing') ) {
    console.log("From: " + data.user.screen_name + '\nTweet: ' + data.text);
    sendMsg(tweet);
  }
}

function aContainsB (a, b) {
    return a.indexOf(b) >= 0;
}

function sendMsg(msg) {
  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Driving Test Detector" <' + mail_config.user + '>', // sender address
      to: mail_config.user, // list of receivers, in this case I just want to send it to myself
      subject: 'Test Detected!', // Subject line
      text: msg, // plain text body
      html: '<b>' + msg + '</b>' // html body
  };

    // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
}