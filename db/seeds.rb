
User.destroy_all
SkillSet.destroy_all
Comment.destroy_all

puts "Seeding data........."
user1 = User.create(username: 'Rose', password: 'apple')
user2 = User.create(username: 'Lionel', password: 'banana')
user3 = User.create(username: 'Timothy', password: 'banana')




skill1 = SkillSet.create(title: "Forehand", image: "https://www.experttabletennis.com/wp-content/uploads/2017/02/35-1.jpg", category: "Beginner", description: "Start with bat around waist height. Close the bat angle slightly. Rotate backwards from the waist. As the ball approaches, rotate forwards and move your bat forwards and up. Contact the ball just in front of your body. The contact should be quite flat, roughly in the middle of your bat. Your bat should follow through and finish in front of your body", is_favorite: "false", video: "https://www.youtube.com/embed/BNZrtYsvKhE")

skill2 = SkillSet.create(title: "Serving", image: "https://www.experttabletennis.com/wp-content/uploads/2015/06/Serve-Faster-Table-Tennis.png", category: "Beginner", description: "Always hold the ball flat in the palm of your hand and above the table. Plan your serve to exploit your strengths and your opponent’s weaknesses. Employ a short toss up – enough to give yourself time to hit the ball and also so that you’re unlikely to miss", is_favorite: "false", video: "https://www.youtube.com/embed/oL5BQuBuMHY")

skill3 = SkillSet.create(title: "Top-spin", image: "https://www.experttabletennis.com/wp-content/uploads/2017/02/35-1.jpg", category: "Beginner", description: "Start your stroke below and behind the ball. Wait for the ball to bounce off your table upwards. Move your arm forward and upwards, brushing the ball at a “’/” angle from a high position. The ball’s trajectory will arch downwards, picking up speed after it bounces off the table", is_favorite: "false", video: "https://www.youtube.com/embed/--CEqSDd5yQ")






comment1 = Comment.create(description: "I can't believe how my wrist was so relaxed", user_id: 2, skill_set_id: skill1.id)

comment2 = Comment.create(description: "It felt much better holding my bat to do a serve! Thank you!", user_id: 2, skill_set_id: skill2.id)

comment3 = Comment.create(description: "Loved this. Thank you 😊❤️", user_id: 2, skill_set_id: skill3.id)


puts "Done seeding..........."
