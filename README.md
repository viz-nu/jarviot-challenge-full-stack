# jarviot-challenge-full-stack

This is a Full Stack Web App.
Uses Google Apis to generate risk report of user's Google Drive and stores user details in encrypted format in Mongo DB Database.
## Tech Stack

**Client:** React JS

**Server:** Node JS, Express JS

**Database:** Mongo DB
  
## Run Locally

Clone the project

```bash
  git clone git@github.com:viz-nu/jarviot-challenge-full-stack.git
```

Go to the project directory

```bash
  cd jarviot-challenge-full-stack
```

Install dependencies

```bash
cd client/
  npm i
```

```bash
  cd ../server
  npm i
```

Get the secret key file and put it in server/config as default.json
please do contact +919959964639 or vishnu.teja101.vt@gmail.com if you dont find it attached to mail.



Start the server

```bash
  npm start
```
Start the Client

```bash
  cd ../client
  npm start
```

this will ensure that React is working on port 3000 and Express server running on port 5000 seperately


  
# Features
### Terminal
make sure your terminal runs this way
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/terminal.jpeg)
### Landing Page
this is the most basic landing page. click on "Scan my Google Drive" button to start the authentication process.
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/landing_page.jpeg)
### Authenticaton
the application is currently in unverified stage. Therefore I request you to trust the source and proceed as directed in pictures
step 1: choose your account
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/Google_authentication1.jpeg)
step 2: I you find any error from google please do refresh the page and you will see something like this.
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/Google_authentication2.jpeg)
click on Advanced and Go to Gdrive_accessing_risk_repost(unsafe)
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/Google_authentication3.jpeg)
step 3: Click on continue to complete the Authentication process
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/Google_authentication4.jpeg)



### Real Time Report Page
you will find number of public files, number of people accessing files in your drive, and numbe of file that you shared externally.
Along with that you will also see a table of details related to files in your drive. click on them to navigate to its content link.
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/report_page.jpeg)

### Revoke Access
here comes the final segment of assignment.
on Clicking this button you will not navigate back to landing page but also clears the token and all details related user in the database
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/Revoke_Access.jpeg)

### MongoDb
Before user authentication 
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/BeforeAuth.jpeg)
After user authentication 
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/AfterAuth.jpeg)
After user revoking access
![](https://github.com/viz-nu/jarviot-challenge-full-stack/blob/main/ScreenShots/AfterRevoke.jpeg)

## Made By

- [@viz-nu](https://github.com/viz-nu/)

  