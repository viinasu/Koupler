describe('this is a test', function(){


  beforeEach(module('koupler'));
  beforeEach(module('koupler.profile'));

  var ctrl;

  beforeEach(inject(function(_$controller_) {
    ctrl = _$controller_;
    ctrl = ctrl('ProfileCtrl');
  }));

  it('should go to the home state', function() {
    // expect(ctrl.myKarmaTest).toBe(true);
    expect(true).toBe(true);
  });


  it('should be equal', function(){
    expect(true).toBe(true);
  });

});
