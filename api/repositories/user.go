package repositories

import (
	"github.com/Asad2730/SocialMediaApp/conn"
	"github.com/Asad2730/SocialMediaApp/models"
)

func CreateUser(user models.User) (*models.User, error) {
	if err := conn.Db.Create(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func GetUserByEmailAndPassword(email, password string, user models.User) (*models.User, error) {

	if err := conn.Db.Where("email = ? AND password = ?", email, password).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}
