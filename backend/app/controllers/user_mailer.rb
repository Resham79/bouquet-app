class ApplicationMailer < ActionMailer::Base
  default from: 'resham.arora@gmail.com' #your email
  layout 'mailer'
end

  ActionMailer::Base.sendmail_settings = { :address => "smtp.gmail.com",
  :port => "587", :domain => "gmail.com", :user_name => "resham.arora@gmail.com", 
  :password => "Home6074", :authentication => "plain", :enable_starttls_auto => true }
  # default from: 'resham.arora@gmail.com' #your email
  # layout 'mailer'


class UserMailer < ActionMailer::Base
  default from: 'resham.arora@gmail.com' #your email
  layout 'mailer'

  def purchase_email
    @user = params[:user]
    @url  = 'http://localhost:3001/'
    mail(to: 'raulsg93@gmail.com', subject: 'Congratulations on your purchase!')
  end

end
