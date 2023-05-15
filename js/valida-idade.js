export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date (campo.value)
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuario precisa ser maior de idade')
    }
} 

function validaIdade(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDay())

    return dataAtual >= dataMais18
}
