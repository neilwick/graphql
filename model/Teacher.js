const { query } = require('express');
const db = require('../config/db');

module.exports = {
    getTeacherById: async (args) => {
        let conn = await db.getConnection();
        let teacher = await conn.query('SELECT `first`, `last`, teacherId as `id` FROM `teacher` WHERE teacherId = ?',
        [args.id]);

        let ret = [];
        for (let i = 0; i < teachers.length; i++) {
            ret.push(teachers[i]);
        }

        conn.release();
        return ret;
    },
    getTeacherByCourse: async (args) => {
        let conn = await db.getConnection();
        let teacher = await conn.query('SELECT `first`, `last`, teacher.teacherId as `id` FROM `course` JOIN teacher ON course.teacherid = teacher.teacherid WHERE courseId = ?',
            [args.id]);

        let ret = [];
        for (let i = 0; i < teachers.length; i++) {
            ret.push(teachers[i]);
        }
        ret.push(teacher);

        conn.release();
        return ret;
    },
    getAllTeachers: async () => {
        let conn = await db.getConnection();
        let teachers = await conn.query('SELECT `first`, `last`, teacherId as `id` FROM `teacher`');

        let ret = [];
        for (let i = 0; i < teachers.length; i++) {
            ret.push(teachers[i]);
        }

        conn.release();
        return ret;
    }
}