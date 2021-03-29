import{Persona} from './persona';
console.log("-------------------------------------------------");
console.log('Mi agenda personal');

var persona0 = new Persona('Alicia', 'Martínez Pitarch', 22, '20927274B', '1998-05-27','Amarillo', 'M',[], [], [], 'Muy maja.');
persona0.addDireccion('Calle Juan de Austria', 77, 6, 'A', 12100, 'Castellón', 'Castellón',0);
persona0.addMail('Trabajo', 'amartinez@bbva.com', 0);
persona0.addTelefono('Trabajo', 964062479, 0);

var persona1 = new Persona('Andrés', 'Gómez Coronil', 11, '12345678A', '2010-07-11', 'Azul','H', [],[],[], 'Hermano de Paula.');
persona1.addDireccion('Calle Trinquet', 9, 2, 'A', 46180, 'Benaguacil', 'Valencia',0);
persona1.addMail('Personal', 'andresgc@gmail.com', 0);
persona1.addTelefono('Personal', 963010203, 0);

var persona2 = new Persona('Silvia', 'Pitarch Pons', 59, '12345678C', '1962-02-15', 'Rosa','M', [],[],[], 'Vecina.');
persona2.addDireccion('Calle Emilio Carrere', 3, 6, 'A', 28015, 'Madrid', 'Madrid',0);
persona2.addMail('Personal', 'silviappons@gmail.com', 0);
persona2.addTelefono('Personal', 903010203, 0);

persona0.mostrarPersona();
persona1.mostrarPersona();
persona2.mostrarPersona();

console.log("-------------------------------------------------");
persona0.nuevosDatos("20927274B", "A", 1, 1, "A", 0, "A", "A", 0, "A", "A", 0, "A", 0, 1);
persona1.nuevosDatos("11223344B", "Calle Primer Ministro", 16, 5, "C", 12560, "Benicassim", "Castellón", 0, "Trabajo", "andres@trabajo.com", 0, "Teléfono fijo", 6666666666, 0);
persona2.nuevosDatos("12345678C", "A", 1, 1, "A", 0, "A", "A", 0, "A", "A", 0, "A", 0, 1);

console.log("-------------------------------------------------");
persona0.mostrarPersona();
persona1.mostrarPersona();
persona2.mostrarPersona();