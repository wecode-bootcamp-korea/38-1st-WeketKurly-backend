-- migrate:up
CREATE TABLE order_itmes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  total_price DECIMAL NOT NULL,
  order_item_status_id INT NOT NULL,
  shipment_id INT NOT NULL,
  FOREIGN KEY (shipment_id) REFERENCES shipments (id),
  FOREIGN KEY (order_item_status_id) REFERENCES order_item_status (id),
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (order_id) REFERENCES orders (id)
);

-- migrate:down
DROP TABLE IF EXISTS order_itmes;
