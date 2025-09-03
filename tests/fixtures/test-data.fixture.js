// tests/fixtures/test-data.fixture.js
import { test as base } from '@playwright/test';

// Datos de prueba centralizados
const users = {
  valid: {
    username: 'admin',
    password: 'It2ynl3id3aU0iVn1neTu',
  }
};

// Fixture: inyecta testData en todos los tests que lo usen
export const test = base.extend({
  testData: async ({}, use) => {
    await use({ users });
  },
});

export const expect = test.expect;
