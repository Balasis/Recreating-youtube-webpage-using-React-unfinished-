var path=require('path');
const BrowserSyncPlugin=require('browser-sync-webpack-plugin');

module.exports={
	entry:['./app.js','./app.scss'],
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'vagelis')
	},
	mode:'development',
	module:{
		rules:[
				{
			 		test: /\.(js|jsx|tsx|ts)$/,
      				exclude: /(node_modules|bower_components)/,
      				use: {
       						 loader: 'babel-loader',
       							 options: {
         	 								presets: [
         	 								'@babel/preset-env',
         	 								'@babel/preset-react'
         	 								],
         						 			plugins: [
         	 								'@babel/plugin-proposal-object-rest-spread'
         									 ]
        							}
     			 	 }

				},
                 {  
                    include:path.resolve(__dirname,'app.scss'),                  
                    use:[   
                            {
                                loader:'file-loader',
                                options:{outputPath:'../',name:'[name].css'}
                            },
                            {
                                loader:'sass-loader'
                            }                        

                        ]

                 }


		]
	},
	plugins:[
	new BrowserSyncPlugin({
		host:'localhost',
		port:3000,
		files:['../*.php',"../*.css"],
		proxy:"localhost:80",
		snippetOptions: {
        rule: {
            match: /$/
        }
    }


	})


	]
};

  