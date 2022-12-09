DROP TABLE IF EXISTS fstodos

CREATE TABLE fstodos (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

INSERT INTO fstodos (description) VALUES ('I need to watch the footbal game');
INSERT INTO fstodos (description) VALUES ('Daniel need to  wash his car');
INSERT INTO fstodos (description) VALUES ('Naomi should paint her room');

