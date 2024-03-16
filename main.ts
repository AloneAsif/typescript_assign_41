function makeGreat(magician:string[]){
    for (let magic of magician){
        console.log(`Great magicion: ${magic}`)
    }
}

let magicians:string[] = ['Harry Houdini','Criss Angel ','Penn Jillette'];


makeGreat(magicians)

function showMagicians(magicians: string[]) {

    for (const magician of magicians) {
        console.log(magician);
    }
}

showMagicians(magicians);
