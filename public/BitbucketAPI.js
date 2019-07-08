var BitbucketAPI = (function() {

    var tokenPromise;

    var constructor = function(key, secret) {
        // promise
        tokenPromise = new Promise(function(resolve, reject) {
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                if(ajax.readyState == 4 && ajax.status == 200) {
                    var token = JSON.parse(ajax.responseText).access_token;
                    resolve(token);
                }
                if(ajax.readyState == 4) {
                    reject("Provjerite ispravnost Vašeg key-a i secret-a!");
                }
            }
    
            ajax.open("POST", "https://bitbucket.org/site/oauth2/access_token", true);
            ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            ajax.setRequestHeader("Authorization", "Basic " + btoa(key + ':' + secret));
            ajax.send("grant_type=" + encodeURIComponent("client_credentials"));
        });

        return {
            GetData:function(searchString, callback) {
                tokenPromise.then(function(token) {
                    var ajax = new XMLHttpRequest();
                    ajax.onreadystatechange = function() {
                        if(ajax.readyState == 4 && ajax.status == 200) {
                            console.log(JSON.parse(ajax.responseText));
                            var json = JSON.parse(ajax.responseText);
                            callback(null, json);

                        }
                        if(ajax.readyState == 4) {
                            callback(ajax.status, null);
                        }
                    }
    
                    // query who searches for repositories with searchString in their name
                    var url = 'https://api.bitbucket.org/2.0/repositories?role=member&q=(name+%7E+%22' + searchString + '%22)'; 
                    
                    ajax.open("GET", url, true); 
                    ajax.setRequestHeader("Authorization", "Bearer " + token);
                    ajax.send();
                }).catch(function(message) {
                    callback(0, null);
                    alert(message);
                });
            }
        }
    }
    return constructor;
}());