package handlers

import (
	"github.com/Asad2730/SocialMediaApp/services"
	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	r.GET("login/:email/:password", services.GetUserByEmail_Password)
	r.POST("signUp/", services.CreateUser)
}
