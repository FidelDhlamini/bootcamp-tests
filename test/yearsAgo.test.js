describe('The yearsAgo function', function(){

    it('it should return how many years ago the year 2000 was', function(){
        assert.equal(yearsAgo(2000), 19);    
    });
    it('it should return how many years ago the year 1996 was', function(){
        assert.equal(yearsAgo(1996), 23);    
    });
    it('it should return how many years ago the year 1994 was', function(){
        assert.equal(yearsAgo(1994), 25);    
    });
   
});