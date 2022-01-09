package com.sventas.sventas.service;

import com.sventas.sventas.model.Cliente;

import java.util.List;


public interface IClienteService {
    // crear, que devuelve un objeto del tipo clienten y devuelve un objeto del tipo cliente
    Cliente crear(Cliente cliente);

    Cliente actualizar(Cliente cliente);

    Cliente encontrarPorId(Integer id);

    // devuelve una lista de cliente
    List<Cliente> encontrarTodos();

    // el metodo eliminar que no devuelve nada
    void eliminar(Integer id);

}
