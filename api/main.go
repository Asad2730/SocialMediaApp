package main

import (
	"github.com/Asad2730/SocialMediaApp/conn"
	"github.com/Asad2730/SocialMediaApp/routes"
	"github.com/gin-gonic/gin"
)

func init() {
	conn.Connect()
}

func main() {
	r := gin.Default()
	routes.UserRoutes(r)
	r.Run() // listen and serve on 0.0.0.0:8080
}
