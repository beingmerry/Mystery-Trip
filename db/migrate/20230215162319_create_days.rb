class CreateDays < ActiveRecord::Migration[7.0]
  def change
    create_table :days do |t|
      t.string :notes
      t.string :day_rating
      t.string :day_review
      t.string :weather_suggested

      t.timestamps
    end
  end
end
