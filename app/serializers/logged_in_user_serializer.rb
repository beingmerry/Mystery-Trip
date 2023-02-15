class LoggedInUserSerializer < ActiveModel::Serializer
  attributes :username, :avatar, :email, :location
  has_many :friends
end
