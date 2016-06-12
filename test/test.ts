import * as chai from 'chai';
import cubicInterp = require("../index");
chai.should();

describe('cubic-interp', function () {
  let nValues = [
    {
      n0: 1,
      n1: 5,
      n2: 8,
      n3: 10
    },
    {
      n0: 23,
      n1: 156,
      n2: 210,
      n3: 123
    }
  ];

  nValues.forEach((values) => {
    it(`should return n1 when alpha value is 0.0 for values: {n0: ${values.n0}, n1: ${values.n1}, n2: ${values.n2}, n3: ${values.n3}}`, () => {
      let alpha = 0.0;

      cubicInterp(values.n0, values.n1, values.n2, values.n3, alpha).should.eq(values.n1);
    });

    it(`should return n2 when alpha value is 1.0 for values: {n0: ${values.n0}, n1: ${values.n1}, n2: ${values.n2}, n3: ${values.n3}}`, () => {
      let alpha = 1.0;

      cubicInterp(values.n0, values.n1, values.n2, values.n3, alpha).should.eq(values.n2);
    });
  });
});
