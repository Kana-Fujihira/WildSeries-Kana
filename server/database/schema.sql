create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category (
  id int unsigned auto_increment not null,
 name varchar(255) not null,
  category_id int unsigned not null,
  foreign key(category_id) references category(id)
);


create table program (
  id int unsigned auto_increment not null,
  title varchar(255) not null,
  synopsis text not null,
  poster text not null,
  country text not null,
  year int not null,
  program_id int unsigned not null,
  foreign key(program_id) references program(id)
);