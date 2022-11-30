package com.sventas.sventas.repository;

import com.sventas.sventas.model.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;

// primero el objeto sobre el cual trabajaremos y segundo el tipo de indentificador, id
public interface  IClienteRepositori extends JpaRepository<Cliente, Integer>{
    
}
