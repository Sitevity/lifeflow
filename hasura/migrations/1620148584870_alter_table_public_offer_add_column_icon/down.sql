ALTER TABLE ONLY "public"."offer" ALTER COLUMN "icon" DROP DEFAULT;
ALTER TABLE "public"."offer" ALTER COLUMN "icon" DROP NOT NULL;