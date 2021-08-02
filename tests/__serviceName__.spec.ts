import 'mocha';
import mockDb from 'mock-knex';
import { expect } from 'chai';

import { context, knex } from 'dsek-shared';
import __serviceNameCapitalize__API from '../src/datasources/__serviceNameCaptializePluralize__';
import { UserInputError } from 'apollo-server-errors';