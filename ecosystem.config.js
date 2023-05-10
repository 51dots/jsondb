module.exports = {
    apps: [
      {
        name: 'my-json-server',
        script: 'json-server',
        args: ['--watch', 'db.json', '--port', '80'],
        watch: true,
        env: {
          HOST: '0.0.0.0', // listen on all interfaces
          PORT: 80,
        },
      },
    ],
  };
  