DROP TABLE IF EXISTS contact;

CREATE TABLE contact (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    tel VARCHAR,
    message TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
