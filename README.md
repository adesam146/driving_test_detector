# About
What to do when you're searching for a driving test date soon and you find out that the DVSA uses twitter to announce new openings? You can either keep refreshing the page or you can write a program to alert you when they post an update that mentions the area you're looking for!
I decided to do the later and if there is one thing I love about programming, its being able to do things like this and also being able to share the code, which is exactly what this git repo is intended to do.

# How to use
First of all, feel free to play around with the code as much as you will, I'm sure it can be better.
The files you need to edit are <br>
bot.js <br>
access_config.js and <br>
mail_config.js <br>

All the details needed to edit/personalize these files can be found in the respective files. 
Follow the 'TODO' comments in the files.

For deployment to Heroku, you need to create a new heroku app and follow the instructions for
deployment using Heroku Git. After you've pushed to heroku as guided by their instruction, go to the Resources tab
of your heroku app on the heroku website. You should then stop the app from being a 'web' app to being a 'worker' app
because you app is more of a background process. All of this is completely FREE.


# Useful Resources:
https://www.npmjs.com/package/twit <br>
https://dev.twitter.com/rest/reference <br>
https://nodemailer.com/about/ <br>