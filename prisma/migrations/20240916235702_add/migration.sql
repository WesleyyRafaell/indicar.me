/*
  Warnings:

  - You are about to drop the column `type` on the `users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "email_verified" DATETIME,
    "image" TEXT,
    "typePersona" TEXT,
    "city" TEXT,
    "experience" TEXT,
    "state" TEXT,
    "typeProfessional" TEXT
);
INSERT INTO "new_users" ("email", "email_verified", "id", "image", "name") SELECT "email", "email_verified", "id", "image", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
