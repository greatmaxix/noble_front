import { createStore } from 'vuex'
import mainStore from "@/store/modules/mainStore";

const store = createStore({
    modules: {
        mainStore
    }
})

export default store;