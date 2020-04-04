# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_04_011525) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listened_songs", force: :cascade do |t|
    t.bigint "listener_id", null: false
    t.bigint "song_id", null: false
    t.integer "times", default: 1, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["listener_id"], name: "index_listened_songs_on_listener_id"
    t.index ["song_id"], name: "index_listened_songs_on_song_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_songs_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "listened_songs", "songs"
  add_foreign_key "listened_songs", "users", column: "listener_id"
end
