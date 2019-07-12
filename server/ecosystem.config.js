module.exports = {
  apps: [{
    name: 'seabay',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-222-240-36.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/seabay.pem',
      ref: 'origin/master',
      repo: 'git@github.com:seabay-hratx42-fec/similar-items.git',
      path: '/home/ubuntu/seabay',
      'post-deploy': 'npm install && pm2 startOrRestart ~/seabay/source/server/ecosystem.config.js'
    }
  }
}