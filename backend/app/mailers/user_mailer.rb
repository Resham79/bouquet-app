class UserMailer < ActionMailer::Base
    # default from: 'resham.arora@gmail.com' #your email
    # layout 'mailer'
  
    def purchase_email
    #   @user = params[:user]
    #   @url  = 'http://localhost:3001/'
      mail(to: <raulsg93@gmail.com>, subject: "Congratulations on your purchase!")
    end
  
  end