json.set! :pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
  json.items_id do
    # @pokemon.items.each do |item|
    #   json.extract! item, :id
    # end
    json.array! @pokemon.items.map { |item| item.id }
  # json.array! @pokemon.items, :id

  end
end
json.set! :items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
