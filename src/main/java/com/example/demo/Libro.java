package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Libro {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String año;
	private String editorial;

	private Libro() {}

	public Libro(String nombre, String año, String editorial) {
		this.nombre = nombre;
		this.año = año;
		this.editorial = editorial;
	}


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Libro libro = (Libro) o;
		return Objects.equals(id, libro.id) &&
			Objects.equals(nombre, libro.nombre) &&
			Objects.equals(año, libro.año) &&
			Objects.equals(editorial, libro.editorial);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, año, editorial);
	}


	@Override
	public String toString() {
		return "Libro{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", año='" + año + '\'' +
			", editorial='" + editorial + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getAño() {
		return año;
	}

	public void setAño(String año) {
		this.año = año;
	}

	public String getEditorial() {
		return editorial;
	}

	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}
}