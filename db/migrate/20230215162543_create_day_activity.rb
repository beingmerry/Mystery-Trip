class CreateDayActivity < ActiveRecord::Migration[7.0]
  def change
    create_table :day_activities do |t|
      t.references :day, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
