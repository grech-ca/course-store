import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import chalk from 'chalk';

import 'dotenv';

import schema from './schema';

mongoose.connect('mongodb+srv://admin:admin@portfolio.7lmsj.mongodb.net/course-store?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(chalk.red(console, 'connection error:')));
db.once('open', () => console.log(chalk.green('DB connected!')));

const server = new ApolloServer({ schema });

server.listen(4000).then(({ url }) => console.log(chalk.yellowBright('Server is running on'), chalk.blueBright(url)));
