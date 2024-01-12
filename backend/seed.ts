import mongoose from 'mongoose';
import Item from './models/Item';

const itemsData = [
  { name: 'Item 1', description: 'Descrição do Item 1' },
  { name: 'Item 2', description: 'Descrição do Item 2' },
  // Adicione mais dados conforme necessário
];

async function seedDatabase() {
  await Item.deleteMany({});
  await Item.create(itemsData);
}

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');
  await seedDatabase();
  console.log('Database seeded');
  process.exit(0);
});