'use strict';

describe('example test', () => {
    it('works', () => {
        expect(false).toBe(true);

    });

    it('parses ES6', () => {
        let fruits = ['apple', 'banana'];

        function moreFruits( myArr ){
            return myArr;
        }

        expect(moreFruits( [...fruits, 'pear'] )).toEqual(['apple', 'banana', 'pear']);
    });

});