describe('The regCheck function', function(){

    it('it should return true if a number is for GP', function(){
        assert.equal(regCheck('GP'), true);      
    });
    it('it should return false if a number is for MP,CY,ND registration plates', function(){
        assert.equal(regCheck('MP','CY','ND'), false); 
   
    });
});