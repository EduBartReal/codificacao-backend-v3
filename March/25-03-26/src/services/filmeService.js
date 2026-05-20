import filmes from '../config/db.js'

class filmesServices {

    getFilmes() {
        return filmes
    }

    getById(id) {
        return filmes.find(filme => filme.id === parseInt(id))
    }
}

export const filmeService = new filmesServices