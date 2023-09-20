package handlers

import (
	"github.com/Asad2730/SocialMediaApp/services"
	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	r.GET("login/:email/:password", services.GetUserByEmailAndPassword)
	r.POST("signup/", services.CreateUser)
	r.GET("/images/:filename", services.GetImage)
}
