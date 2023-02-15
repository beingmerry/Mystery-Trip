class CreateTripDay < ActiveRecord::Migration[7.0]
  def change
    create_table :trip_days do |t|
      t.string :title
      t.string :thumbnail
      t.references :trip, null: false, foreign_key: true
      t.references :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
