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
		c.JSON(500, err)
	}
	rs := repositories.CreateUser(&user)
	c.JSON(200, rs)
}

func GetUserByEmail_Password(c *gin.Context) {
	email := c.Param("email")
	password := c.Param("password")
	var user models.User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(500, err)
	}
	rs := repositories.GetUserByEmail_Password(email, password, &user)
	c.JSON(200, rs)
}
