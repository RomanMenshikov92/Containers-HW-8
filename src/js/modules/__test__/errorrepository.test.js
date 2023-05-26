import ErrorRepository from '../errorrepository';

test('ErrorRepository translate have value', () => {
  const error = new ErrorRepository();
  const expected = 'Ошибка 1001';

  expect(error.translate(1001)).toEqual(expected);
});

test('ErrorRepository translate have not value', () => {
  const error = new ErrorRepository();
  const expected = 'Unknown error';

  expect(error.translate(1002)).toEqual(expected);
});
