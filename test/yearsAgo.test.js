describe('The yearsAgo function', function(){

    it('it should return how many years ago the year entered was', function(){
        assert.equal(yearsAgo(2000), 19);    
    });
    it('it should return how many years ago the year entered was', function(){
        assert.equal(yearsAgo(1996), 23);    
    });
    it('it should return how many years ago the year entered was', function(){
        assert.equal(yearsAgo(1994), 25);    
    });
   
});