class User < ApplicationRecord

    has_many :orders
    has_many :bouquets, through: :orders

    has_secure_password
    validates :username, presence: true

end

