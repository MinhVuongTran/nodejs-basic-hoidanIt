import pool from '../configs/connectDB';

const getHomePage = async (req, res) => {
    let data = [];
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

export { getHomePage, getDetailPage };
