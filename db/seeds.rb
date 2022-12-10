
User.destroy_all
SkillSet.destroy_all
Comment.destroy_all

puts "Seeding data........."
user1 = User.create(username: 'Rose', password: '123')
user2 = User.create(username: 'Lionel', password: '012')
user3 = User.create(username: 'Timothy', password: '432')




skill1 = SkillSet.create(title: "Forehand", image: "https://www.experttabletennis.com/wp-content/uploads/2017/02/35-1.jpg", category: "Beginner", description: "Start with bat around waist height. Close the bat angle slightly. Rotate backwards from the waist. As the ball approaches, rotate forwards and move your bat forwards and up. Contact the ball just in front of your body. The contact should be quite flat, roughly in the middle of your bat. Your bat should follow through and finish in front of your body", is_favorite: "false", video: "https://www.youtube.com/embed/BNZrtYsvKhE")

skill2 = SkillSet.create(title: "Serving", image: "https://www.experttabletennis.com/wp-content/uploads/2015/06/Serve-Faster-Table-Tennis.png", category: "Beginner", description: "Always hold the ball flat in the palm of your hand and above the table. Plan your serve to exploit your strengths and your opponent’s weaknesses. Employ a short toss up – enough to give yourself time to hit the ball and also so that you’re unlikely to miss", is_favorite: "false", video: "https://www.youtube.com/embed/oL5BQuBuMHY")

skill3 = SkillSet.create(title: "Backhand top-spin", image: "https://www.tabletenniscoach.me.uk/wp-content/uploads/2019/11/backhand-topspin.jpg", category: "Beginner", description: "Start your stroke below and behind the ball. Wait for the ball to bounce off your table upwards. Move your arm forward and upwards, brushing the ball at a “’/” angle from a high position. The ball’s trajectory will arch downwards, picking up speed after it bounces off the table", is_favorite: "false", video: "https://www.youtube.com/embed/--CEqSDd5yQ")

skill4 = SkillSet.create(title: "Forehand push", image: "https://4.bp.blogspot.com/-yLmjr7qIjW4/V1W22hBJpFI/AAAAAAAACPU/nfQNjY1j3Cgvp5mBYhX0PFAgxSinYTXrACLcB/s1600/ariel.jpg", category: "Intermediate", description: "Body Stance :: Feet should be slightly wider than shoulder width apart. Stance can be square to the table or you can have your right foot slightly further back (as in the forehand drive). Knees should be slightly bent and the body should be leaning forward. You may want to be slightly lower for a push as usually we play this shot against lower, backspin balls. Both arms should be out in front of you. About a 90-110 degree bend at the elbow. Stand quite close to the table, an arms length away. Weight distributed on both feet and on the balls/toes, not heels.", is_favorite: "false", video: "https://www.youtube.com/embed/3D9VWKR-iFc")

skill5 = SkillSet.create(title: "Forehand flick", image: "https://racketsportsplace.com/wp-content/uploads/2021/12/Picture2.jpg", category: "Pro", description: "Get close to the ball by stepping in with your “playing foot” under the table. Stay low with your knees bent. Lean forward so that your head and body are near the ball. Your weight will be on your “playing foot”. Keep your arm out in front of you. You don’t need a big backswing. Take the ball at the peak of the bounce. This will make it much easier to attack. Your bat you follow the ball, finishing toward the net and coming slightly up. Remember to step back out with your “playing foot” and return to a neutral ready position. Get ready to loop the next ball.", is_favorite: "false", video: "https://www.youtube.com/embed/mC0H6OLL_4M")

skill6 = SkillSet.create(title: "Side Spin", image: "https://recroompick.com/wp-content/uploads/2021/04/How-to-Spin-a-Ping-Pong-Ball-main.jpg", category: "Expert", description: "As you can imagine from the name, a sidespin occurs when you hit the ball with your paddle on the side of the ball. You can create a sidespin from either the right or the left side, depending on how you hit the ball. Basically, if you hit the ball and move the racket to the right, the ball will move in the opposite direction, to the left. The faster you move your paddle, the faster your ball will move. Furthermore, a sidespin often occurs with either a topspin or a backspin. This type of spin is often used when you are serving, so the better you understand it, the better you can be prepared for your opponent to use it when opening a game.", is_favorite: "false", video: "https://www.youtube.com/embed/JRN4q8mdwJ0")








comment1 = Comment.create(description: "I can't believe how my wrist was so relaxed", user_id: 2, skill_set_id: skill1.id)

comment2 = Comment.create(description: "It felt much better holding my bat to do a serve! Thank you!", user_id: 2, skill_set_id: skill2.id)

comment3 = Comment.create(description: "Loved this. Thank you 😊❤️", user_id: 2, skill_set_id: skill3.id)


puts "Done seeding..........."
