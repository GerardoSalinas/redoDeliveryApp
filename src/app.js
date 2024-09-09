require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const clientRouter = require('./routes/clientRouter');
const adminRouter = require('./routes/adminRouter');
const sequelize = require('./database/dbConnection')
const comercioRouter = require('./routes/comercioRouter');
const ubicacionRouter = require('./routes/ubicacionRouter');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/client", clientRouter);
app.use("/api/admin", adminRouter);
app.use("/api/comercio", comercioRouter);
app.use("/api/ubicacion", ubicacionRouter);

async function main() {
    try {
        await sequelize.sync({alter: true});
        console.log("Modelos sincronizados");
    } catch (error) {
        
    }
}
main();
app.listen( PORT,() => { console.log(`Express App listenning on port ${PORT}`) } );