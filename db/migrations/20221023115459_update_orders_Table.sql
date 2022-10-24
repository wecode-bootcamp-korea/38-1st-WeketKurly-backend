-- migrate:up
ALTER TABLE orders DROP COLUMN order_number;

-- migrate:down
ALTER TABLE orders ADD COLUMN order_number INT NOT NULL AFTER ordered_at;
