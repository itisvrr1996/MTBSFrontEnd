

angular
    .module('starter.services',[])
    .service('AuthService', Service)


function Service($state,$localStorage) {

 
    this.user = {};
    this.login = function(email,password){
        if(this.email!=undefined && this.email === email){
            return this.user.password === password;
        }
        return false;
    }
    this.register = function(email,firstName,lastName,password,retypePassword) {
        
        if(password === retypePassword){
            let u = this.user;
            u.email = email;
            u.firstName = firstName;
            u.password = password;
            $localStorage.user = u;
            this.user = {};
            return true;
        } else {
            return false;
        }
    }

    this.logout = function () {
        if($localStorage.user.email !=undefined){
            $localStorage.user = {};
            this.user = {}
            return true;
        }
        return false;
    }
    
}
