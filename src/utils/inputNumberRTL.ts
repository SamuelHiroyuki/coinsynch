export function inputNumberRTL(value: number) {
    // Remove caracteres não-numéricos do valor
    const sanitizedValue = `${value}`.replace(/[^0-9]/g, '');

    // Remove zeros à esquerda do valor
    const noLeftZerosValue = sanitizedValue.replace(/^0+/, '');

    // Se o valor estiver vazio ou só tiver zeros, retorna zero
    if (!noLeftZerosValue) return 0.00;

    // Converte o valor para um número com duas casas decimais
    const floatValue = Number(`${noLeftZerosValue.slice(0, -2)}.${noLeftZerosValue.slice(-2)}`).toFixed(2);

    return Number(floatValue);
}