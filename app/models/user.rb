class User < ApplicationRecord
  has_secure_password

  # Handling Friendships and making sure that the relationship is bi-directional
  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships
  has_many :trips

  def add_friend(friend_id)
    friend = User.find(friend_id)
    friends << friend
    friend.friends << self
  end

  validates :username, uniqueness: { case_sensitive: false }
  validates :password_digest, presence: true
end
