describe('The countAllPaarl function', function(){

    it('it should return the number of registration numbers in the string for Paarl', function(){
        assert.equal(countAllPaarl("CJ345123,CJ2345,CJ123"), 3);    
    });
    it('it should return the number of registration numbers in the string for Paarl', function(){
        assert.equal(countAllPaarl("CJ345123,CJ2345"), 2);    
    });
    it('it should return the number of registration numbers in the string for Paarl', function(){
        assert.equal(countAllPaarl("CJ345123"), 1);    
    });
   
});