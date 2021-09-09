CREATE TABLE users (
	id SERIAL not null,
	name varchar(80),
	password varchar(200),
	created_at timestamp with time zone not null DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id),
	UNIQUE(name)
)