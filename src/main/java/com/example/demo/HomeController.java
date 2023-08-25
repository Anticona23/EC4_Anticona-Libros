package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/bibliotecas/{id}/formacion")
	public @ResponseBody List<Map <String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT detalle.id as ID, autor.nombre as AUTOR, libro.nombre as LIBRO FROM detalle JOIN autor ON detalle.id_autor=autor.id JOIN libro ON detalle.id_libro=libro.id WHERE detalle.id_biblioteca = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

	/**
	 * 
	 * 
	 * 
	 * 
	 */

}