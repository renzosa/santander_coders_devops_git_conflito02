function greet(name) {
    return `Hello, ${name}!`;
}

function farewell(name) {
    return `Goodbye, ${name}!`; // Mantém o 'Goodbye'
}

module.exports = { farewell }; // Atualizado para exportar apenas a função farewell
