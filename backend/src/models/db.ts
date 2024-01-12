import mongoose from 'mongoose';

const dbUser = 'aluno';
const dbPassword = 'aluno123';
const dbName = 'BF_Teste';
const dbCollection = 'BF_Collection';
const dbHost = '159.203.117.91';
const dbPort = '27017';

const uri = `mongodb://aluno:aluno123@159.203.117.91:27017`;

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

export default db;