-- migrate:up
CREATE TABLE order_item_status (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  status VARCHAR(300) NOT NULL
);

-- migrate:down
DROP TABLE IF EXISTS order_item_status;
