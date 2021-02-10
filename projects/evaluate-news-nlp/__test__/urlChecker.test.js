import { TRUE } from 'node-sass';
import { checkURL } from '../src/client/js/urlChecker'

describe("Test URL Checker for valid URL", () => {
    test('Return truty value when given Google URL', () => {
           expect(checkURL('www.google.com')).toBeTruthy;
})});

describe("Test URL Checker for invalid URL", () => {
    test('Return falsy when given mistyped Google URL', () => {
           expect(checkURL('wwww.google.com')).toBeFalsy;
})});