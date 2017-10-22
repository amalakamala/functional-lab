function getDependencies(tree) {
    if(tree === undefined){
        return
    }
    getDependencies(tree.izquierdo);
    getDependencies(tree.derecho);
    return tree.version
    
  // LA SOLUCIóN VA AQUí
  // Nota: sea libre de agregar argumentos adicionales
  // a esta función para usarla con llamadas recursivas.
  // o no! Hay muchas maneras de hacer funcionar la recursividad.
}

module.exports = getDependencies;