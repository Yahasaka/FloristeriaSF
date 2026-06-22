

drop table if exists usuarios;
drop table if exists productos;
drop table if exists pedidos;
drop table if exists favoritos;
drop table if exists direcciones;

create table usuarios (
  id serial primary key,
  nombre varchar(100) not null,
  apellido varchar(100) not null,
  correo varchar(255) unique not null,
  contrasena varchar(255) not null,
  rol varchar(20) default 'cliente',
  telefono varchar(20),
  created_at timestamp default current_timestamp
);

create table productos (
	id serial primary key,
	nombre varchar(255) not null,
	description text,
	precio integer not null,
	categoria varchar(100) not null,
	subcategoria varchar(100) not null,
	flores varchar(100),
	disponible boolean default true,
	stock integer default 0,
	imagen varchar(500),
	created_at timestamp default current_timestamp	
);

create table pedidos (
	id serial primary key,
	usuario_id integer references usuarios(id),
	producto_nombre varchar(255) not null,
	cliente_nombre varchar(255) not null,
	canal varchar(50) not null,
	precio integer not null,
	estado varchar(50) default 'Entregado',
	notas text,
	created_at timestamp default current_timestamp
);

create table favoritos (
	id serial primary key,
	usuario_id integer references usuarios(id) on delete cascade,
	producto_id integer references productos(id) on delete cascade,
	created_at timestamp default current_timestamp,
	unique (usuario_id, producto_id)
);

create table direcciones (
	id serial primary key,
	usuario_id integer references usuarios(id) on delete cascade,
	provincia varchar(100),
	canton varchar(100),
	distrito varchar(100),
	senas text,
	created_at timestamp default current_timestamp
);


select * from usuarios
