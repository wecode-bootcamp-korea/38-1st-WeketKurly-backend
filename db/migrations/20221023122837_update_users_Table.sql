-- migrate:up
ALTER TABLE users ADD COLUMN point INT NULL DEFAULT 100000 AFTER created_at;

-- migrate:down
ALTER TABLE users DROP point;
