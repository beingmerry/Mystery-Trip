# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_15_192528) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.integer "hours"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "day_activities", force: :cascade do |t|
    t.bigint "day_id", null: false
    t.bigint "activity_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_day_activities_on_activity_id"
    t.index ["day_id"], name: "index_day_activities_on_day_id"
  end

  create_table "days", force: :cascade do |t|
    t.string "notes"
    t.string "day_rating"
    t.string "day_review"
    t.string "weather_suggested"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friendships", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id"
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "trip_days", force: :cascade do |t|
    t.string "title"
    t.string "thumbnail"
    t.bigint "trip_id", null: false
    t.bigint "day_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "review"
    t.index ["day_id"], name: "index_trip_days_on_day_id"
    t.index ["trip_id"], name: "index_trip_days_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "destination"
    t.string "start_date"
    t.string "end_date"
    t.string "trip_review"
    t.string "trip_thumbnail"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "bio"
    t.string "avatar"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "location"
  end

  add_foreign_key "day_activities", "activities"
  add_foreign_key "day_activities", "days"
  add_foreign_key "friendships", "users"
  add_foreign_key "friendships", "users", column: "friend_id"
  add_foreign_key "trip_days", "days"
  add_foreign_key "trip_days", "trips"
  add_foreign_key "trips", "users"
end
