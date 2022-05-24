package com.backroom.testMaven.testMaven;
import org.junit.jupiter.api.*;
public class AppTest 
{
	@Test
    public void saludoTest() {
		App saludo=new App();
		Assertions.assertEquals("Hola Mundo!", saludo.saludoTest());
	}
	@Test
	public void saludoStaticTest() {
		Assertions.assertEquals("Hola Mundo!", App.saludoStaticTest());
	}
}
