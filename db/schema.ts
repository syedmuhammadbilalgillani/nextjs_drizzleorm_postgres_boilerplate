import {
  boolean,
  index,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["active", "inactive"]);
export const userTypeEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),
    email: varchar("email", { length: 255 }),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    profileImage: text("profile_image"),
    userType: userTypeEnum("user_type").notNull(),
    isVerified: boolean("is_verified").default(false),
    password: text("password").notNull(),
    isActive: boolean("is_active").default(true),
    languagePreference: varchar("language_preference", { length: 5 }).default(
      "en",
    ), // 'en', 'ur'
    lastSeen: timestamp("last_seen"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    phoneIdx: index("users_phone_idx").on(table.phoneNumber),
    emailIdx: index("users_email_idx").on(table.email),
  }),
);
