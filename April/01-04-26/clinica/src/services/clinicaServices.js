import pacientes from "../database/data.js";

class ClinicaService {
    getAll() {
        return pacientes
    }

    getById(id) {
        return pacientes.find(p => p.id === parseInt(id))
    }

    create(paciente) {
        const newPaciente = {
            id: pacientes.length > 0 ? pacientes[pacientes.length - 1].id + 1 : 1,
            ...paciente
        }
        pacientes.push(newPaciente)
        return newPaciente
    }

    updatePatch(id, dadosNovos) {
        const index = pacientes.findIndex(p => p.id === parseInt(id))
        if (index === -1) return null
        pacientes[index] = { ...pacientes[index], ...dadosNovos }
        return pacientes[index]
    }

    updatePut(id, newData) {
        const index = pacientes.findIndex(p => p.id === parseInt(id))
        if (index === -1) return null
        const updatedPaciente = { id: parseInt(id), ...newData }
        pacientes[index] = updatedPaciente
        return updatedPaciente
    }

    delete(id) {
        const index = pacientes.findIndex(p => p.id === parseInt(id))
        if (index === -1) return false
        pacientes.splice(index, 1)
        return true
    }
}

export const clinicaServices = new ClinicaService()