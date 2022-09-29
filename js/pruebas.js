// Aqui pondras en practica posibles actualizaciones y programas de programacion Competitiva
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/*Use like so*/

async function timeSensativeAction(){ //must be async func
  //do something here
  await sleep(5000) //wait 5 seconds
  //continue on...
}

function suma(){
    var a= 0

    while (a != 100){
        a += 1
       console.log(a)
    }
}
