
import pool from '../database/database.config';

class UserModel {
    // constructor(id, name, email, password, gender, age) {
    //     this.id = id;
    //     this.name = name;
    //     this.email = email;
    //     this.password = password;
    //     this.gender = gender;
    //     this.age = age;
    // }

    async getAllUsers() {
        try {
            const connection = await pool.getConnection();
            const [rows, fields] = await connection.query('SELECT * FROM `user`');
            connection.release();
            return rows;
        } catch (error) {
            console.log("🚀 ~ UserModel ~ getAllUsers ~ error:", error)
            console.error('Error executing query:', error);
            throw error;
        }
    }

    // static async getUserById(id) {
    //     try {
    //         const connection = await pool.getConnection();
    //         const [rows, fields] = await connection.query('SELECT * FROM user WHERE id = ?', [id]);
    //         connection.release();
    //         return rows[0];
    //     } catch (error) {
    //         console.error('Error executing query:', error);
    //         throw error;
    //     }
    // }

    async createUser(user) {
        try {
            const connection = await pool.getConnection();
            const query = `
                INSERT INTO user (id, name, email, password, gender, age)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            const { id, name, email, password, gender, age } = user;
            const values = [id, name, email, password, gender, age];
            await connection.query(query, values);
            connection.release();
            return { success: true, message: 'User created successfully' };
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }

    async updateUser(userId, User) {
        try {
            const connection = await pool.getConnection();
            const query = `
                UPDATE user
                SET name = ?, email = ?, password = ?, gender = ?, age = ?
                WHERE id = ?
            `;
            const { name, email, password, gender, age } = User;
            const values = [name, email, password, gender, age, userId];
            await connection.query(query, values);
            connection.release();
            return { success: true, message: 'User updated successfully' };
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const connection = await pool.getConnection();
            await connection.query('DELETE FROM user WHERE id = ?', [id]);
            connection.release();
            return { success: true, message: 'User deleted successfully' };
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
}

export default UserModel;
