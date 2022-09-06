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
export { getHomePage, getDetailPage, createUser };
