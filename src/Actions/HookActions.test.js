import moxios from "moxios";
import {getSecretWord} from "./HookActions";

describe('moxios tests',()=>{
  beforeEach(()=>{
    moxios.install()
  })
  afterEach(()=>{
    moxios.uninstall()
  })

  test('calls the setSecretWord function on axios response', async ()=>{
    const secretWord = 'party'
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status:200,
        response:secretWord,
      })
    })

    const mockSetSecretWord =jest.fn()
    await getSecretWord(mockSetSecretWord)

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord)

  })
})