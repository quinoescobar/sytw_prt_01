var assert = chai.assert;

suite('temperature', function()
{

    test('34J = error', function()
    {
        original.value = "34J";
        calcular();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
