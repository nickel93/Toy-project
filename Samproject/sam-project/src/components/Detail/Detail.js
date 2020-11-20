import React, { useState, useContext } from 'react';
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { updateUserPosition } from "../../api/noteAPI";
import { AccountContext } from "../Auth/Accounts"
const Detail = (props) => {
    const [family_name, setFamily_name] = useState();
    const [given_name, setGiven_name] = useState();
    const [password, setPassword] = useState();
    const [position, setposition] = useState();
    const { authenticate } = useContext(AccountContext);

    const updateName = () => {
        const attributes = [
            new CognitoUserAttribute({
                Name: "family_name",
                Value: family_name
            }),
            new CognitoUserAttribute({
                Name: "given_name",
                Value: given_name
            })
        ];
        props.user.user.updateAttributes(attributes, (err, results) => {
            if (err) {
                console.log("실패" + err)
            }
            else {
                console.log("성공!" + results);
            }
        })
    };

    const updatePosition = () => {
        console.log(props.user.email)
        updateUserPosition(props.user.sub, props.user.email, position).then((data) => {
            console.log("성공!" + data);
        });

    };
    const updatePassword = () => {
        authenticate(props.user.email, password).then(() => {
            props.user.user.changePassword(password, password, (err, results) => {
                if (err) {
                    console.log(err.code);
                }
                else {
                    console.log(results);
                }
            })
        }).catch(() => {
            console.log("패스워드가 틀림");
        })
    };
    return (
        <div>
            <h3>Email:</h3>{props.user.email}

            <h3>Affiliation</h3>{props.user.family_name}
            <h3>Position</h3>{props.position.position}
            <div>
                <span><h3>Name</h3></span>
                <span><input onChange={(e) => setFamily_name(e.target.value)} /></span>
                <span><input onChange={(e) => setGiven_name(e.target.value)} /></span>
                <span><button onClick={updateName}>이름 바꾸기</button></span>
            </div>
            <div>
                <span><h3>Position</h3></span>
                <span><input onChange={(e) => setposition(e.target.value)} /></span>
                <span><button onClick={updatePosition}>Position 바꾸기</button></span>
            </div>
            <div>
                <span><h3>Password change</h3></span>
                <span><input placeholder="oldpassword" onChange={(e) => setPassword(e.target.value)} /></span>
                <span><input placeholder="newpassword" onChange={(e) => setPassword(e.target.value)} /></span>
                <span><button onClick={updatePassword}>Password 바꾸기</button></span>
            </div>
        </div>
    );


};


export default Detail;