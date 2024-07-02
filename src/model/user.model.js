
import pool from '../database/database.config';

class UserModel {
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

    async getUserByEmail(email) {
        try {
            const connection = await pool.getConnection();
            const query = `
                SELECT * FROM user WHERE email = ?
            `;
            const values = [email];
            const [row, fields] = await connection.query(query, values);
            connection.release();
            console.log("user = ", row);
            if (row.length > 0) {
                console.log("User found: ", row[0]);
                return row[0];
            } else {
                console.log("No user found with the email: ", email);
                return null;
            }
        }catch(error) {
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
                INSERT INTO user (id, name, email, password, gender, age, salt)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            const { id, name, email, password, gender, age, salt } = user;
            const values = [id, name, email, password, gender, age, salt];
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
