package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final LibroRepository repositoryI;
	private final AutorRepository repositoryM;
	private final BibliotecaRepository repositoryB;
	private final DetalleRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		LibroRepository repositoryI,
		AutorRepository repositoryM,
		BibliotecaRepository repositoryB,
		DetalleRepository repositoryN
		) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Libro("Linea Blanca", "blanco", "Mabe"));
		this.repositoryI.save(new Libro("Computo","Gris","Asus"));
		this.repositoryI.save(new Libro("Zapatillas","Negro","Adidas"));

		Libro iVoz = new Libro("Perfume","Viento",".");
		this.repositoryI.save(iVoz);

		Libro iGuitarraElectrica = new Libro("Guitarra Electrica","Electrónico", ".");
		this.repositoryI.save(iGuitarraElectrica);

		this.repositoryI.save(new Libro("Batería","Percusión","."));

		this.repositoryM.save(new Autor("Lavadora"));

		Autor mLaptop = new Autor("Laptop");
		this.repositoryM.save(mLaptop);

		Autor mCocina = new Autor("Cocina");
		this.repositoryM.save(mCocina);

		Biblioteca bQueen = new Biblioteca("Queen");
		this.repositoryB.save(bQueen);

		this.repositoryN.save(new Detalle(bQueen, mLaptop, iVoz));
		this.repositoryN.save(new Detalle(bQueen, mCocina, iGuitarraElectrica));


	}
}