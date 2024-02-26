function Register() {
    return ( 
        <>
        <div className="w-75 m-auto p-5">
            <h2>Register now :</h2>

            <form action="">

                <label className="mt-2" htmlFor=""> Name:</label>
                <input type="text" id="name" placeholder="name" className="form-control " />

                <label className="mt-2" htmlFor=""> Email:</label>
                <input type="email" id="name" placeholder="Email" className="form-control " />

                <label className="mt-2" htmlFor=""> Password:</label>
                <input type="password" id="name" placeholder="Password" className="form-control " />

                <label className="mt-2" htmlFor=""> Re Password:</label>
                <input type="password" id="name" placeholder="Re Password" className="form-control " />

                <label className="mt-2" htmlFor=""> Phone:</label>
                <input type="tel" id="name" placeholder="Phone" className="form-control " />
                <button type="submit" className="btn bg-main text-white ms-auto mt-2"> Register</button>
            </form>
        </div>
        </>
     );
}

export default Register;