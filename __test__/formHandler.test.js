import { handleSubmit, handleURL, postData } from '../src/client/js/formHandler'
import 'regenerator-runtime/runtime'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ scoreTagData: { score_tag: 'NEU' } }),
  })
);

it("Posts data for valid URL", async () => {
    //test('Return truty value when given Google URL', () => {
        postData('www.google.com')
        expect(fetch).toHaveBeenCalledTimes(1);
});