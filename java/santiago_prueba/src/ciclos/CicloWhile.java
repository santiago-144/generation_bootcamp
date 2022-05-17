package ciclos;

import javax.swing.JOptionPane;

public class CicloWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		int condicion=0;
		while (condicion <5) {
			System.out.println("hola");
			
			condicion++;
		}*/

		String clave="pedro";
		String comparacion="";
		 while (clave.equals(comparacion)==false){
			 
			 comparacion=JOptionPane.showInputDialog("Introduce la contraseña");
			 if (!clave.equals(comparacion)) {
				 System.out.println("la contraseña es incorrecta");
				 
			 }
			 
		 }
		System.out.println("la contraseña es correcta");
	}

}
