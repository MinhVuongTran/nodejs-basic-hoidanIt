import pool from '../configs/connectDB';

export const getAllUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');

    return res.status(200).json({ message: 'oke', data: rows });
};

export const createUser = async (req, res) => {
    let { firstName, lastName, age, email, address } = req.body;

    if (!firstName || !lastName || !age || !email || !address) {
        return res.status(200).json({ message: 'missing required params' });
    }

    await pool.execute('insert into `users` (firstName, lastName, age, email, address) values (?, ?, ?, ?, ?)', [
        firstName,
        lastName,
        age,
        email,
        address,
    ]);
    return res.status(200).json({ message: 'ok' });
};

export const updateUser = async (req, res) => {
    let id = req.params.id;
    let { firstName, lastName, age, email, address } = req.body;

    if (!firstName || !lastName || !age || !email || !address || !id) {
        return res.status(200).json({ message: 'missing required params' });
    }

    await pool.execute('UPDATE `users` SET firstName = ?, lastName = ?, age = ?, email = ?, address = ? where id = ?', [
        firstName,
        lastName,
        age,
        email,
        address,
        id,
    ]);

    return res.status(200).json({ message: 'ok' });
};

export const deleteUser = async (req, res) => {
    let id = req.params.id;

    if (!id) {
        return res.status(200).json({ message: 'missing required params' });
    }

    await pool.execute('DELETE from `users` WHERE id = ?', [id]);

    return res.status(200).json({ message: 'ok' });
};
