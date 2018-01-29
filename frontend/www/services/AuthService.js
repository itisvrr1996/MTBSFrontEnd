

angular
    .module('starter.services', [])
    .service('AuthService', Service)


function Service($state, $localStorage, $http) {


    this.user = {};
    this.BASE = 'http://10.4.15.43:8080/BookMyTicket'
    this.login = function (email, password) {
        let promise = new Promise((res, rej) => {
            $http.post(this.BASE + '/login', {
                email: email,
                password: password
            }).then(
                (data) => {
                    console.log('Succesfully Logged In', data);
                    res(data);
                },
                (eror) => {
                    console.log('Error', eror);
                    rej(eror);
                }
                )
        });

        return promise;

    }
    var getDateFromDateTime = function(date) {

        date = new Date(date); //Using this we can convert any date format to JS Date
    
        var mm = date.getMonth() + 1; // getMonth() is zero-based
    
        var dd = date.getDate();
    
        if(mm<10){
          mm="0"+mm;
        }
        if(dd<10){
          dd="0"+dd;
        }
        return [date.getFullYear(), mm, dd].join('-'); // padding
      };
    this.register = function (form) {
        console.log(arguments);
        let p1  = new String(form.password);
        let p2 =  new String(form.reTypePassword);
        
        let d = getDateFromDateTime(form.dob);
        let promise = new Promise((res, rej) => {
            if (p1.valueOf() === p2.valueOf()) {
                $http.post(this.BASE+'/register',{
                    email:form.email,
                    firstName:form.firstName,
                    lastName:form.lastName,
                    password:form.password,
                    contactNo:form.contactNo,
                    dob:d,
                    type:"user"
                }).then((data)=>{
                    console.log('registration Success');
                    res(data);
                }).catch((er)=>{
                    rej(er);
                })
                
            } else {
                rej('Password Mismatch');
            }
        })
        return promise;

    }

    this.logout = function () {
        if ($localStorage.user.email != undefined) {
            $localStorage.user = {};
            this.user = {}
            return true;
        }
        return false;
    }

}
