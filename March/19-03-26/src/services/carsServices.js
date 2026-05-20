//mock de dados simples (tema: carros)

const cars = [
    {id: 1, name: "Ferrari", price: 2.5},
    {id: 2, name: "Fiat", price: 100.000},
    {id: 3, name: "Honda", price: 50.000},
]

class CarsServices {
    getAll() {
        return cars
    }
}

export const carsServices = new CarsServices()