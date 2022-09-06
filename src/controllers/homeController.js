import pool from '../configs/connectDB';

const getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', {
        dataUsers: rows,
    });
};

const getDetailPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('SELECT * from `users` WHERE id = ?', [id]);

    return res.json(user);
};

const createUser = async (req, res) => {
    let { firstName, lastName, age, email, address } = req.body;
    await pool.execute('insert into `users` (firstName, lastName, age, email, address) values (?, ?, ?, ?, ?)', [
        firstName,
        lastName,
        age,
        email,
        address,
    ]);
    return res.redirect('back');
};

const deleteUser = async (req, res) => {
    let id = req.params.id;
    await pool.execute('DELETE from `users` WHERE id = ?', [id]);
    return res.redirect('back');
};

const editUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('SELECT * from `users` WHERE id = ?', [id]);
    return res.render('update.ejs', {
        user: user[0],
    });
};

const saveEditUser = async (req, res) => {
    let id = req.params.id;
    let { firstName, lastName, age, email, address } = req.body;
    await pool.execute('UPDATE `users` SET firstName = ?, lastName = ?, age = ?, email = ?, address = ? where id = ?', [
        firstName,
        lastName,
        age,
        email,
        address,
        id,
    ]);
    return res.redirect('/');
};
export { getHomePage, getDetailPage, createUser, deleteUser, editUser, saveEditUser };
