class AddColumnToReviewsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :author_id, :integer, null: false
    add_index :reviews, :bench_id
  end
end
