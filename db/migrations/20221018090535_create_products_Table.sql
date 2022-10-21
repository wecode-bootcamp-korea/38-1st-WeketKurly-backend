-- migrate:up
CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  sub_category_id INT NOT NULL,
  name VARCHAR(300) NOT NULL,
  thumnail_image_url VARCHAR(1000) NOT NULL,
  short_description VARCHAR(100) NOT NULL,
  contactant VARCHAR(50) NOT NULL,
  packing_type_id INT NOT NULL,
  weight VARCHAR(50) NOT NULL,
  origin VARCHAR(50) NOT NULL,
  allerge VARCHAR(1000) NULL,
  expiration_date VARCHAR(1000) NOT NULL,
  price DECIMAL NOT NULL,
  detail_image_url VARCHAR(1000) NOT NULL,
  quantity INT DEFAULT 0,
  stock INT DEFAULT 999,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (sub_category_id) REFERENCES sub_categories (id),
  FOREIGN KEY (packing_type_id) REFERENCES packing_types (id)
);

-- migrate:down
DROP TABLE IF EXISTS products;
