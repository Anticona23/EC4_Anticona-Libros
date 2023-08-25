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

		this.repositoryI.save(new Libro("La Cas Verde", "186", ".."));
		this.repositoryI.save(new Libro("La guerra sin fin","1865",".."));
		this.repositoryI.save(new Libro("Paco Yunque","1895",".."));
		this.repositoryI.save(new Libro("Los heraldos negros","1895",".."));
		this.repositoryI.save(new Libro("Escalas","1895",".."));
		this.repositoryI.save(new Libro("Poemas humanos","1895",".."));
		this.repositoryI.save(new Libro("La montallña azul","Percusión","."));

		this.repositoryM.save(new Autor("Maria Arguedas"));
		this.repositoryM.save(new Autor("Ricardo Palma"));
		

		Libro iCachorros = new Libro("Los Cachorros","1985",".");
		this.repositoryI.save(iCachorros);
		
		Libro iTrilce = new Libro("Trilce","1985", ".");
		this.repositoryI.save(iTrilce);

		Autor mLlosa = new Autor("Mario Vargas Llosa");
		this.repositoryM.save(mLlosa);

		Autor mVallejo = new Autor("Cesar vallejo");
		this.repositoryM.save(mVallejo);

		Biblioteca bIdat = new Biblioteca("Biblioteca Idat");
		this.repositoryB.save(bIdat);

		this.repositoryN.save(new Detalle(bIdat, mLlosa, iCachorros));
		this.repositoryN.save(new Detalle(bIdat, mVallejo, iTrilce));
	}
}