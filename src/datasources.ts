import { knex } from 'dsek-shared';

import __serviceNameCapitalize__API from './datasources/__serviceNameCaptializePluralize__';

export interface DataSources {
  __serviceName__API: __serviceNameCapitalize__API,
}

export default () => {
  return {
    __serviceName__API: new __serviceNameCapitalize__API(knex),
  }
}