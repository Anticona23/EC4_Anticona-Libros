package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Detalle {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_biblioteca")
    private Biblioteca biblioteca;

    @ManyToOne()
    @JoinColumn(name = "id_autor")
    private Autor autor;

    @ManyToOne()
    @JoinColumn(name = "id_libro")
    private Libro libro;

    public Detalle() {}

    public Detalle(Biblioteca biblioteca, Autor autor, Libro libro) {
        this.biblioteca = biblioteca;
        this.autor = autor;
        this.libro = libro;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Biblioteca getBiblioteca() {
		return biblioteca;
	}

	public void setBiblioteca(Biblioteca biblioteca) {
		this.biblioteca = biblioteca;
	}

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
	}

	public Libro getLibro() {
		return libro;
	}

	public void setLibro(Libro libro) {
		this.libro = libro;
	}
}
