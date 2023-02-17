class UserFriendSerializer < ActiveModel::Serializer
  attributes :name
  has_many :friendships
end
