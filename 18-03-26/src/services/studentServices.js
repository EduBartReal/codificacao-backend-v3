//Mock de dados
const students = [
        {id: 1, name: "Édio", years: 35},
        {id: 2, name: "Educas", years: 17},
        {id: 3, name: "Maricas", years: 17},
    ]
class StudentServices {

    getAll() {
        return students
    }
}

export const studentServices = new StudentServices()