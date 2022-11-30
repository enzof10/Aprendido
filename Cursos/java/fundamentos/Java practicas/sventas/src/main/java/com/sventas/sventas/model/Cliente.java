package com.sventas.sventas.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


// indicamos que va a ser una entidad y no una clase plana

@Entity
@Table(name = "CLIENTE")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCliInteger;

    @Column(name = "NOMBRES", nullable = false, length = 70)
    private String nombre;

    @Column(name = "APELLIDOS", nullable = false, length = 150)
    private String apellidos;

    @Column(name = "DIRECCION", nullable = true, length = 150)
    private String direccion;

    @Column(name = "TELEFONO", nullable = true, length = 150)
    private String telefono;

    @Column(name = "EMAIL", nullable = true, length = 50)
    private String email;

    public Integer getIdCliInteger() {
        return idCliInteger;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
