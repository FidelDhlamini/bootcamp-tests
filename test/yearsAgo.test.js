describe('The yearsAgo function', function(){

    it('it should return how many years ago the year 2000 was', function(){
        assert.equal(yearsAgo(2000), 19);    
    });
    it('it should return error when year is not in the right format', function(){
        assert.equal(yearsAgo(96), "year should be in this format YYYY");    
    });
    it('it should return error message when no year is entered', function(){
        assert.equal(yearsAgo(''),"enter a year (YYYY)");    
    });
   
});