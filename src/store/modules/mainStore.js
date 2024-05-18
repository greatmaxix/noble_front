import api from '@/api'

const CATEGORIES_URL = '/ww/getCategories'

const mainStore = {
    state: () => ({
        cart: [],
        categories: [],
    }),

    getters: {
        cart: state => state.cart,
        cartItemsById: (state) => (id) => {
            return state.cart.filter(item => item.id == id) 
        } 
    },

    actions: {
        async getCategories({commit}) {
            console.log('getCategories')
            try {
                const response = await api.get(CATEGORIES_URL)
                commit('setCategories', response.data)
              } catch (error) {
                console.error('Error fetching categories:', error)
              }
        }
    },

    mutations: {
        addToCart(state, payload) {
            state.cart.push(payload)
        },
        removeAllFromCart(state, payload) {
            state.cart = state.cart.filter(item => item.id !== payload.id)
        },
        removeSingleFromCart(state, payload) {
            const firstIndex = state.cart.findIndex(item => item.id === payload.id)
            if (firstIndex > -1) {
                state.cart.splice(firstIndex, 1)
            }
        },
        setCategories(state, payload) {
            state.categories = payload
        }
    }
}
export default mainStore;
