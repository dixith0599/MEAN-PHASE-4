
module.exports = function (grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        autoprefixer:{
            options:{
                browser:['last version','chrome']
            },
            your_target:{
                reload:['html/index.html']
            }
        },

        watch:{
            files:['html/index.html'],
            tasks:['autoprefixer']
        },

        cssmin:{
            target:{
                files:{
                    'css/styleprefixed.min.css':['css/style.css']
                }
            }
        },

        uglify:{
            target:{
                files:{
                    'js/output.min.js':['js/*.js']
                }
            }
        },
        
        imagemin:{
            files:{
                expand:true,
                cwd:'images/',
                src:['**/*.{jpg,png,gif}'],
                dest:'image/build'
            }
        },
        copy:{
            src:'css/style.css',
            dest:'css/style.css'
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.registerTask("default",['autoprefixer']);
}