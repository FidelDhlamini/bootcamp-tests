describe('The countRegNumber function', function(){

    it('It should count the number of registration numbers in the string', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);      
    });
    it('It should count the number of registration numbers in the string', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'), 2);      
    });
    it('It should count the number of registration numbers in the string', function(){
        assert.equal(countRegNumber('CA 182736,CA 182738,CY 523519,CA 182737,CA 183737'), 5);      
    });
    
});