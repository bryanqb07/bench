# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


bench1 = Bench.create(description: "A good bench", lat: 37.7575653, lng: -122.4726221, seating: 2)
bench2 = Bench.create(description: "A decent bench", lat: 37.7765916, lng: -122.4283187, seating: 1)
bench3 = Bench.create(description: "Another bench", lat: 37.7774814, lng: -122.4398417, seating: 4)
bench4 = Bench.create(description: "A fun bench", lat: 37.7788891, lng: -122.4400402, seating: 2)
bench5 = Bench.create(description: "An old bench", lat: 37.782656, lng: -122.499650, seating: 3)
bench6 = Bench.create(description: "A subpar bench", lat: 37.772749, lng: -122.455446, seating: 2)
