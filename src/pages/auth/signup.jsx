import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/General/Input/Input';
import Button from '../../components/General/Button/Button';

import { signup } from '../../actions/auth/actions';

function SignupPage() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        document.title = 'Signup • Animeapp';
    }, []);

    return (
        <div className="signup-page">
            <div className="signup-form">
                <div className="signup-form__title">Sign up</div>
                <div className="signup-form__input-block input-block">
                    <Input
                        id="name"
                        name="name"
                        label="Name"
                        value={data.name}
                        onChange={(value) => setData({ ...data, name: value })}
                    />
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
                <Button onClick={() => dispatch(signup(data))}>Submit</Button>
            </div>
        </div>
    );
}

export default SignupPage;
