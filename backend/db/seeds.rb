# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Bouquet.destroy_all
Order.destroy_all

u1 = User.create(username: "Resham", email: "resham.arora@gmail.com", phone: "832-265-1101", address: "4321 Leeland, 77023", password: "CrispyTacos")
u2 = User.create(username: "Raul", email: "raul.sanchez@email.com", phone: "999-999-9999", address: "0000 Leeland, 77023", password: "CrispyTacos")
u3 = User.create(username: "Vidhi", email: "vidhi.sharma@email.com", phone: "000-000-0000", address: "1111 Leeland, 77023", password: "CrispyTacos")

b1 = Bouquet.create(name: "Roses Bouquet", description: "Two dozen red Roses!", price: "29.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/90926mrdv4ch27x.jpg?quality=100")
b2 = Bouquet.create(name: "Lilies Bouquet", description: "Candycane Lilies, 12 stem", price: "16.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/103627mrdsv1110218x.jpg")
b3 = Bouquet.create(name: "Birthday Bouquet", description: "Blooms of yellow, orange, pink, and purple!", price: "39.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/167891lx.jpg")
b4 = Bouquet.create(name: "Vibrance Bouquet", description: "Cheerful pops of orange, pink and yellow!", price: "39.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/167384l031519x.jpg")
b5 = Bouquet.create(name: "Holiday Bouquet", description: "Perfect for the Holidays!", price: "29.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/148323srdv4x.jpg")
b6 = Bouquet.create(name: "European Bouquet", description: "Old World charm", price: "39.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/159229xlx.jpg")
b7 = Bouquet.create(name: "Peruvian Lilies Bouquet", description: "A perfect surprise!", price: "19.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/104735mv1x.jpg")
b8 = Bouquet.create(name: "Congrats Bouquet", description: "Celebrate with this bouquet!", price: "29.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/167693xlx.jpg")
b9 = Bouquet.create(name: "Pink Bouquet", description: "Pink lilies and roses in a pink vase", price: "19.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/161808mpkcv2x.jpg")
b10 = Bouquet.create(name: "Kaleidoscope Bouquet", description: "Kaleidoscope roses, 24 stems", price: "29.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/140157mpuv5111318x.jpg")
b11 = Bouquet.create(name: "Lavender Blooms", description: "Lavender and purple blooms in a violet vase", price: "39.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/161710xlx.jpg")
b12 = Bouquet.create(name: "Sunflower Surprise", description: "Vibrant orange and yellow sunflowers", price: "29.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/100589swkv1x.jpg")
b13 = Bouquet.create(name: "White Lily Bouquet", description: "White lily bouquet with blue vase", price: "35.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/160074smbv1x.jpg")
b14 = Bouquet.create(name: "Purple Orchid Bouquet", description: "20 orchid stems in a purple vase", price: "59.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/140953mdpv2x.jpg")
b15 = Bouquet.create(name: "Pink Orchid Bouquet", description: "20 orchid stems in a purple vase", price: "59.99", img_url: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/146802mdpv2x.jpg")

Order.create(user_id: u1.id, bouquet_id: b14.id)
Order.create(user_id: u2.id, bouquet_id: b4.id)
Order.create(user_id: u3.id, bouquet_id: b8.id)