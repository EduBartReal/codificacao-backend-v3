import sabores from "../database/data";

class pizzaServices {
    getPizzas() {
        return sabores
    }

    getById(id) {
        return sabores.find(s => s.id === parseInt(id))
    }
}

export const pizzasServices = new pizzaServices()