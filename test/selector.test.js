define(['selector'],
function(select) {

  describe("selector", function() {
    
    it('shoud export function', function() {
      expect(select).to.exist;
      expect(select).to.be.a('function');
    });
    
  });
  
  return { name: "test.select" }
});
