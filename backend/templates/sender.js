const dotenv=require('dotenv')
dotenv.config()

const sender=(data)=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <title>well done events</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Parisienne&display=swap');
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        body{
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .logo_holder{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            background-color: #1c1c1c;
        }
        .logo_holder img{
            margin: 0 auto;
        }
        h3{
            color: white;
            font-family: 'Lobster', cursive;
            font-size: 25px;
            text-align: center;
            margin: 0 auto 20px;
        }
        .res_holder{
            margin: 8px;
            display: flex;
        }
        .res_holder p{
            font-family: 'Parisienne', cursive;
            font-size: 21px;
            margin: 5px auto;
            text-align: center;
            font-weight: bold;
            color: black;
        }
        .req_holder{
            display: flex;
            margin-top: 20px;
            padding: 8px;
        }
        .req_holder div{
            width: 50%;
            background-color: #1c1c1c;
            padding: 15px;
            border: 4px solid #a29500;
            margin: 0 auto 15px;
        }
        .req_holder div p{
            color: white;
            font-family: sans-serif;
        }
        .req_holder div p span{
            color: #a29500;
            font-family: sans-serif;
            font-weight: bold;
        }
        .footer{
            background-color: #1c1c1c;
            margin-top: auto;
            display: flex;
            flex-direction: column;
            padding: 10px;
        }
        .footer h2{
            color: #a29500;
            font-family: 'Lobster', cursive;
            margin: 0 auto;
            font-size: 30px;
            text-align: center;
        }
        @media screen and (max-width:600px) {
            .req_holder div{
            width: 95%;
        }
        }
    </style>
</head>
<body>
    <div class="logo_holder">
        <img src="https://res.cloudinary.com/djmy8oqkz/image/upload/v1668869993/logo_png_tv95sy.png"  height="170" width="170"/>
    </div>
    <div class="logo_holder">
        <h3>Merci de nous contacter !</h3>
    </div>
    <div class="res_holder">
        <p>Salut ${data.nom} ${data.prenom} votre message est bien reçu.</p>
    </div>
    <div class="res_holder">
        <p>Nous répondrons à votre demande dès que possible</p>
    </div>
    <div class="req_holder">
        <div>
            <p><span>Nom: </span>${data.nom}</p>
            <p><span>Prenom: </span>${data.prenom}</p>
            <p><span>Téléphone: </span>+216  ${data.telephone}</p>
            <p><span>Adresse: </span>${data.adress}</p>
            <p><span>Type d'événement: </span>${data.event}</p>
            <p><span>Date: </span>${data.date}</p>
            <p><span>Message: </span>${data.message}</p>
        </div>
    </div>
    <div class="footer">
        <h2>Suivez-nous sur les réseaux sociaux</h2>
    </div>
</body>
</html>`;
module.exports = sender;