package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name     string `form:"name" binding:"required"`
	Email    string `form:"email" binding:"required"`
	Password string `form:"password" binding:"required"`
	ImageUrl string
}
