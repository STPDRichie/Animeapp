import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/General/Input/Input';
import Button from '../../components/General/Button/Button';

import { login } from '../../actions/auth/actions';

function LoginPage() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    return (
        <div className="login-page">
            <div className="login-form">
                <div className="login-form__title">Log in</div>
                <div className="login-form__input-block input-block">
                    <Input
                        id="email"
                        name="email"
                        label="Email"
                        value={data.email}
                        onChange={(value) => setData({ ...data, email: value })}
                    />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        value={data.password}
                        onChange={(value) =>
                            setData({ ...data, password: value })
                        }
                    />
                </div>
                <Button onClick={() => dispatch(login(data))}>Submit</Button>
            </div>
        </div>
    );
}

export default LoginPage;
