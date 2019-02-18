class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  #validates :lat, :lng, numericality: true

  def self.in_bounds(bounds) # use sql instead of ruby logic
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end
