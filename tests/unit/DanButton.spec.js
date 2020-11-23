import DanButton from "@/components/DanButton.vue"
import { mount } from  "@vue/test-utils"
describe("DanButton", ()=>{
    test("test component button", () => {
        const wrapper = mount(DanButton)
        expect(wrapper.get('button')).toBe(true)
    })

})