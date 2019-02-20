class CreateReviewsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :bench_id, null: false
      t.integer :score, null: false
      t.text :comments, null: false
    end
  end
end
