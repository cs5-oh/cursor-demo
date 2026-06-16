import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, extractEmails, getValidEmails } from './email.js';

test('isValidEmail accepts valid addresses and rejects invalid input', () => {
  assert.equal(isValidEmail('user@example.com'), true);
  assert.equal(isValidEmail('invalid'), false);
  assert.equal(isValidEmail(null), false);
});

test('extractEmails returns email strings from member objects', () => {
  const members = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
  assert.deepEqual(extractEmails(members), ['a@b.com', 'c@d.com']);
  assert.deepEqual(extractEmails(null), []);
});

test('getValidEmails returns only valid email addresses', () => {
  const members = [
    { email: 'user@example.com' },
    { email: 'bad' },
    { email: 'other@test.org' },
  ];
  assert.deepEqual(getValidEmails(members), ['user@example.com', 'other@test.org']);
  assert.deepEqual(getValidEmails('not-array'), []);
});
