import { schemaComposer } from 'graphql-compose';
import { composeMongoose } from 'graphql-compose-mongoose';

import mongoose from 'mongoose';
import _ from 'lodash';

export interface MaterialDoc extends mongoose.Document {
  name: string;
  passowrd: string;
  token: string;
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  }
});

const User = mongoose.model('User', UserSchema);

export const UserTC = composeMongoose(User, {});

const loginResolver = schemaComposer.createResolver({
  type: UserTC,
  name: 'login',
  args: { login: 'String', password: 'String' },
  resolve: async ({ args }) => {
    const user = await User.findOne({ name: args.login });
    if (args.password && args.password === user?.password) return {
      name: user?.name,
      token: user?.token,
    };

    return {};
  }
});

export const authQuery = {
  login: loginResolver,
};
