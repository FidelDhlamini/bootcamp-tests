describe('The greet function', function(){

    it('should greet Daniel correctly', function(){
        assert.equal('Hello, Daniel', greet('Daniel'));      
    });
    it('should greet Karen when the name is passed', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});



