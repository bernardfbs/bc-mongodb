import express, { Application } from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/ItemRoutes';
import db from './models/db';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/items', itemRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});