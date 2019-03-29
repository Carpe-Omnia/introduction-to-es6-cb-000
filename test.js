var expect = require('chai').expect
var name = 'Why was this a lab in the first place'
describe('It should have been a lesson', function(){
  it('must be done', function(done){
   expect(name).to.be.a('string') ;
   done()
 })
})
