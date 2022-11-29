const nodeMailer = require("nodemailer");
const { google } = require("googleapis");
const jwt = require("jsonwebtoken");
const dotenv=require('dotenv');
const sender=require('../templates/sender');
dotenv.config()

 const OAuth2 = google.auth.OAuth2;
 const myOAuth2Client = new OAuth2(
     client_id=process.env.GOOGLE_CLIENT_ID,
     client_secret=process.env.GOOGLE_CLIENT_SECRET,
     redirect_uri=process.env.GOOGLE_REDIRECT_URI
 );
 
 myOAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  
 
  exports.sendMail=async (data,req,res)=>{
     try{
         const myAccessToken =await myOAuth2Client.getAccessToken();
         const transport = nodeMailer.createTransport({
             service: "gmail",
             auth: {
               type: "OAuth2",
               user: "done.well2023@gmail.com",
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret:process.env.GOOGLE_CLIENT_SECRET,
               refreshToken:process.env.GOOGLE_REFRESH_TOKEN,
               accessToken: myAccessToken,
             },
           });
           jwt.sign(data , "session" , (err ,token)=>{
            let details={
              from:"done.well2023@gmail.com",
              to:data.email,
              subject:"Well Done Events",
              html:sender(data)
          }
         transport
            .sendMail(details)
            .then((info) => {
              console.log('email send !')
            })
            .catch((err) =>console.error("this is error "+err));
           })


           
     }
     catch(error){
         console.log("also error "+error)
     }
  }