const {
    pool
} = require("../db")


const getAllUsersDB = async () => {
    const connect = await pool.connect()
    const sqlGetAllStudents = `SELECT * from students `
    const allStudents = (await connect.query(sqlGetAllStudents)).rows
    return allStudents
}

const getUserByIdDB = async (id) => {
    try {
        const connect = await pool.connect()
        const sqlGotUserDB = `SELECT 
    students.id, 
    students.name, 
    students.surname, 
    students_info.birth, 
    students_info.city, 
    students_info.age 
    from students join students_info on students.info_id = students_info.id
    where students.id = $1;`
        const gotUserDB = (await connect.query(sqlGotUserDB, [id])).rows
        if (gotUserDB.length === 0) throw new Error('User was not found')
        return gotUserDB
    } catch (error) {
        return error.message
    }
}

const userCreateDB = async (name, surname, birth, city, age) => {
    const connect = await pool.connect()
    const sqlStudentsInfo = `INSERT INTO students_info (birth,city,age) values (
      $1,$2,$3
    ) RETURNING students_info.*`
    const objStudentsInfo = (await connect.query(sqlStudentsInfo, [birth, city, age])).rows[0]
    const sqlStudents = `INSERT INTO students (name,surname,info_id) values ($1, $2, $3) returning students.*`
    const objStudents = (await connect.query(sqlStudents, [name, surname, objStudentsInfo.id])).rows

    return objStudents

}

const updateUserDB = async (id, infoID, name, surname, birth, city, age) => {
    const client = await pool.connect()
    const sqlUpdateStudentsInfo = `UPDATE students_info birth = $1,city = $2, age = $3, where id = $4 returning students_info.*`
    const objUpdateStudentsInfo = (await client.query(sqlUpdateStudentsInfo, [birth, city, age, infoID])).rows[0]
    console.log(objUpdateStudentsInfo);
    const sqlUpdateStudents = `UPDATE students set name = $1, surname = $2 where info_id= $3 and id = $4 returning students.*`
    const objUpdatedStudents = (await client.query(sqlUpdateStudents, [name, surname, objUpdateStudentsInfo.id, id])).rows
    return objUpdatedStudents
}

const deleteUserDB = async (id) => {
    const client = await pool.connect()
    const sqlDeleteStudent = `DELETE FROM students where students.id = $1`
    const sqlDeleteStudentsInfo = `DELETE FROM students_info where students_info.id = $1`
    const objDeletedStudents = (await client.query(sqlDeleteStudent, [id])).rows
    const objDeletedStudentsInfo = (await client.query(sqlDeleteStudentsInfo, [id])).rows
    if (objDeletedStudents.length === 0) throw new Error('User for delete was not found')
    return [objDeletedStudents, objDeletedStudentsInfo]
}

module.exports = {
    userCreateDB,
    updateUserDB,
    getAllUsersDB,
    getUserByIdDB,
    deleteUserDB
}