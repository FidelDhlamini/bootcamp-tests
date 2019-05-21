describe('The findItemsOver function', function(){

    it('it return all the products that have a quantity higher than the threshold', function(){
        assert.deepEqual(findItemsOver(list,20), results);    
    });
   
});