const express = require('express');
const Sequelize = require('sequelize');
const app = express();


app.use(express.json());

//TABLE USER
const sequelize_user = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/users.sqlite'
});

const user = sequelize_user.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //role: {
       // type: Sequelize.STRING,
      //  allowNull: false
    //},



});

//TABLE COMMENT
const sequelize_comments = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/comments.sqlite'
});

const comment = sequelize_comments.define('comment', {
    comment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

//TABLE LIKE
const sequelize_like = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/likes.sqlite'
});

const like = sequelize_like.define('like', {
    like_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});



//TABLE POST
const sequelize_post = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/posts.sqlite'
});

const post = sequelize_post.define('like', {
    post_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

sequelize_user.sync();
sequelize_comments.sync();
sequelize_like.sync();
sequelize_post.sync();



function User(user) {

    app.get('/users', (req, res) => {
        user.findAll().then(books => {
            res.json(books);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.get('/user/:id', (req, res) => {
        user.findByPk(req.params.id).then(book => {
            if (!book) {
                res.status(404).send('Book not found');
            } else {
                res.json(book);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.post('/user_Post', (req, res) => {
        user.create(req.body).then(book => {
            res.send(book);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.put('/user_Update/:id', (req, res) => {
        user.findByPk(req.params.id).then(book => {
            if (!book) {
                res.status(404).send('Book not found');
            } else {
                book.update(req.body).then(() => {
                    res.send(book);
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.delete('/user_Delete/:id', (req, res) => {
        user.findByPk(req.params.id).then(book => {
            if (!book) {
                res.status(400).send('Book not found');
            } else {
                book.destroy().then(() => {
                    res.send({});
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });
}

function Comment(comment) {

    app.get('/comments', (req, res) => {
        comment.findAll().then(Comment => {
            res.json(Comment);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.get('/comment/:id', (req, res) => {
        comment.findByPk(req.params.id).then(Comment => {
            if (!Comment) {
                res.status(404).send('Comment not found');
            } else {
                res.json(Comment);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.post('/comment_Post', (req, res) => {
        comment.create(req.body).then(Comment => {
            res.send(Comment);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.put('/comment_Update/:id', (req, res) => {
        comment.findByPk(req.params.id).then(Comment => {
            if (!Comment) {
                res.status(404).send('Comment not found');
            } else {
                Comment.update(req.body).then(() => {
                    res.send(Comment);
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.delete('/comment_Delete/:id', (req, res) => {
        comment.findByPk(req.params.id).then(Comment => {
            if (!Comment) {
                res.status(400).send('Comment not found');
            } else {
                Comment.destroy().then(() => {
                    res.send({});
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });
}

function Like(like) {

    app.get('/likes', (req, res) => {
        like.findAll().then(Like => {
            res.json(Like);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.get('/like/:id', (req, res) => {
        like.findByPk(req.params.id).then(Like => {
            if (!Like) {
                res.status(404).send('Like not found');
            } else {
                res.json(Like);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.post('/like_Post', (req, res) => {
        like.create(req.body).then(Like => {
            res.send(Like);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.put('/like_Update/:id', (req, res) => {
        like.findByPk(req.params.id).then(Like => {
            if (!Like) {
                res.status(404).send('Like not found');
            } else {
                Like.update(req.body).then(() => {
                    res.send(Like);
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.delete('/like_Delete/:id', (req, res) => {
        like.findByPk(req.params.id).then(Like => {
            if (!Like) {
                res.status(400).send('Like not found');
            } else {
                Like.destroy().then(() => {
                    res.send({});
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });
}

function Post(post) {

    app.get('/posts', (req, res) => {
        post.findAll().then(Post => {
            res.json(Post);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.get('/post/:id', (req, res) => {
        post.findByPk(req.params.id).then(Post => {
            if (!Post) {
                res.status(404).send('Post not found');
            } else {
                res.json(Post);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.post('/post_Post', (req, res) => {
        post.create(req.body).then(Post => {
            res.send(Post);
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.put('/post_Update/:id', (req, res) => {
        post.findByPk(req.params.id).then(Post => {
            if (!Post) {
                res.status(404).send('Post not found');
            } else {
                Post.update(req.body).then(() => {
                    res.send(Post);
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });

    app.delete('/post_Delete/:id', (req, res) => {
        post.findByPk(req.params.id).then(Post => {
            if (!Post) {
                res.status(400).send('Post not found');
            } else {
                Post.destroy().then(() => {
                    res.send({});
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    });
}



User(user)
Comment(comment)
Like(like)
Post(post)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));