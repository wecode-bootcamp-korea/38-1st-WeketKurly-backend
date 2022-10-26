-- migrate:up
ALTER TABLE order_items
DROP FOREIGN KEY order_items_ibfk_2;
ALTER TABLE order_items
CHANGE COLUMN order_item_status_id order_item_status_id INT NOT NULL DEFAULT 2 ;
ALTER TABLE order_items 
ADD CONSTRAINT order_items_ibfk_2
  FOREIGN KEY (order_item_status_id)
  REFERENCES order_item_status (id);
ALTER TABLE orders
DROP FOREIGN KEY orders_ibfk_1;
ALTER TABLE orders
CHANGE COLUMN order_status_id order_status_id INT NOT NULL DEFAULT 1 ;
ALTER TABLE orders 
ADD CONSTRAINT orders_ibfk_1
  FOREIGN KEY (order_status_id)
  REFERENCES order_status (id);

-- migrate:down

