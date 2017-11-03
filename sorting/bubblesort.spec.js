describe('Bubble Sort', function(){
    // beforeAll(function () {
    //     // spyOn(window, 'swap').and.callThrough(); // replace existing `bubbleSort` method
    // });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single element in an array', function(){
        expect( bubbleSort([2]) ).toEqual( [2] );
    });
    it('handles a sorted array', function(){
        expect( bubbleSort([1,2,3]) ).toEqual( [1,2,3] );
    });
    it('handles an unsorted array', function(){
        expect( bubbleSort([2,1,3,5,4,0,10,9,6,]) ).toEqual( [0,1,2,3,4,5,6,9,10] );
    });
    it('two elements should be swapped once', function () {
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([2,1]);
        expect(window.swap.calls.count()).toEqual(1);
    });
  });
