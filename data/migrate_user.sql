ALTER TABLE "user" ADD COLUMN "role" TEXT DEFAULT 'user';

-- La requête sql pour donner le role 'admin' à un utilisateur :
-- UPDATE "user" SET role='admin' WHERE "email" = 'user@domain.net';
-- INSERT INTO "user" (firstname, lastname, email) VALUES ('Joe','Dalton','joe@dalton.net');