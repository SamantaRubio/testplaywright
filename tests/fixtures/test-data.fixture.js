// tests/fixtures/test-data.fixture.js
import { test as base } from '@playwright/test';

// Datos de prueba centralizados
const users = {
  valid: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce',
  },
  performance: {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'fake_user',
    password: 'wrong_pass',
  },
};

// Fixture: inyecta testData en todos los tests que lo usen
export const test = base.extend({
  testData: async ({}, use) => {
    await use({ users });
  },
});

export const expect = test.expect;
