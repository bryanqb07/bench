class Api::UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def show
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  protected
  def user_params
    self.params.require(:user).permit(:username, :password, :email)
  end
end