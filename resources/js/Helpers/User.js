import Token from './Token';
import AppStorage from './AppStorage';

class User {
    login(data) {
        // console.log(data);
        axios.post('/api/auth/login',data)
            .then(res => {
                // console.log(res.data)
                // Token.payload(res.data.access_token)
                this.responseAfterLogin(res);
            })
            .catch(err => console.log(err.res.data))
    }

    responseAfterLogin(res) {
        Token.isVaild(res.data.access_token);
        const token = res.data.access_token;
        const user = res.data.user;
        if (Token.isVaild(res.data.access_token)) {
            AppStorage.store(token, user);
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        // console.log(storedToken);
        if (storedToken) {
            return Token.isVaild(storedToken) ? true : false;
        }
        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
    }

    name() {
        if(this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    id() {
        if(this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }
}

export default User = new User();
