import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-northeast-2_Bkxn8C0JS",
    ClientId: "3qqcriqkqn79eujqal4bhr75ot",
};
export default new CognitoUserPool(poolData);