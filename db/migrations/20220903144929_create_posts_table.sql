-- migrate:up
CREATE TABLE posts (
  id        INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(2083) NOT NULL,
  title     VARCHAR(100) NOT NULL,
  content   VARCHAR(1000) NOT NULL
);


-- migrate:down
DROP TABLE IF EXISTS posts
