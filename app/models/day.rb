class Day < ApplicationRecord
  has_many :day_activities
  has_many :activities, through: :day_activities
  has_many :trip_days
  has_many :trips, through: :trip_days
end
