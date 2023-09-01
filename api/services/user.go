package services

import (
	"github.com/Asad2730/SocialMediaApp/models"
	"github.com/Asad2730/SocialMediaApp/repositories"
	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var user models.User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(500, err.Error())
	}
	rs, err := repositories.CreateUser(user)
	if err != nil {
		c.JSON(400, err.Error())
	}
	c.JSON(200, rs)
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
