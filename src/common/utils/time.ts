export function tempoParaSegundos (tempo:string){
    const [horas = '0', minuto='0', segundos='0'] = 
    tempo.split(":");

    const horasEmSegundos = Number(horas) *3600;
    const minutosEmSegundos = Number(minuto) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}