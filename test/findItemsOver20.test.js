describe('The findItemsOver20 function', function(){

    it('it should return all the products that have a quantity higher than 20', function(){
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
    ]), [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}    
    ])
   
    });
    it('it should return all the products that have a quantity higher than 20', function(){
        assert.deepEqual(findItemsOver20([
            {name : 'crayons', qty : 60},
            {name : 'bread', qty : 30},
            {name : 'sweet potatoes', qty : 24},
            {name : 'avocados', qty : 3},
    ]), [{name : 'crayons', qty : 60},
         {name : 'bread', qty : 30},
         {name : 'sweet potatoes', qty : 24},
    ])
   
    });
});