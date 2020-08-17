const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

const Cliente = require('../models/cliente');

router.use (authMiddleware);

router.get('/', async (req , res) =>
{
    try{
        const clientes = await Cliente.find();
        return res.send({clientes});

    }catch (err){
        return res.status(400).send({error: 'Erro ao tentar recuperar clientes'});
    }
});

router.get('/:id',async (req , res) =>
{
    try{
        const clientes = await (await Cliente.findById(req.params.id)).populate('cliente');
        return res.send({clientes});

    }catch (err){
        return res.status(400).send({error: 'Erro ao tentar recuperar clientes'});
    }
});

router.post('/', async (req , res) =>
{
   try{
const cliente = await Cliente.create(req.body);
return res.status(200).send({success: 'Cliente cadastrado com sucesso!'});

   }catch (err){
       return res.status(400).send({error: 'Erro ao tentar cadastrar cliente'});
   }
});

router.put('/:id',async (req , res) =>
{
    console.log(req);
    try{
        const clientes = await (await Cliente.findByIdAndUpdate(req.params.id,{
            name :req.body.name,
            email: req.body.email,
            cidade:  req.body.cidade,
            sexo: req.body.sexo
        }));
        return res.status(200).send({success: 'Cliente atualizado com sucesso!'});

    }catch (err){
        return res.status(400).send({error: 'Erro ao tentar atualizar cliente'});
    }
});

router.delete('/:id',async (req , res) =>
{
   try{
const cliente = await Cliente.findByIdAndDelete(req.params.id);
return res.status(200).send({sucess: 'Cliente deletado com sucesso!'});

   }catch (err){
       return res.status(400).send({error: 'Erro ao tentar cadastrar cliente'});
   }
});


module.exports = app => app.use('/Clientes', router);