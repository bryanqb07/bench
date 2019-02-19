class Api::BenchesController < ApplicationController

  def index
    @benches = bounds ? Bench.in_bounds(params[:bounds]) : Bench.all
    render :index
  end

  def show
    @bench = Bench.find_by(id: params[:id])
    render :show
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  protected

  def bench_params
    self.params.require(:bench).permit(:description, :lat, :lng)
  end

  def bounds
    params[:bounds]
  end

end
