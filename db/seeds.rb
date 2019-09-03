# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.create!(name: 'Arnold Shortman', description: 'Thinks people are inherently good, idealist, helpful, is not wearing a kilt but rather it is a long shirt that extends past his green sweater, impractically-shaped nogin', photo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/HeyArnold%21.jpg')
Student.create!(name: 'Gerald Martin Johanssen', description: 'Athletic, loyal, street-smart, class president, hair icon', photo: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Gerald_Johanssen.png')
Student.create!(name: 'Helga G. Pataki', description: 'rough, cynical, favorite color is pink, closet poet, expert shrine-maker', photo: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Helga_Pataki.jpg')
Student.create!(name: 'Harold Berman', description: 'tough-talker, bully, body-shamed, acts out, relatively harmless', photo: 'https://www.cartoonbucket.com/wp-content/uploads/2016/01/Harold-Berman-Eating-Ice-Cream-cc15205.jpg')
Student.create!(name: 'Eugene Horowitz', description: 'accident prone, cheery, the class jinx, wears socks with sandals', photo: 'https://vignette.wikia.nocookie.net/heyarnold/images/9/99/EAFDB121-EC13-4F12-849E-37037A95E3D6.png/revision/latest?cb=20190816022130')
Student.create!(name: 'Phoebe Heyerdahl', description: 'smartest person in the room, shy, makes "long sweater" an outfit', photo: 'https://vignette.wikia.nocookie.net/heyarnold/images/9/93/Phoebe_%28classic%29.png/revision/latest?cb=20190816022206')

puts "#{Student.count} students created!"