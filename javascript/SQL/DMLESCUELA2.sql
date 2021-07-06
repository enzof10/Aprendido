

USE ESCUELA2;
DELETE FROM ESCUELA2.CARRERA;

-- PRIMERO CREO LA TABLA CARRERA PARA QUE ALUMNO PUEDA HACER REFERENCIA A ESTA
-- INSERT DE DOS FORMAS DISTINTAS
-- ESTA NO TOMA EL AUTO_INCREMENT, NO SE REQUIERE PONER NOMBRE DE COLUMNAS
INSERT INTO ESCUELA2.CARRERA VALUES ( 1, 'DESARROLLO DE SOFWARE', 3);
INSERT INTO ESCUELA2.CARRERA VALUES ( 2,'PROFESORADO DE MATEMATICAS', 3);
-- ESTA TOMA EL AUTO_INCREMENT, REQUIERE NOMBRE DE COUMNAS
INSERT INTO ESCUELA2.CARRERA (CARR_NAME, CARR_DURACION) VALUES ('PROFESORADO DE HISTORIA', 3);
INSERT INTO ESCUELA2.CARRERA (CARR_NAME, CARR_DURACION) VALUES ('PROFESOR INCIAL', 3);
INSERT INTO ESCUELA2.CARRERA (CARR_NAME, CARR_DURACION) VALUES ('EDUCACION FISICA', 4);

 

INSERT INTO ESCUELA2.ALUMNO VALUES(1, 'CIRO', 20, 1,'MASCULINO', 1);
INSERT INTO ESCUELA2.ALUMNO VALUES(2, 'MAURO', 22, 2,'MASCULINO', 2);
INSERT INTO ESCUELA2.ALUMNO VALUES(3, 'SOL', 23, 2,'FEMENINO', 3);
INSERT INTO ESCUELA2.ALUMNO VALUES(4, 'ENZO', 19, 3,'MASCULINO', 4);
INSERT INTO ESCUELA2.ALUMNO VALUES(5, 'LAURA', 22, 2,'FEMENINO', 4);

INSERT INTO ESCUELA2.MATERIA VALUES (1, 'MATEMATICA', 10);
INSERT INTO ESCUELA2.MATERIA VALUES (2, 'INTRODUCCION A LA PROGRAMACION', 10);
INSERT INTO ESCUELA2.MATERIA VALUES (3, 'PRACTICAS PROFECIONALIZANTES', 10);
INSERT INTO ESCUELA2.MATERIA VALUES (4, 'SISTEMAS OPERATIVOS', 10);
INSERT INTO ESCUELA2.MATERIA VALUES (5, 'INGLES', 10);


-- MODIFICO EL TIPO DE DATO PARA QUE SEA SOLO HORA
USE ESCUELA2;
ALTER TABLE PROFESOR MODIFY COLUMN PRO_HORARIO TIME;
-- INSERT USANDO REFERENCIA A ESCUELA2 EN UN DELETE Y YA QUEDA POSICIONADO EN LA BASE DE DATOS
DELETE FROM ESCUELA2.PROFESOR;
INSERT INTO PROFESOR (PRO_ID, PRO_NAME, PRO_DIRECCION, PRO_TELEFONO, PRO_HORARIO) VALUES (1, 'FEDE', 'BOLIVAR', 231412131, NOW());
INSERT INTO PROFESOR  VALUES (2,'LUCHO', 'CALLE FALSA 1234', 231419821, '7:00' );
-- INSERT USANDO "UNA SOLA VEZ" LA REFERENCIA ESCUELA2 EN USE
USE ESCUELA2;
INSERT INTO PROFESOR VALUES (3, 'JAVIER', 'CALLE VERDADERA 12', 231412131, '6:00');
-- INSERT USANDO LA REFERENCIA A ESCUELA2 QUE USE EN EL PRIMER INSERT 
INSERT INTO ESCUELA2.PROFESOR VALUES (4, 'DANIEL', 'PHYTON', 2314102101, '6:00');
INSERT INTO PROFESOR VALUES (5,'RAMIRO', 'BOLIVA', 23141231211, '6:00');

DELETE FROM ESCUELA2.ALUMNO_PROFESOR;

INSERT INTO ESCUELA2.ALUMNO_PROFESOR VALUES(1, 1, 1);
INSERT INTO ALUMNO_PROFESOR VALUES(2, 2, 1);
INSERT INTO ALUMNO_PROFESOR VALUES(3, 3, 3);
INSERT INTO ALUMNO_PROFESOR VALUES(4, 1, 4);
INSERT INTO ALUMNO_PROFESOR VALUES(5, 4, 2);

INSERT INTO ESCUELA2.MATERIA_ALUMNO (MA_ID, MA_ALUMNO_ID, MA_MATERIA_ID) VALUES (1, 1, 1);
INSERT INTO MATERIA_ALUMNO VALUES (2, 2, 1);
INSERT INTO MATERIA_ALUMNO VALUES (3, 2, 4);
INSERT INTO MATERIA_ALUMNO VALUES (4, 3, 2);
INSERT INTO MATERIA_ALUMNO VALUES (5, 1, 2);

INSERT INTO ESCUELA2.MATERIA_PROFESOR (MP_ID, MP_MATERIA_ID, MP_PROFESOR_ID) VALUES (1, 1, 1);
INSERT INTO MATERIA_PROFESOR VALUES (3, 2, 4);
INSERT INTO MATERIA_PROFESOR VALUES (4, 3, 2);
INSERT INTO MATERIA_PROFESOR VALUES (5, 1, 2);
INSERT INTO MATERIA_PROFESOR VALUES (2, 2, 1);

SELECT * FROM ESCUELA2.MATERIA_PROFESOR;
DELETE FROM ESCUELA2.MATERIA_PROFESOR;

SELECT * FROM ESCUELA2.ALUMNO_PROFESOR;
SELECT * FROM ESCUELA2.ALUMNO;
SELECT * FROM ESCUELA2.PROFESOR;


SELECT * FROM ESCUELA2.PROFESOR;
DELETE FROM ESCUELA2.PROFESOR;
