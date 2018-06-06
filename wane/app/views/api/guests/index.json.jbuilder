json.array! @guests.each do |guest|
  next unless guest.age.between?(40, 50)
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
