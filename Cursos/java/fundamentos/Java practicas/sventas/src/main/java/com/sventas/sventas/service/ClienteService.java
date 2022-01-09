package com.sventas.sventas.service;
// esta es la implementacion de la interfaz

import java.util.List;
import java.util.Optional;

import com.sventas.sventas.model.Cliente;

import com.sventas.sventas.repository.IClienteRepositori;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class ClienteService implements IClienteService{
    // para tener acceso a los datos necesitamos tener definida
    // una variable del tipo ClienteRepositori la cual nos permite realizar las 
    // operaciones que necesitamos para el acceso a los datos

    // significa que siempre estara disponible en nuestro service
    @Autowired
    private IClienteRepositori clienteRepo;

    @Override
    public Cliente crear(Cliente cliente) {
        return clienteRepo.save(cliente);
    }

    @Override
    public Cliente actualizar(Cliente cliente) {
        return clienteRepo.save(cliente);
    }

    @Override
    public Cliente encontrarPorId(Integer id) {
        
        Optional<Cliente> clienteOpcional = clienteRepo.findById(id);
        return clienteOpcional.orElse(null);
    }

    @Override
    public List<Cliente> encontrarTodos() {
        return clienteRepo.findAll();
    }

    @Override
    public void eliminar(Integer id) {
        clienteRepo.deleteById(id);
        
    }
    
}
