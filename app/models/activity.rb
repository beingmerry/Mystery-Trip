class Activity < ApplicationRecord
  has_many :day_activities
  has_many :days, through: :day_activities
end
