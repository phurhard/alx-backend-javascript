const console = require('./console');

test('prints the Hello World', () => {
    expect(console('Hello World')).toBe('Hello World');
});
