describe('The mostProfitableDepartment function', function(){

    it('it should return which Department of the shop is the most profitable', function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"}]), 'hardware');    
    });
    it('it should return which Department of the shop is the most profitable', function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"outdoor","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"}]), 'outdoor');    
    });
    it('it should return which Department of the shop is the most profitable', function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"top-floor","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"}]), 'top-floor');    
    });
   
   
});