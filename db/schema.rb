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

ActiveRecord::Schema.define(version: 2021_12_14_182024) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bugs", force: :cascade do |t|
    t.integer "progress"
    t.integer "urgency"
    t.integer "priority"
    t.string "bug_data"
    t.string "bug_title"
    t.bigint "sprint_id", null: false
    t.string "slug"
    t.string "completed_comment"
    t.bigint "created_by_id"
    t.bigint "completed_by_id"
    t.datetime "completed_at"
    t.boolean "completed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["completed_by_id"], name: "index_bugs_on_completed_by_id"
    t.index ["created_by_id"], name: "index_bugs_on_created_by_id"
    t.index ["sprint_id"], name: "index_bugs_on_sprint_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "progress"
    t.integer "urgency"
    t.integer "priority"
    t.string "comment_details"
    t.bigint "sprint_id", null: false
    t.string "slug"
    t.string "completed_comment"
    t.bigint "created_by_id"
    t.bigint "completed_by_id"
    t.datetime "completed_at"
    t.boolean "completed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["completed_by_id"], name: "index_comments_on_completed_by_id"
    t.index ["created_by_id"], name: "index_comments_on_created_by_id"
    t.index ["sprint_id"], name: "index_comments_on_sprint_id"
  end

  create_table "features", force: :cascade do |t|
    t.integer "progress"
    t.integer "urgency"
    t.integer "priority"
    t.string "feature_data"
    t.string "feature_title"
    t.bigint "sprint_id", null: false
    t.string "slug"
    t.string "completed_comment"
    t.bigint "created_by_id"
    t.bigint "completed_by_id"
    t.datetime "completed_at"
    t.boolean "completed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["completed_by_id"], name: "index_features_on_completed_by_id"
    t.index ["created_by_id"], name: "index_features_on_created_by_id"
    t.index ["sprint_id"], name: "index_features_on_sprint_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "summary"
    t.string "progress"
    t.string "integer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sprints", force: :cascade do |t|
    t.integer "progress"
    t.integer "urgency"
    t.integer "priority"
    t.string "sprint_title"
    t.string "sprint_data"
    t.string "slug"
    t.datetime "goal_date"
    t.string "completed_comment"
    t.bigint "created_by_id"
    t.bigint "completed_by_id"
    t.datetime "completed_at"
    t.boolean "completed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "project_id"
    t.index ["completed_by_id"], name: "index_sprints_on_completed_by_id"
    t.index ["created_by_id"], name: "index_sprints_on_created_by_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "role"
    t.string "username"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
    t.integer "level"
  end

  add_foreign_key "bugs", "sprints"
  add_foreign_key "bugs", "users", column: "completed_by_id"
  add_foreign_key "bugs", "users", column: "created_by_id"
  add_foreign_key "comments", "sprints"
  add_foreign_key "comments", "users", column: "completed_by_id"
  add_foreign_key "comments", "users", column: "created_by_id"
  add_foreign_key "features", "sprints"
  add_foreign_key "features", "users", column: "completed_by_id"
  add_foreign_key "features", "users", column: "created_by_id"
  add_foreign_key "sprints", "users", column: "completed_by_id"
  add_foreign_key "sprints", "users", column: "created_by_id"
end
