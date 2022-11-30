package com.sventas.sventas.controller;
// identificamos la clase como un clontrolador

import java.util.List;

import com.sventas.sventas.model.Cliente;
import com.sventas.sventas.service.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// despues indicamos la raiz del servicion rest de clientes
@RestController
@RequestMapping("/clientes")
public class ClienteController {

    // neceitamos acceder a las operaciones 
    // que creamos el el servicio
    @Autowired
    private ClienteService clienteService;

    // creamos cada auno de los endpoints de nuestro servicio
    // retornara una lista de clientes,
    // ademas indicamos que este metodo es del tipo get
    @GetMapping
    public List<Cliente> encontrarTodos(){
        return clienteService.encontrarTodos();
    }

    // registrat nuevo
    // ademas indicamos que esto lo obtendremos en el cuerpo de la peticion
    // indicamos que el metodo va s er del tipo post
    @PostMapping
    public Cliente crearrr(@RequestBody Cliente cliente){
        return clienteService.crear(cliente);
    }

    @PutMapping
    public Cliente actualizarrr(@RequestBody Cliente cliente){
        return clienteService.actualizar(cliente);
    }


    // indicamos que la variable idCliente la obtendremos en la url de nuestro servicio
    @GetMapping("/{id}")
    public Cliente encontrarPorIddd(@PathVariable("id") Integer idCliente){
        return clienteService.encontrarPorId(idCliente);
    }


    // enlazamos el id con la variable que recibe con patVaribale
    @DeleteMapping("/{id}")
    public void eliminarrr(@PathVariable("id") Integer idCliente){
        clienteService.eliminar(idCliente);
    }


}
