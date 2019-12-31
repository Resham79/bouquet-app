class UsersController < ApplicationController

def index
    @users = User.all 
    render json: @users
end

def new
    @user = User.new
  end

def create
    # byebug
    @user = User.new(user_params)
    # byebug
        if @user.valid?
            @user.save
            
            UserMailer.with(user: @user).purchase_email.deliver_now
            render json: {message: "User created"}
        else
            render json: {error: "Username/password invalid"}
        end
end

def show
    @user = User.find(params[:id])
    render json: @user

end

private
def user_params
    params.require(:user).permit(:username, :password, :email, :address, :phone)
end

end
