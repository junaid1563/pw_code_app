module.exports = {
    apps: [
      {
        name: "PW Coupon App",
        script: "npm", // npm start
        args: "run preprods", // Check package json above
        listen_timeout: 12000, // Hack Without timeout we will get downtime in deployment
        cwd: "/home/ec2-user", // Command execution path
        instances: "max", // Max Use all the CPU
        exec_mode: "cluster", // Clustor Mode
        increment_var: "PORT", // It will auto increment port your app will run on 3001, 3002 and so on
        env_production: {
          PORT: 80, // Default Port
          NODE_ENV: "production", // Production Env
        },
        // You can configure for multiple environments
      },
    ],
  };
