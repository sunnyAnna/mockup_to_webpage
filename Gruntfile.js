module.exports = function(grunt) {
    
require('load-grunt-tasks')(grunt);

grunt.initConfig({
    
    
/*CLEAN*/
    clean: {
      dev: {
        src: ['images'],
      },
    },
   
    
/*MKDIR*/
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },
    
  
/*CONCAT*/
    concat: {
        css: {
            src: ['css/*'],
            dest: 'css/combined.css',
        },
        js: {
            src: ['js/*'],
            dest: 'js/combined.js',
        },
    },
 
    
/*UGLIFY*/
    uglify: {
        js: {
            src: ['js/combined.js'],
            dest: 'js/combined.min.js',
            },
    },  

    
/*POST CSS*/
    postcss: {
        options: {
            processors: [
                require('autoprefixer')({browsers: 'last 2 versions'}),
                require('cssnano')(),
                require('postcss-discard-comments')()
            ]
        },
        css: {
            src: ['css/combined.css'],
            dest: 'css/combined.min.css',
        },
    },
      
    
/*RESPONSIVE IMAGES*/
    responsive_images: {
        dev: {
        options: {
            engine: 'im',
            sizes: [{
                    name: '350',
                    width: 350,
                    quality: 100
            },{                    
                    name: '600',
                    width: 600,
                    quality: 80
            },{                    
                    name: '800',
                    width: 800,
                    quality: 80
            },{
                    name: '1000',
                    width: 1000,
                    quality: 80
            }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_mix/',
          dest: 'images/'
        }]
        }
    },

    
/*WATCH*/
    watch: {
        files: ['css/*', 'js/*', 'images/*'],
        tasks: ['concat', 'uglify', 'postcss', 'responsive_images']
    }
    
});

grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};