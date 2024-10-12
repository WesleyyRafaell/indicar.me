-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ReviewsToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ReviewsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Reviews" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ReviewsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ReviewsToUser_AB_unique" ON "_ReviewsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ReviewsToUser_B_index" ON "_ReviewsToUser"("B");
