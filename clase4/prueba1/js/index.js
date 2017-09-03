function FabricaAutos (modeloAuto, annoAuto, colorAuto, llantasAuto){
    this.modelo = modeloAuto
    this.anno = annoAuto
    this.color = colorAuto
    this.eq = {
        llantas: llantasAuto,
        vidriosElectricos: true
    }
    this.sonar= function (sonido){
        console.log("este auto hace.....", sonido)
    }
}