module.exports = {
  database: {
    client: 'mysql',
    connection: {
      host     : '192.168.99.100',
      user     : 'root',
      password : 'secret',
      database : 'devdb',
      charset  : 'utf8',
      // debug: ['ComQueryPacket']
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
