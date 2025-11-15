const { encryptPswd } = require('../helper/encryptPassword.js')



module.exports = (sequelize, DataTypes) => {

  const regisUser = sequelize.define("regisUser",  {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validatepassword(value){
          if(value.length > 8){

            if(value.match(/[A-Z]/)){

              if(value.match(/[a-z]/)){

                if(value.match(/[0-9]/)){

                  let specialRegex = /[$&+,:;=?@#|'<>.^*()%!-]/ 

                  if(value.match(specialRegex)){
                    console.log('ok')
                  }
                  else{
                    throw new Error('No special characters found in the password.')
                  }
                }
                else{
                  throw new Error('No numbers found in the password.')
                }

              }
              else{
                throw new Error('No lowercase letters found in password.')
              }

            } 
            else{
              throw new Error('No uppercase letters found in password.')
            }    
          }
          else{
            throw new Error('Character count lesser than 8.')
          }
        }
      }
    },


    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        validateAge(value){
          if(value < 5 && value > 100){
            throw new Error('Invalid age.')
          }
        } 
      }
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        wrongRole(value){
          if(value != 'user' && value != 'admin'){
            throw new Error('Role must be user or admin')
          }
        }
      }
    },

    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        
        let firstLetter = value.charAt(0);
        firstLetter = firstLetter.toUpperCase();

        const final = firstLetter + value.slice(1);

        this.setDataValue('firstname', final)
      }
    },
    
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        let firstLetter = value.charAt(0);
        firstLetter = firstLetter.toUpperCase();

        const final = firstLetter + value.slice(1);

        this.setDataValue('lastname', final)
      }
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'active'
    },

    loginStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Not logged in'
    }, 
    
    // hooks: {
    //   beforeCreate: async (user, options) => {
    //     user.password = await encryptPswd(user.password)
    //   }
    // }
    
  });

  regisUser.beforeCreate(async (user, options) => {
    user.password = await encryptPswd(user.password)
    // console.log('Hook is being run')
    // user.status = 'active';
    // user.loginStatus = 'Not logged in';
    // user.id = 215
  })

  return regisUser


}