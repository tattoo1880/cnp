import express from 'express';
import cors from 'cors';
import connectDB from "./db/Mdb.js";
import phoneRoutes from './routes/phoneRouter.js';

const app = express();
const corsOptions = {
    // 允许所有
    origin: '*',
    // 允许所有
    methods: '*',
    // 允许所有
    allowedHeaders: '*',
    // 允许携带cookie
    credentials: true,
    // 允许所有
    optionSuccessStatus: 200
    // 允许所有
};
app.use(cors(corsOptions));
app.use(express.json());

connectDB()


app.use('/phone', phoneRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});



const port = 8000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});