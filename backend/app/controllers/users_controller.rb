class UsersController < ApplicationController

def index
    @users = User.all 
    render json: @users
end

def new
    @user = User.new
  end

def create
    @user = User.new(user_params)
    
        if @user.valid?
            @user.save
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
    params.permit(:username, :password, :email, :address, :phone)
end

end
