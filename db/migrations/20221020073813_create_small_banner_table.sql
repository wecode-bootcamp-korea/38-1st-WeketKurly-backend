-- migrate:up
CREATE TABLE small_banner_table (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(1000) NOT NULL
)

-- migrate:down
DROP TABLE small_banner_table