class FlowsAPIClient{
    constructor(login, password, url) {
        this._login = login;
        this._password = password;
        this._url = url;
        this.auth_token = "";
    }

    login(toto) {
        var endpoint = "/auth/api/v1/auth";
        var values = {'login':this._login,'password': this._password };
        $.ajax({
            context: this,
            type: 'POST',
            crossDomain: true,
            url: this._url + endpoint,
            data: JSON.stringify(values),
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            success: function(data){
                this.token = data['token']
                console.log('Token: ' + this.token)
            },
            failure: function(errMsg) {},
            error: function(errMsg) {}
        });
    }

    _request(method, endpoint, data) {
        var res;
        $.ajax({
            context: this,
            type: method,
            crossDomain: true,
            headers: {'X-Surycat-Token': this.token},
            url: this._url + endpoint,
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(data){
                res = data;
            },
            failure: function(errMsg) {
                res = errMsg;
                console.log(errMsg)
            },
            error: function(errMsg) {
                res = errMsg;
                console.log(errMsg)
            }
        });
        return res
    }
    put(endpoint, data) {
        return this._request('put', endpoint, data)
    }

    get(endpoint, data) {
        return this._request('get', endpoint, data)
    }

    patch(endpoint, data) {
        return this._request('patch', endpoint, data)
    }

    post(endpoint, data) {
        return this._request('post', endpoint, data)
    }

    create_or_update_contact(first_name, last_name, mobile, phone_work, phone_home, email) {
        /* Loads contact list only if not yet loaded */
        if (this.contacts === undefined) {
            this.list_contacts();
            console.log('---- BUILDING LOCAL LIST OF CONTACTS ----')
        }

        var endpoint = "/addressbook/api/v1/contacts"
        var data = {
            "email":email,
            "first_name":first_name,
            "last_name":last_name,
            "mobile":mobile,
            "phone_home":phone_home,
            "phone_work":phone_work
        }

        /* Check if exists */
        var match;
        $.each(this.contacts, function(k, v) {
            //display the key and value pair
            /*console.log(v['first_name'] + ' ' + v['last_name'])*/
            if ( first_name === v['first_name'] &&  last_name === v['last_name'] ) {
                match = v;
                return false;
            }
        });

        if (match != undefined) {
            /*console.log('Contact already exists: ' + match['first_name'] + ' ' + match['last_name'])*/
            // check if update needed
            var update = false
            if (email != match['email'] && match['email'] != null) {
                update = true;
                match['email'] = email;
            }
            if (mobile != match['mobile'] && match['mobile'] != null) {
                update = true;
                match['mobile'] = mobile;
            }
            if (phone_home != match['phone_home']  && match['phone_home'] != null) {
                update = true;
                match['phone_home'] = phone_home;
            }
            if (phone_work != match['phone_work'] && match['phone_work'] != null) {
                update = true;
                match['phone_work'] = phone_work;
            }
            if (update === true) {
                var res = this.patch(endpoint + "/" + match['uid'], match)
            }
            
            /*console.log(JSON.stringify(match))*/
            console.log(' CONTACT FROM LIST (no request)')
            return match
            console.log(match['uid'])
        } else {
            console.log('New contact created: ' + data['first_name'] + ' ' + data['last_name'])
            var res = this.put(endpoint, data)
            this.contacts.push(res)
            return res
        }
    }

    list_contacts() {
        var endpoint = "/addressbook/api/v1/contacts"
        var r = this.get(endpoint)
        this.contacts = r;
        return r
    }

    list_groups() {
        var endpoint = "/addressbook/api/v1/groups"
        var r = this.get(endpoint)
        this.groups = r;
    }
}





