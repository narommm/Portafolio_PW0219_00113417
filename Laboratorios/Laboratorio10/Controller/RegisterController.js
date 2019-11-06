const Register = require('../models/Register')

const insert = (req, res)=>{
    let register = new Register(
        req.body);
    register.save((err)=>{
        if(err) return res.status(500).json({
            message: 'Algo salio mal al tratar'
        })
        res.status(200).json({
            message: 'Insercion a Register exitosa'
        })
    })
};

const update = (req, res)=>{
    let register = req.body
    if(!register._id){
        return res.status(400).json({
            message: 'El campo id es obligatorio'
        })
    }
    Register.update({_id: register._id},register)
    .then(value =>{
        res.status(200).json({
            message: 'Operacion exitosa'
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Algo salio mal en la operacion modificar'
        })
    })
}

const deleteById = (req, res)=>{
    let register = req.body
    if(!register._id){
        return res.status(400).json({
            message: 'EL campo id es obligatorio'
        })
    }
    Register.deleteOne({_id:register._id})
    .then(value=>{
        res,status(200).json({
            message: 'Operacion exitosa al eliminar'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: 'Algo salio mal al delete'
        })
    })
}


const getAll = (req,res) => {
    Register.find((err,register)=>{
        if(err) return res.status (500).json({
            message: 'Algo salio mal al seleccionar todos'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else{
            res.status(404).json({
                message:'NO hay  ningun registro'
            })
        }
    })
}

const getOneById = (req, res)=>{
    let id = req.params._id
    Register.findById(id, (err, register) => {
        if(err) return res.status (500).json({
            message: 'Algo salio mal al seleccionar todos'
        })
        if(register){
            res.status(200).json(register)
        }else{
            res.status(404).json({
                message: 'NO se encontro el registro solicitado'
            })
        }
    })
}

module.exports ={
    insert,
    update,
    deleteById,
    getAll,
    getOneById
}