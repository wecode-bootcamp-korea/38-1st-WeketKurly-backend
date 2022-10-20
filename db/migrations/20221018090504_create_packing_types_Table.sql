-- migrate:up
CREATE TABLE packing_types (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  packing_types VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE IF EXISTS packing_types;
