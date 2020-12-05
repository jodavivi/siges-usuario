const express = require('express');
const router = express.Router();

const mantUsuarioTxBusiness       = require('../business/MantUsuarioTxBusiness');   
const mantUsuarioRxBusiness       = require('../business/MantUsuarioRxBusiness');   

module.exports = function(){

    router.post('/', mantUsuarioTxBusiness.registrarUsuario); 
    router.put('/:id', mantUsuarioTxBusiness.actualizarUsuario); 
    router.delete('/', mantUsuarioTxBusiness.eliminarUsuario);  
    router.get('/', mantUsuarioRxBusiness.consultarUsuario); 
    
    return router;
}

