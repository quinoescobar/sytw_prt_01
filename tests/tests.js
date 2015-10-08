var assert = chai.assert;

suite('temperature', function()
{

    test('34J = error', function()
    {
        original.value = "34J";
        calcular();
        assert.match(converted.innerHTML, /ERROR/);
    });

    test('34C = 93.2 Farenheit', function()
    {
        original.value = "34C";
        calcular();
        assert.deepEqual(converted.innerHTML, "93.2 Farenheit");
    });

    test('34F =  	1.1 Celsius', function()
    {
        original.value = "34F";
        calcular();
        assert.deepEqual(converted.innerHTML, "1.1 Celsius");
    });

    test('444c =  831.2 Farenheit', function()
    {
        original.value = "444c";
        calcular();
        assert.deepEqual(converted.innerHTML, "831.2 Farenheit");
    });

    test('-43c = -45.4 Farenheit', function()
    {
        original.value = "-43c";
        calcular();
        assert.deepEqual(converted.innerHTML, "-45.4 Farenheit");
    });
});
