ALTER TABLE "users" ALTER COLUMN "employees" SET DEFAULT '[]'::json;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "employees" DROP NOT NULL;