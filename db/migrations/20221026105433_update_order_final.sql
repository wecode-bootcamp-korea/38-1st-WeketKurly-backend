-- migrate:up
DELETE FROM order_item_status WHERE (id = 3);
DELETE FROM order_status WHERE (id = 3);

-- migrate:down

