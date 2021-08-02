import { knex } from 'dsek-shared';

import createApolloServer from '../src/server';

import { ApolloServer } from 'apollo-server';
import { DataSources } from '../src/datasources';
import __serviceNameCapitalize__API from '../src/datasources/__serviceNameCaptializePluralize__';

export const constructTestServer = (context?: any): {server: ApolloServer, context: any, dataSources: DataSources} => {
  const dataSources: DataSources = {
    __serviceName__API: new __serviceNameCapitalize__API(knex),
  }
  return {
    server: createApolloServer(context, () => dataSources),
    context: context,
    dataSources: dataSources,
  }
}