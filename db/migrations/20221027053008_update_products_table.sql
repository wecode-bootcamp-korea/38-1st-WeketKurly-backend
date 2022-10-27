-- migrate:up
ALTER TABLE products MODIFY COLUMN stock INT NOT NULL DEFAULT 999 AFTER detail_image_url;

-- migrate:down
ALTER TABLE products DROP COLUMN stock;
