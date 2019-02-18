class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  validates :lat, :lng, numericality: true

  def self.in_bounds(bounds)
    max_lat = bounds[:northEast][:lat]
    max_lng = bounds[:northEast][:lng]
    min_lat = bounds[:southWest][:lat]
    min_lng = bounds[:southWest][:lng]
    self.all.select do |bench|
      bench.lat < max_lat &&
      bench.lng < max_lng &&
      bench.lat > min_lat &&
      bench.lng > min_lng
    end
  end
end
