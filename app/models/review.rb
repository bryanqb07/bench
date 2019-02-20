class Review < ApplicationRecord
  validates :bench_id, :comments, :rating, :author_id, presence: true
  belongs_to :bench,
    primary_key: :id,
    foreign_key: :bench_id,
    class_name: 'Bench'
  belongs_to :author,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: 'User'
end
