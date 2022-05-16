package santiago_prueba;

public class conversionDatos {
	
	public static void main(String[] args) {
	byte numeroByte=10;
	short numeroShort=numeroByte;
	int numeroInt=numeroShort;
	long numeroLong=numeroInt;
	//casteo o parseo
	int otroInt= (int)numeroLong;
	short otroShort=(short)otroInt;
	byte otroByte=(byte)otroShort;
	System.out.println(otroInt);
	System.out.print(otroShort);
	System.out.println(otroByte);
	
	}

}
