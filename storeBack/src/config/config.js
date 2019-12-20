module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '3613',
    database: 'store',
    define:{
        timestamps:true,
        underscored:true,
    },
    secretToken: 'udfahufhsau',
    jwt:{
        secret: 'S5p1TX96',
        session: {session:false},
    }
  };