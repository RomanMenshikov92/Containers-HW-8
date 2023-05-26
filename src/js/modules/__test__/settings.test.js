import Settings from '../settings';

test('Settings custom', () => {
  const setting = new Settings();
  setting.settings = ['theme', 'gray'];
  setting.settings = ['music', 'rock'];

  const expected = new Map([['theme', 'gray'], ['music', 'rock']]);

  expect(setting.custom).toEqual(expected);
});

test('Settings custom', () => {
  const setting = new Settings();
  setting.settings = ['theme', 'gray'];
  setting.settings = ['music', 'rock'];

  const expected = new Map([['theme', 'gray'], ['music', 'rock'], ['difficulty', 'easy']]);

  expect(setting.settings).toEqual(expected);
});
