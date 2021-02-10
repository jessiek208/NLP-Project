import { handleSubmit, handleURL, postURL } from '../src/client/js/formHandler'

beforeAll(() => {
    global.Client = jest.genMockFromModule('../webpack.dev.js');
  });

describe("Test that the formHandler only calls the server with valid URLs", () => {
    //global.postURL=jest.fn(() => {});
    //beforeEach(() => postURL.mockClear());

    test('Call the server with a valid URL', () => {
        handleURL('http://www.example.com')
        expect(postURL).toHaveBeenCalled();
    })

    test('Do not call the server with an invalid URL', () => {
        handleURL('I AM NOT A URL')
        expect(handleURL).toBeFalsy;
    })
});