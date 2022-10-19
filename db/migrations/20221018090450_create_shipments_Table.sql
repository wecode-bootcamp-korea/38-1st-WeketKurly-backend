-- migrate:up
CREATE TABLE shipments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(300) NOT NULL,
  tracking_number VARCHAR(300) NOT NULL
);

-- migrate:down
DROP TABLE IF EXISTS shipments;

