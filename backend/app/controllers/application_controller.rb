class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def encode_token(payload)
        JWT.encode(payload, "flatiron")
    end

end
