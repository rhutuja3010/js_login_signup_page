console.log("...**...WELCOME TO LOGIN AND SIGN UP PAGE...**...")

//*********** **** PASSWORD_FUNCTION **** ************ //

function signup_password(password){

    if (password.length>=8 || password.length<=18 ){
        if (password.match(/[A-Z]/g)){
            if (password.match(/[a-z]/g)){
                if (password.includes("@") || password.includes("#") || password.includes("!") || password.includes("$")|| password.includes("&")){
                    if (password.match(/[1-9]/g)){
                        console.log("this is stong password")
                    }else{
                        console.log("wrong password")
                        let user=require("readline-sync")
                        let password=user.question("enter the password :")
                        signup_password(password)
                    }
                }else{
                    console.log("wrong special chr")
                    let password=user.question("enter the password :")
                    signup_password(password)
                }

            }else{
                console.log("not lower_case chr")
                let password=user.question("enter the password :")
                signup_password(password)
            }
        }else{
        console.log("not upper_case chr")
        let password=user.question("enter the password :")
        signup_password(password)
        }
    }else{
        console.log("length is not correct")
        let password=user.question("enter the password :")
        signup_password(password)

    }
}

//*********** **** CONFIRM_PASSWORD_FUNCTION **** ************ //

function confirmpassword(password,password1){
    if (password==password1){
        console.log("Password is correct ")
    }else{
        console.log("confirmpassword is wrong")
        let userinput=require("readline-sync")
        let password1=userinput.question("again enter the confirmpassword")
        confirmpassword(password,password1)
    }
}


//********** ******** START_CODE_HEAR : LOGIN_SIGNUP_PAGE ********** **************//


let input=require("readline-sync")
let user = input.question("you want to do login or signup :")
if (user=="signup"){
    const fs=require('fs')
    let file=fs.existsSync("login_signup_page.txt")
    if (file==false){
        username=input.question("enter the username :")
        password=input.question("enter the password  :")
        signup_password(password)
        password1 =input.question("enter the password confirm password :")
        confirmpassword(password,password1)
        console.log("congrats",username,"you are signed up successfully")
        date_of_birth=input.questionInt("enter the date of birth  :")
        hobby=input.question("enter the hobbys :")
        gender=input.question("enter the gender :")
        description=input.question("enter the description :")   
        mylist=[]
        information={}
        name1=["username","password","date_of_birth","hobby","gender","description"]
        infor=[username,password,date_of_birth,hobby,gender,description]
        for (let i=0;name1.length>i;i++){
            information[name1[i]]=infor[i]
        }
        mylist.push(information)
        const string1=JSON.stringify(mylist,null,3)
        fs.appendFileSync("login_signup_page.txt",string1)


    }else if (file==true){
        if (user=="signup"){
            username=input.question("enter the username :")
            password=input.question("enter the password  :")
            signup_password(password)
            password1 =input.question("enter the password confirm password :")
            confirmpassword(password,password1)
            read=fs.readFileSync("login_signup_page.txt")
            if(read.includes (username)){
                console.log("file is already exist")
            }else{
                console.log("congrats",username,"you are signed up successfully")
                date_of_birth=input.question("enter the date of birth")
                hobby=input.question("enter the hobbys :")
                gender=input.question("enter the gender :")
                description=input.question("enter the description :") 
                information={}
                name1=["username","password","date_of_birth","hobby","gender","description"]
                infor=[username,password,date_of_birth,hobby,gender,description]
                for (let i=0;name1.length>i;i++){
                    information[name1[i]]=infor[i]}
                read_data=fs.readFileSync("login_signup_page.txt","utf-8")
                const string1=JSON.parse(read_data)
                string1.push(information)
                fs.writeFileSync("login_signup_page.txt",JSON.stringify(string1,null,3))
            }
        }
    }
}
else if (user=="login"){
        username2=input.question("enter the username :")
        password2=input.question("enter the password :")
        const fs=require('fs')
        data= fs.readFileSync("login_signup_page.txt","utf-8")
        const read_data=JSON.parse(data)
        let flag = true;
        for(let i=0;read_data.length>i;i++){
            if (read_data[i]["password"]==password2 ){
                console.log("login successfully")
                console.log("Your Name is",read_data[i]["username"])
                console.log("and your data is :- ")
                console.log(read_data[i]);
                flag=false;
                break;
            }
        }
    if(flag==true)
    console.log("Invalid userInfo")
}
    
