-- migrate:up
ALTER TABLE order_itmes RENAME TO order_items;

-- migrate:down
ALTER TABLE order_items RENAME TO order_itmes;

