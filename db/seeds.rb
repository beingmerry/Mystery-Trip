def assign_random_avatar
  avatar_number = rand(1..6) # generate a random number from 1 to 6
  # './src/avatars/avatar_1.png'
  "./src/avatars/avatar_#{avatar_number}.png" # construct the file path to the selected avatar
end


puts "👤 Seeding users"
# USERs seeding
User.create!(avatar: assign_random_avatar, username: 'Jamie', password: 'test', email: 'jamie@test.com', location: Faker::Address.city(options: { with_state: true }) )
User.create!(avatar: assign_random_avatar, username: 'benmerry', password: 'test', email: 'ben@bestEmailtest.org', location: Faker::Address.city(options: { with_state: true }) )
User.create!(avatar: assign_random_avatar, username: 'bellef', password: 'test', email: 'ben@similar.edu', location: Faker::Address.city(options: { with_state: true }) )
User.create!(avatar: assign_random_avatar, username: 'pierce', password: 'test', email: 'jpierce@atomic.gov', location: Faker::Address.city(options: { with_state: true }) )

# TRIP seeding

puts "💫 Beginning trips seeding..."
Trip.create!(user_id: User.first.id, destination:"Miami, FL", start_date:"2023-06-01", end_date:"2023-06-07", trip_review: "it's was amazing" , trip_thumbnail: "/src/assets/miami_top.png")
Trip.create!(user_id: User.second.id, destination:"Breckenridge, CO", start_date:"2023-09-01", end_date:"2023-09-09", trip_review: "The snow could have bene better", trip_thumbnail: "/src/assets/card_top.jpg")

# DAY seeding
puts "🌞 Creating some Days"
Day.create!(weather_suggested: "sunny, above 50degF", notes: "Make sure we leave the Beach before high tide!")

# TRIP DAY seeding
puts "📆 Adding some days to trips"
TripDay.create!(trip_id: Trip.first.id, day_id: Day.first.id, review: "was more fun than previous reviews let on!")
TripDay.create!(trip_id: Trip.second.id, day_id: Day.first.id, review: "was more fun than previous reviews let on!")

# ACTIVITY SEEDING
puts "🎯 Thinking up some activities"
Activity.create!(name: "Going to the beach", hours: 3)

# DAY ACTIVITY SEEDING
puts "➕ Adding some activities to days"
DayActivity.create!(day_id: Day.first.id, activity_id: Activity.first.id)
DayActivity.create!(day_id: Day.first.id, activity_id: Activity.first.id)

# FRIENDS building
puts "👥 Making Friends"
User.first.add_friend(User.second.id)
User.first.add_friend(User.third.id)
User.first.add_friend(User.fourth.id)
User.second.add_friend(User.fourth.id)

# All done!
puts "🛬 Seeding complete!"

