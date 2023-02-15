class TripDay < ApplicationRecord
  belongs_to :trip
  belongs_to :day
end
