import Validator from '../app';

test('validate 0-9 a-z _ -', () => {
  const username = 'support-1_company';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
  ['support%company'],
  ['support!company'],
  ['support;company'],
  ['support.company']])(
  ('spec`s should be falsy'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);

test('validate 3 digits', () => {
  const username = 'support-123_company';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('4 digits should be falsy', () => {
  const username = 'support-1234_company';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['1support-1_company'],
  ['support-1_company2'],
  ['-support_company'],
  ['support-1_company-'],
  ['_support-1_company'],
  ['support-1_company_']])(
  ('no specs or digits at begin/start'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);