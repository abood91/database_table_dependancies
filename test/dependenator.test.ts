import { expect, should } from 'chai';
import {topological_sort } from '../src/dependenator';

import JSON_data from '../data/database.json';
import JSON_data_2 from '../data/database2.json';

import Expected_Result from '../data/expected_data.json'
import Expected_Result_2 from '../data/expected_data2.json'

describe('topological_sort', () => {
   it('response should be array', (done) => {
       const result = topological_sort(JSON_data);
       expect(result).to.be.a('array');
       done();
   });

   it('response should be equal test results', (done) => {
      const result = topological_sort(JSON_data);
      expect(result).to.be.eql(Expected_Result);
      done();
  });

  it('response should be array', (done) => {
      const result = topological_sort(JSON_data_2);
      expect(result).to.be.a('array');
      done();
   });

  it('response should be equal test results', (done) => {
      const result = topological_sort(JSON_data_2);
      expect(result).to.be.eql(Expected_Result_2);
      done();
   });

})