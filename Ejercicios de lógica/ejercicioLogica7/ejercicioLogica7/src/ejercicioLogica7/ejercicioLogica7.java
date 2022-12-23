package ejercicioLogica7;

import java.util.Scanner;

public class ejercicioLogica7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s=new Scanner(System.in);
		System.out.println("Ingrese los dias: ");
		String dias = s.nextLine();
		System.out.println("Ingrese las horas");
		int horas=s.nextInt();
		System.out.println("Ingrese los minutos");
		int minutos=s.nextInt();
		int total=0;
		int minutosxhora=60*24;
		switch (dias) {
		case "Lunes": {
			total=4*minutosxhora+(minutosxhora-(11*60));
			total=total-(horas*60);
			total=total-minutos;
			break;
		}
		case "Martes": {
			total=3*minutosxhora+(minutosxhora-(11*60));
			total=total-(horas*60);
			total=total-minutos;
			break;
		}
		case "Miercoles": {
			total=2*minutosxhora+(minutosxhora-(11*60));
			total=total-(horas*60);
			total=total-minutos;
			break;
		}
		case "Jueves": {
			total=1*minutosxhora+(minutosxhora-(11*60));
			total=total-(horas*60);
			total=total-minutos;
			break;
		}
		case "Viernes": {
			total=(minutosxhora-(11*60));
			total=total-(horas*60);
			total=total-minutos;
			break;
		}
		default:
			System.out.println("Datos ingresados no correctos");
		}
		
		System.out.println("Los minutos que faltan para fin de semana: "+total);
	}

}
