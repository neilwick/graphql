const { query } = require('express');
const db = require('../config/db');

module.exports = {
    getCoursesByTeacher: async (args) => {
        let conn = await db.getConnection();
        let courses = await conn.query('SELECT `name`, `description`, `courseId` as `id` FROM `course` WHERE teacherId = ?',
            [args.id]);

        let ret = [];
        for (let i = 0; i < courses.length; i++) {
            ret.push(courses[i]);
        }

        console.log(ret);

        conn.release();
        return ret;
    },
    getAllCourses: async () => {
        let conn = await db.getConnection();
        let courses = await conn.query('SELECT `name`, `description`, `courseId` as `id` FROM `course`');

        let ret = [];
        for (let i = 0; i < courses.length; i++) {
            ret.push(courses[i]);
        }

        conn.release();
        return ret;
    },
    getCoursesByStudent: async (args) => {
        let conn = await db.getConnection();
        let courses = await conn.query('SELECT course.courseid as `id`, course.name, course.description FROM course JOIN coursestudent ON coursestudent.courseid = course.courseid WHERE studentid = ?',
            [args.id]);

        let ret = [];
        for (let i = 0; i < courses.length; i++) {
            ret.push(courses[i]);
        }

        conn.release();
        return ret;
    }
    
}