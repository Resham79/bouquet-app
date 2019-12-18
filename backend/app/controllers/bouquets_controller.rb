class BouquetsController < ApplicationController


    def index
        @bouquets = Bouquet.all 
        render json: @bouquets
    end
    
    def show
        @bouquet = Bouquet.find(params[:id])
        render json: @bouquet
    end
    



end
