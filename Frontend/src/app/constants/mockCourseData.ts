import { allCourses } from "src/assets/data/allCourses";
import { createCourse } from "src/assets/data/createCourse";
import { uploadVideo } from "src/assets/data/uploadVideo";
import { loginResponse } from "src/assets/data/loginResponse";
import { registerResponse } from "src/assets/data/registerResponse";
import { instrCourses } from "src/assets/data/instructorCourses";
import { uploadQuiz } from "src/assets/data/uploadQuiz";
import { CourseDetails } from "src/assets/data/getCourseDetails";
import { publishCourse } from "src/assets/data/publishCourse";
import { studentEnroll } from "src/assets/data/studentEnroll";
import { checkEnroll } from "src/assets/data/checkEnroll";
import { updateDescription } from "src/assets/data/updateDescription";
import { CourseDescription } from "src/assets/data/CourseDescription";
import { getModule } from "src/assets/data/getModule";
import { grade } from "src/assets/data/data";

export const apiUrls = {
    getAllCourses : allCourses,
    createCourse : createCourse,
    uploadVideo : uploadVideo,     
    login : loginResponse,
    register : registerResponse,
    instrCourses :  instrCourses,
    uploadQuiz : uploadQuiz,
    getCourseDetails : CourseDetails,
    publishCourse : publishCourse,
    studentEnroll : studentEnroll,
    checkEnroll : checkEnroll,
    updateDescription : updateDescription,
    getCourseDescription : CourseDescription,
    getModule: getModule,
    calculateGrade: grade
}