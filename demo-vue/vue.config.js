module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://169.254.203.11:7001',
                pathRewrite: {'^/api' : ''}, 
                changeOrigin: true
            }
        }
    }
}