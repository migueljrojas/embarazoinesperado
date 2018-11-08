'use strict';

var Form = require('../form');

describe('Form View', function() {

  beforeEach(function() {
    this.form = new Form();
  });

  it('Should run a few assertions', function() {
    expect(this.form);
  });

});
