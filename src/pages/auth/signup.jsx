import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/General/Input/Input';

import { signup } from '../../actions/auth/actions';

function SignupPage() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const logMeIn = () => {
        dispatch(signup(data));
    };

    return (
        <React.Fragment>
            <h2>Signup</h2>
            <Input
                name="name"
                value={data.name}
                onChange={(value) => setData({ ...data, name: value })}
            />
            <Input
                name="email"
                value={data.email}
                onChange={(value) => setData({ ...data, email: value })}
            />
            <Input
                name="password"
                value={data.password}
                onChange={(value) => setData({ ...data, password: value })}
            />
            <button onClick={logMeIn}>Submit</button>
        </React.Fragment>
    );
}

export default SignupPage;
