/*
  Warnings:

  - You are about to drop the `_ReviewsToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ReviewsToUser_B_index";

-- DropIndex
DROP INDEX "_ReviewsToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ReviewsToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "authorId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,
    CONSTRAINT "Reviews_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reviews" ("date", "description", "id", "name", "rating") SELECT "date", "description", "id", "name", "rating" FROM "Reviews";
DROP TABLE "Reviews";
ALTER TABLE "new_Reviews" RENAME TO "Reviews";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
