-- migrate:up
CREATE TABLE big_banner_table (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(1000) NOT NULL
)

-- migrate:down
DROP TABLE big_banner_table
