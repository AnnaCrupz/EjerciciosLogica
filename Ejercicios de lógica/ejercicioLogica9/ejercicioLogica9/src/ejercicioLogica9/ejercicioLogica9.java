package ejercicioLogica9;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ejercicioLogica9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner s=new Scanner(System.in);
		Map<String,String> map=new HashMap<String,String>();
		map.put("gato", "cat");
		map.put("Hola", "Hi");
		map.put("perro", "dog");
		map.put("Alarma", "alarm");
		map.put("aceptar", "accept");
		map.put("Preguntar", "ask");
		map.put("quejarse", "complain");
		map.put("contar", "count");
		map.put("banana", "platano");
		map.put("cancelar", "cancel");
		
		
		System.out.println("Ingrese una llave");
		String llave=s.nextLine();
	
			
	
		if (map.get(llave)==null) {
			System.out.println("No se encontró");
		} else {
			System.out.println(map.get(llave));
		}
	}

}
