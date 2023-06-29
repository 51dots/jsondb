module.exports = {
    apps: [
      {
        name: 'my-json-server',
        script: 'json-server',
        args: ['--watch', 'db.json', '--port', '80'],
        watch: true,
        env: {
          HOST: 'localhost', // listen on all interfaces
          PORT: 3000,
        },
      },
    ],
  };
  