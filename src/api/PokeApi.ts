import { api } from '../config/axiosConfig'

export const PokeApi = {
    getPokemonById: async function (id: number) {
        return api.get(`/pokemon/${id}`)
    },
    getAllPokemons: async function () {
        return api.get('/pokemon?limit=10000')
    }
}