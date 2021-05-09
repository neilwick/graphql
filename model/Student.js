const { query } = require('express');
const db = require('../config/db');

module.exports = {
     getAllStudents: async () => {
        let conn = await db.getConnection();
        let students = await conn.query('SELECT `first`, `last`, `dob`, studentId as `id` FROM `student`');

        let ret = [];
        for (let i = 0; i < students.length; i++) {
            ret.push(students[i]);
        }

        conn.release();
        return ret;
    },
    getStudentsByCourse: async (course) => {
        let conn = await db.getConnection();
        let students = await conn.query('SELECT student.studentid as `id`, student.first, student.last. student.dob, FROM `student` JOIN coursestudent ON coursestudent.studentid = student.studentid WHERE courseid = ?',
            [course.id]);

        let ret = [];
        for (let i = 0; i < students.length; i++) {
            ret.push(students[i]);
        }

        conn.release();
        return ret;
    }
}