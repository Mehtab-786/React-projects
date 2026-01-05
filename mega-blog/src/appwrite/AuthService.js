import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf.js'

class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteId)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    };

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({ userId: ID.unique(), email, password, name });
            if (userAccount) {
                return this.loginAccount({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error('Account Creation Error :: ', error);
        }
    };

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({ email, password })
        } catch (error) {
            console.error('Login error ::', error)
        }
    };

    async getCurrentUser() {
        try {
            return this.account.get()
        } catch (error) {
            console.log('User not loggin In ::', error)
        };
        return null
    }

    async logoutAccount() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log(error)
        }
    }


};

const authService = new AuthService()
export default authService;