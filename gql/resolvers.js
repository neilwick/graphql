const teacher = require('../model/Teacher');
const course = require('../model/Course');
const student = require('../model/Student');

module.exports = {
    Query: {
        teacher: (args) => teacher.getTeacherById(args),
        teachers: teacher.getAllTeachers,
        courses: course.getAllCourses,
        students: student.getAllStudents
    },
    Teacher: {
        courses: (teacher) => course.getCoursesByTeacher(teacher)
    },
    Course: {
        students: (course) => student.getStudentsByCourse(course),
        teacher: (course) => teacher.getTeacherByCourse(course)
    },
    Student: {
        courses: (student) => course.getCoursesByStudent(student)
    }
}