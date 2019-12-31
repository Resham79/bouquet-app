class User < ApplicationRecord
    has_secure_password

    has_many :orders
    has_many :bouquets, through: :orders

    validates :username, presence: true

end

