import {  DanList } from "@/views/DanList"
import { mount } from "@vue/test-utils"
import { getUsers } from "@/services/DanServices.js"
import flushPromises from "flush-promises"

jest.mock('@/services/DanServices')

describe('DanList', () => {
  it('Calls getMessage and displays message', async () => {
     // mock the API call
     getUsers.mockResolvedValueOnce(()=> Promise.resolve(res))
     const wrapper = mount(DanList)
     // wait for promise to resolve
     await flushPromises()
     // check that call happened once
     expect(getUsers).toHaveBeenCalledTimes(1)

     // check that component displays message
  })

  it('Displays an error when getMessage call fails', async () => {
     // mock the failed API call
     const wrapper = mount(DanList)
     // wait for promise to resolve
     // check that call happened once
     // check that component displays error
  })
})