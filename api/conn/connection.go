package conn

import (
	"github.com/Asad2730/SocialMediaApp/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Db *gorm.DB

func Connect() {
	dsn := "host=localhost user=postgres password=123 dbname=socialMedia port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&models.User{})
	Db = db
}
