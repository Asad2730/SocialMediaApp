package repositories

import (
	"github.com/Asad2730/SocialMediaApp/conn"
	"github.com/Asad2730/SocialMediaApp/models"
)

func CreateUser(user *models.User) *models.User {
	conn.Db.Create(&user)
	return user
}

func GetUserByEmail_Password(email, password string, user *models.User) *models.User {
	conn.Db.Where("email = ? & password = ?", email, password).First(user)
	return user
}
