import express, {Application, Request, Response} from "express"
import mongoose from 'mongoose'
import TeamRouter from "./routes/team"
import GameRouter from "./routes/game"
import PlayerRouter from "./routes/player"
import { group } from "console"

const db_url = "mongodb+srv://admin:cheese01@cluster0.pfikg.mongodb.net/nba_db?retryWrites=true&w=majority";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const connectDB = async () => {
    try {
        await mongoose.connect(db_url, { useNewUrlParser: true});
        console.log("Connected to DB")
    } catch(err){
        console.log("Failed connection to DB")
    }
}
connectDB();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

})
app.listen(3001, function () {
    console.log('listening on 3001')
})
app.use('/teams', TeamRouter);
app.use('/games', GameRouter);
app.use('/players', PlayerRouter);