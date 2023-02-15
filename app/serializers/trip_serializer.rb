class TripSerializer < ActiveModel::Serializer
  attributes :id, :destination, :start_date, :end_date, :trip_review, :trip_thumbnail, :user_id
end
