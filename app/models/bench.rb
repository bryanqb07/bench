class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  #validates :lat, :lng, numericality: true
  has_many :reviews,
    primary_key: :id,
    foreign_key: :bench_id,
    class_name: 'Review'

  def average_rating
    reviews.average(:rating) #same as below
  end

  def self.in_bounds(bounds) # use sql instead of ruby logic
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end
