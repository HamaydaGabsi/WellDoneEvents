const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const connectDB=require('./config/connectDB');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger/swagger.json');
//.env configuration
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:false
}))

//connect Database
connectDB();

//routes
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
app.use('/api/carousel',require('./Routes/carousel.js'));
app.use('/api/accueil',require('./Routes/accueil'));
app.use('/api/services',require('./Routes/services'));
app.use('/api/lieux',require('./Routes/lieux'));

//Run Server
app.listen(process.env.PORT || 6000,(err)=>err?console.log("can't start server"):console.log(`server running on port ${process.env.PORT || 6000}`));