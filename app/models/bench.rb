class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  validates :lat, :lng, numericality: true

  def self.in_bounds(bounds)
    # if bounds.nil?
    #   Bench.all
    # else
      max_lat = (bounds[:northEast][:lat]).to_f
      max_lng = bounds[:northEast][:lng].to_f
      min_lat = bounds[:southWest][:lat].to_f
      min_lng = bounds[:southWest][:lng].to_f
      self.all.select do |bench|
        bench.lat < max_lat &&
        bench.lng < max_lng &&
        bench.lat > min_lat &&
        bench.lng > min_lng
      end
    #end
  end
end
