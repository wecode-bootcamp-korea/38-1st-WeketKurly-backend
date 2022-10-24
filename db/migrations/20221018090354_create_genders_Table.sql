-- migrate:up
CREATE TABLE genders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  gender VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE IF EXISTS genders;
