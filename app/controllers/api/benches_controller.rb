class Api::BenchesController < ApplicationController
  def show
    render :show
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
  end

  protected
  def bench_params
    self.params.require(:bench).permit(:description, :lat, :lng)
  end

end
