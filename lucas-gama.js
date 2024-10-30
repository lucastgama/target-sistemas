/* Atividade 1 */
console.log(hasFibonacci(50))
function hasFibonacci(number) {
    const fibonacci = [0, 1];

    for (let i = fibonacci.length; ; i++) {
        let valor = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(valor);
        
        if (valor === number) {
            return `O número ${number} existe na sequência de Fibonacci.`;
        } else if (valor > number) {
            return `O número ${number} não existe na sequência de Fibonacci.`;
        }
    }
}

/*Atividade 2 */
console.log(hasLetterA('teste'))
console.log(hasLetterA('Agora vai'))
function hasLetterA(word){
        let characters = word.split("");
        let letterA = characters.filter(letter => letter === 'a' || letter === 'A');
        let qty = letterA.length;
    
        if (qty > 0) {
            return `A letra 'a' aparece ${qty} vezes na string.`;
        } else {
            return "A letra 'a' não aparece na string.";
        }
}

/*Atividade 3 */
soma()
function soma(){
    let INDICE = 12, SOMA = 0;

    for (let K = 1; K < INDICE; K++) {
        SOMA += K + 1;
    }
    console.log(`SOMA: ${SOMA}`);
}