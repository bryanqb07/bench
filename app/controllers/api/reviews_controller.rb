class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    self.params.require(:review).permit(:rating, :bench_id, :comments)
  end
end
