package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//List - ArrayList
		List<String> miArray= new ArrayList<String>();
		System.out.println("\t---ArrayList");
		miArray.add("pedro");
		miArray.add("santiago");
		miArray.add("ghadieel");
		miArray.add(1,"patricia");
		
		System.out.println(miArray);
		System.out.println(miArray.size());
		boolean elemento=miArray.remove("pedro");
		String elemento2=miArray.remove(1);
		System.out.println(elemento);
		System.out.println(elemento2);
		System.out.println(miArray);
		
		Colecciones.imprimir(miArray);
		/*
		 * datos compuestos
		 * int=>Integer
		 * boolean=>Boolean
		 * long=>Long
		 * double=>Double
		 */
		
		int numero=10;
		Integer numero2=10;
		System.out.println(numero2.getClass().getSimpleName());
		
		List<Integer> miArray2=new ArrayList<Integer>();
		miArray2.add(3);
		miArray2.add(123);
		miArray2.add(3544);
		
		System.out.println(miArray2);
		
		//set
		//no acepta elementos duplicados
		//no  los guarda en un orden en espesifico
		//coleccion que funiona mas rapido
		System.out.println("\t ---set HashSet");
		Set<String> miSet=new HashSet<String>();
		miSet.add("martha");
		miSet.add("lupe");
		miSet.add("karla");
		miSet.add("gabriel");
		miSet.remove("martha");
		
		System.out.println(miSet);
		Colecciones.imprimir(miSet);
		System.out.println(miSet.contains("martha"));
		//map ---HashMap
		//<key/llave,value/valor>
		System.out.println("\t ---Map -- HashMap");
		
		Map<String, Integer> miMap=new HashMap<String, Integer>();
		miMap.put("Edad", 30);
		miMap.put("valor2", 25);
		System.out.println(miMap);
		System.out.println(miMap.values());
		System.out.println(miMap.keySet());
		System.out.println(miMap.get("Edad"));
		for(String llave : miMap.keySet()) {
			System.out.println(llave + ":" + miMap.get(llave));
			
		}
	}
public static void imprimir(Collection coleccion ) {
for(Object elemento:coleccion) {
	System.out.println("Elemento: "+ elemento);
}
	
}
}
