class OrdersController < ApplicationController

    def create
        order = Order.create(order_params)
        puts order
        byebug
        render json: order
        # OrderMailer.with(order: @order).new_order_email.deliver_now

    end

    def index
        @orders = Order.all
        render json: @orders
    end

    private
    def order_params
        params.require(:order).permit(:user_id, :bouquet_id)
    end

end