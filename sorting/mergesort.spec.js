describe('Split Array function', function() {
    it('is able to split an even array into two halves', function() {
        expect( split([1,2,3,4]) ).toEqual( [[1,2],[3,4] ] );
    });
    it('is able to split an odd array into two halves', function() {
        expect( split([1,2,3,4,5]) ).toEqual( [[1,2],[3,4,5] ] );
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect( merge([1,2],[3,4,5]) ).toEqual( [1,2,3,4,5] );

    });
  });

  describe('Merge Sort function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect( mergeSort([2,1,3,5,4,0,10,9,6,]) ).toEqual( [0,1,2,3,4,5,6,9,10] );

    });
  });