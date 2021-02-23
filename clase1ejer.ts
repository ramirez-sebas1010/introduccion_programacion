const a = 4;
const b = 3;
const c = 5;

let potenciaA = Math.pow(a, 2)
///console.log(potenciaA);
let potenciaB = Math.pow(b, 2)
let potenciaC = Math.pow(c, 2)

if (potenciaA + potenciaB === potenciaC){
    console.log('Se cumple')
}else if(potenciaB + potenciaC === potenciaA){
    console.log('se cumple')
}else if (potenciaA + potenciaC === potenciaB){
    console.log('se cumple');
}else{
    console.log('no se cumple')
}

