import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/General/Input/Input';

import { login } from '../../actions/auth/actions';

function LoginPage() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const logMeIn = () => {
        dispatch(login(data));
    };

    return (
        <React.Fragment>
            <h2>Login</h2>
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

export default LoginPage;