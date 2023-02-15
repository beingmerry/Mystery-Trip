class Trip < ApplicationRecord
  belongs_to :user
  has_many :trip_days
  has_many :days, through: :trip_days
  validates :destination, presence: true
end
