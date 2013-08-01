var flatten = require('../index');

describe('flatten', function() {
  
  describe('a flat array with one elements', function() {
    var arr = ['one'];
    var ret = flatten(arr);
    
    it('should flatten array', function() {
      expect(ret).to.have.length(1);
      expect(ret[0]).to.be.equal('one');
    });
  });
  
  describe('a flat array with two elements', function() {
    var arr = ['one', 'two'];
    var ret = flatten(arr);
    
    it('should flatten array', function() {
      expect(ret).to.have.length(2);
      expect(ret[0]).to.be.equal('one');
      expect(ret[1]).to.be.equal('two');
    });
  });
  
  describe('an array with nested arrays', function() {
    var arr = ['one', ['two', ['three', 'four'], 'five']];
    var ret = flatten(arr);
    
    it('should flatten array', function() {
      expect(ret).to.have.length(5);
      expect(ret[0]).to.be.equal('one');
      expect(ret[1]).to.be.equal('two');
      expect(ret[2]).to.be.equal('three');
      expect(ret[3]).to.be.equal('four');
      expect(ret[4]).to.be.equal('five');
    });
  });
  
});
