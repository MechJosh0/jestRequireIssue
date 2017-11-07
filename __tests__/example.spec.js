jest.mock('__data__/file.json', () => ({
  foo: 'bar'
}), { virtual: true });

it('Should load the file using an alias', () =>
{
	const data = require('__data__/file.json');

	expect(data.foo).toEqual('bar');
});

it('Should load the file using a variable', () =>
{
	const path = './../data/file.json';
	const data = require(path);

	expect(data.foo).toEqual('bar');
});

it('Should load the file using an alias and varible', () =>
{
	const fileName = 'file';
	const data = require(`__data__/${fileName}.json`);

	expect(data.foo).toEqual('bar');
});
