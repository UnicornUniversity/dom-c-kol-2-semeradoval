//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"

/**
 * Převod čísla z desítkové soustavy na dvojkovou podle JSP
 * Nepoužívá toString, parseInt ani charCodeAt
 * @param {string} inputNumber číslo v desítkové soustavě jako řetězec
 * @param {number} inputNumberSystem povolená vstupní soustava (10)
 * @param {number} outputNumberSystem povolená výstupní soustava (2)
 * @returns {string} číslo převedené do dvojkové soustavy
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    // 2.1 Vytvoření "souboru" pro data výstupu
    const outputDataFile = [];

    // 2.2 Zkontroluj funkci: vstup musí být číslo
    const digitMap = { '0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9 };
    let number = 0;
    for (let i = 0; i < inputNumber.length; i++) {
        const digit = inputNumber[i];
        if (!(digit in digitMap)) {
            return 'error'; // 3.B.1
        }
        number = number * 10 + digitMap[digit];
    }

    // 3.A If číslo = 0
    if (number === 0) {
        return '0'; // 3.A.1
    }

    // 3.C Else If číslo ≠ 0
    while (number > 0) { // 3.C.2.2 Iterace
        const remainder = number % 2; // 3.C.2.2.1
        outputDataFile.push(remainder); // 3.C.2.2.2 Zápis do "souboru"
        number = (number - remainder) / 2; // 3.C.2.2.3 Podíl pro další iteraci
    }

    // 3.C.2.3 Čtení z "souboru" zprava doleva
    let outputNumber = '';
    for (let i = outputDataFile.length - 1; i >= 0; i--) {
        outputNumber += outputDataFile[i]; // 3.C.2.4 Předej přečtené číslo do výstupu
    }

    // 4.2 Smazání souboru pro data výstupu
    outputDataFile.length = 0;

    return outputNumber; // 4.1 Výstup
}

/**
 * Povolené vstupní soustavy
 */
export function permittedInputSystems() {
    return [10];
}

/**
 * Povolené výstupní soustavy
 */
export function permittedOutputSystems() {
    return [2];
}
//console.log(main("10"))
