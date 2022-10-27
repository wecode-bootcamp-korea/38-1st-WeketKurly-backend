-- migrate:up
CREATE TABLE special_price (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    discount INT NOT NULL,
    products_id INT NOT NULL,
    FOREIGN KEY (products_id) REFERENCES products (id)
)

-- migrate:down
DROP TABLE special_price

