class FixColumnName < ActiveRecord::Migration[5.2]
  def change
    change_table :reviews do |t|
      t.rename :score, :rating
    end
  end
end
