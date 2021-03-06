package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func isPublished(newCourseId int, c *gin.Context) bool {
	// check for is published....
	published := Course{}
	result := DB.Where("id = ?", newCourseId).First(&published)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "course not found",
		})
		return false
	}
	// for time being
	// return true
	return published.IsPublished
}
func courseExist(newCourseId int, c *gin.Context) bool {

	checkCourse := Course{}
	result := DB.Where("id = ?", newCourseId).First(&checkCourse)

	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "course not found",
		})
		return false
	}
	return true
}

func isEnrolled(newStudentId uint, newCourseId int) bool {

	alreadyEnrolled := Enrollment{}
	result := DB.Where("course_id = ? AND student_id=?", newCourseId, newStudentId).First(&alreadyEnrolled)

	return result.RowsAffected == 1
}

// func validCourse(newCourseId uint) bool {

// }
