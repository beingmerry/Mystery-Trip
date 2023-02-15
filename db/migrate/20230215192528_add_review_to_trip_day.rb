class AddReviewToTripDay < ActiveRecord::Migration[7.0]
  def change
    add_column :trip_days, :review, :string
  end
end
