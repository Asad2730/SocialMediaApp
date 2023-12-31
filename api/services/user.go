package services

import (
	"github.com/Asad2730/SocialMediaApp/models"
	"github.com/Asad2730/SocialMediaApp/repositories"
	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {

	var user models.User

	if err := c.ShouldBind(&user); err != nil {
		c.JSON(401, gin.H{"error Binding": err})
		return
	}

	imageFile, err := c.FormFile("image")
	if err != nil {
		c.JSON(402, gin.H{"error uploading image": err.Error()})
		return
	}

	rs, err := repositories.CreateUser(&user, imageFile)
	if err != nil {
		c.JSON(500, gin.H{"error creating": err.Error()})
		return
	}

	c.JSON(201, rs)
}

func GetUserByEmailAndPassword(c *gin.Context) {

	email := c.Param("email")
	password := c.Param("password")
	var user models.User

	if email == "" || password == "" {
		c.JSON(400, gin.H{"error": "Email and password are required"})
		return
	}

	rs, err := repositories.GetUserByEmailAndPassword(email, password, user)
	if err != nil {
		c.JSON(500, err.Error())
		return
	}

	c.JSON(200, rs)
}

func GetAllusers(c *gin.Context) {

	var user []models.User
	rs, err := repositories.GetAllusers(user)
	if err != nil {
		c.JSON(500, err.Error())
		return
	}
	c.JSON(200, rs)
}

func GetImage(c *gin.Context) {
	filename := c.Param("filename")
	c.File("uploads/" + filename)

}
