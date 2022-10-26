-- migrate:up
ALTER TABLE products ADD COLUMN stock INT NOT NULL Default 999 AFTER created_at;

-- migrate:down
ALTER TABLE products DROP COLUMN stock;

