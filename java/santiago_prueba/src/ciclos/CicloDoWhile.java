package ciclos;

import javax.swing.JOptionPane;

public class CicloDoWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String clave="pedro";
		String comparacion=""; 
		do {
			 comparacion=JOptionPane.showInputDialog("Introduce la contraseņa");
			 if (!clave.equals(comparacion)) {
				 System.out.println("la contraseņa es incorrecta");
				 
			 }
		} while(!clave.equals(comparacion));
		
		System.out.println("la contraseņa es correcta");
		

	}

}
