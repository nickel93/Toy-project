import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../../auth/UserPool"
const AccountContext = createContext();
const Accounts = (props) => {
    const getSession = async () =>
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession(async (err, session) => {
                    if (err) {
                        reject();
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const results = {};
                                    for (let attribute of attributes) {
                                        const { Name, Value } = attribute;
                                        results[Name] = Value;
                                    }
                                    resolve(results);
                                }
                            });
                        });
                        const token = session.getIdToken().getJwtToken();

                        resolve({
                            user,
                            headers: { Authorization: token },
                            ...session,
                            ...attributes,
                        });
                    }
                });
            } else {
                reject();
            }
        });

    const authenticate = async (Username, Password) => {
        await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("성공~", data);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.log("실패", err);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired:", data);
                    resolve(data);
                },
            });
        });
    };

    return (
        <AccountContext.Provider value={{ authenticate, getSession }}>
            {props.children}
        </AccountContext.Provider>
    );
};

export { Accounts, AccountContext };