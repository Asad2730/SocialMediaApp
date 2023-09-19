package repositories

import (
	"fmt"
	"io"
	"mime/multipart"
	"os"
	"path/filepath"

	"github.com/Asad2730/SocialMediaApp/conn"
	"github.com/Asad2730/SocialMediaApp/models"
)

func CreateUser(user models.User, imageFile *multipart.FileHeader) (*models.User, error) {
	if err := conn.Db.Create(&user).Error; err != nil {
		return nil, err
	}

	if imageFile != nil {
		uploadedImage, err := imageFile.Open()
		if err != nil {
			return nil, err
		}
		defer uploadedImage.Close()

		// Generate a unique filename for the image
		imageFileName := fmt.Sprintf("user_%d_%s", user.ID, imageFile.Filename)

		// Specify the directory where you want to store the uploaded images
		imagepath := filepath.Join("uploads", imageFileName)

		// Create a new file for storing the image
		imageFile, err := os.Create(imagepath)
		if err != nil {
			return nil, err
		}

		defer imageFile.Close()

		// Copy the uploaded image data to the new file
		_, err = io.Copy(imageFile, uploadedImage)
		if err != nil {
			return nil, err
		}

		user.ImageUrl = imagepath
		if err := conn.Db.Save(&user).Error; err != nil {
			return nil, err
		}
	}

	return &user, nil
}

func GetUserByEmailAndPassword(email, password string, user models.User) (*models.User, error) {

	if err := conn.Db.Where("email = ? AND password = ?", email, password).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}
