CREATE TABLE users (
	id SERIAL not null,
	name varchar(80),
	password varchar(200),
	created_at timestamp with time zone not null DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id),
	UNIQUE(name)
)

CREATE TABLE comments (
	id SERIAL not null,
	id_user integer not NULL,
	comment text not null,
	image_url text not null,
	created_at timestamp with time zone not null DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id),
	CONSTRAINT fk_comments_users FOREIGN KEY(id_user) REFERENCES users(id)
)