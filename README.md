# TPFPereyraHugoR

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Notas de base de datos

Nombre base: portfoliohrp
clave trabajo:""
clave casa:"Destiny22017@"

query datos tabla person

insert into persona (id, contact, country, description, estate, img_banner, img_perfil, last_name, name, text)
					values(1, "pereyrahugor@gmail.com", "Argentina", "Asesor en Tegnologia de Gestión", "Buenos Aires",
							"https://es.dreamstime.com/banner-de-desarrollo-web-concepto-c%C3%B3digo-sitio-programaci%C3%B3n-conjuntos-completos-aplicaci%C3%B3n-seguridad-pruebas-plataforma-image209521403",
                            "https://icon-library.com/icon/icon-ninja-5.html",
                            "Pereyra","Hugo Reynaldo","FullStack Developer Jr");
                            
select * from persona;

insert into experience (id, business, description_position, id_persona, img_business, position, year_in, year_out)
					values(1, "Metalùrgica JMD","Tareas Generales de producción",1,"https://i.ibb.co/h2WBYRm/logo-alfa-final.png","Operaio",'2009-11-25','2015-06-01');
insert into experience (id, business, description_position, id_persona, img_business, position, year_in, year_out)
					values(2, "Metalùrgica JMD","Implementación Normas ISO y Mejora Continua",1,"https://i.ibb.co/h2WBYRm/logo-alfa-final.png","Responsable SGI",'2015-06-01','2022-01-01'); 
insert into experience (id, business, description_position, id_persona, img_business, position, year_in)
					values(3, "Metalùrgica JMD","Seguimiento y Mejora de Procesos",1,"https://i.ibb.co/h2WBYRm/logo-alfa-final.png","Jefe de Calidad y Mejora Continua",'2022-01-01'); 


select * from experience;