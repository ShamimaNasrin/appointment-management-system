import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //create user
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const userRole = form.userRole.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });
                toast.success('Signup successfull');

            })
            .catch(err => {
                console.error(err);
                setError(error.message);
                toast.error('Signup failed');
            });
    }

    return (
        <div>
            <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center items-center md:w-1/2 lg:w-2/5 card w-full max-w-sm shadow-2xl bg-base-100 py-12 mx-auto'>
                <h1 className="text-5xl text-center font-bold mb-6">Signup</h1>

                <form onSubmit={handleSignUp} className='w-11/12  p-0 sm:p-1 md:p-4 lg:p-7 mx-auto'>

                    <div className='grid grid-cols-1 gap-4'>

                        <div className="form-control">
                            <input type="text" name='name' placeholder="Your Name" className="input w-full bg-white border-primary" required />
                        </div>

                        <div className="form-control">
                            <input type="email" name='email' placeholder="email" className="input w-full bg-white border-primary" required />
                        </div>

                        <div className="form-control">
                            <input type="password" name='password' placeholder="password" className="input w-full bg-white border-primary" required />
                        </div>

                    </div>

                    <input className='btn w-full mt-7 bg-primary text-white hover:bg-orange-400 border-0' type="submit" value="Signup" />

                    <p className='text-red-500 mt-3'>{error}</p>
                </form>

                <p className='text-center'>Already have an account? <Link className='text-info font-bold' to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;