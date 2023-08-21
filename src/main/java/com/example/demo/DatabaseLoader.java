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

		this.repositoryI.save(new Libro("Cien años de soledad", "1967", "Editorial Agilar"));
		this.repositoryI.save(new Libro("Harry Potter","1997","Editorial Santilla"));
		this.repositoryI.save(new Libro("Romeo y Julieta","1597","Editorial Alba"));


		this.repositoryM.save(new Autor("Mario Vargas Llosa"));


		Autor mHarper = new Autor("Harper Lee");
		this.repositoryM.save(mHarper);

		Libro iPaz = new Libro("Gerra y Paz","1869","Editorial Santilla");
		this.repositoryI.save(iPaz);

		Autor mTolkien = new Autor("Hernest Tolkine");
		this.repositoryM.save(mTolkien);

		Libro iRebelion = new Libro("Rebelion de Atlas","1957", "Editorial Markes");
		this.repositoryI.save(iRebelion);

		Biblioteca bIdat = new Biblioteca("Biblioteca Idat");
		this.repositoryB.save(bIdat);

		this.repositoryN.save(new Detalle(bIdat, mHarper, iPaz));
		this.repositoryN.save(new Detalle(bIdat, mTolkien, iRebelion));


	}
}