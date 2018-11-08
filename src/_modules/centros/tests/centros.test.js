'use strict';

var Centros = require('../centros');

describe('Centros View', function() {

  beforeEach(function() {
    this.centros = new Centros();
  });

  it('Should run a few assertions', function() {
    expect(this.centros);
  });

});
