import { useState } from "react";
import { login } from "../services/authApi";

function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        try{
            const response = await login(email, password);

            console.log("Login successfully", response.data);
        }
        catch(error) {
            console.log("error", error);

            if(error.response)
            {
                console.log("Status:", error.response.status);
                console.log("Response:", error.response.data);
            }
        }
    };

    return (
        <div className="min-h-screen flex bg-white">

            {/* ================= LEFT SIDE ================= */}

            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">

                {/* Decorative circles */}

                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/40" />

                <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-emerald-200/30" />


                <div className="relative z-10 flex flex-col w-full p-12 xl:p-16">

                    {/* Logo */}

                    <div className="flex items-center gap-3">

                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-600 text-white text-2xl font-bold shadow-lg shadow-emerald-600/20">
                            +
                        </div>

                        <span className="text-2xl font-bold text-emerald-800">
                            HealthCare
                        </span>

                    </div>


                    {/* Main Content */}

                    <div className="flex flex-1 flex-col justify-center max-w-xl">

                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-700">
                            Healthcare Management
                        </p>

                        <h1 className="text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-slate-800">

                            Your health,

                            <span className="block text-emerald-600">
                                our priority.
                            </span>

                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">

                            Manage your healthcare journey with ease.
                            Connect with doctors, book appointments,
                            and keep your health information organized.

                        </p>


                        {/* Features */}

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-700">
                                        Trusted Healthcare
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Access quality healthcare services
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center gap-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-700">
                                        Easy Appointments
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Book and manage appointments easily
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center gap-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-700">
                                        Secure & Private
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Your healthcare data stays protected
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Footer */}

                    <p className="text-sm text-slate-400">
                        © 2026 HealthCare Management
                    </p>

                </div>

            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-10 sm:px-10">

                <div className="w-full max-w-md">


                    {/* Mobile Logo */}

                    <div className="flex lg:hidden items-center justify-center gap-3 mb-12">

                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600 text-white text-xl font-bold">
                            +
                        </div>

                        <span className="text-xl font-bold text-emerald-800">
                            HealthCare
                        </span>

                    </div>


                    {/* Login Header */}

                    <div className="mb-8">

                        <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                            Welcome back
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Sign in to continue to your account
                        </p>

                    </div>


                    {/* Login Form */}

                    <form onSubmit={handleSubmit} className="space-y-6">


                        {/* Email */}

                        <div>

                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Email address
                            </label>


                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                required
                            />

                        </div>


                        {/* Password */}

                        <div>

                            <div className="mb-2 flex items-center justify-between">

                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-slate-700"
                                >
                                    Password
                                </label>

                                <a
                                    href="#"
                                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    Forgot password?
                                </a>

                            </div>


                            <div className="relative">


                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-16 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                    required
                                />


                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>

                        </div>


                        {/* Remember */}

                        <div className="flex items-center">

                            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-500">

                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 accent-emerald-600"
                                />

                                Remember me

                            </label>

                        </div>


                        {/* Login Button */}

                        <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-emerald-600/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 active:scale-[0.99]"
                        >

                            Sign in

                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>

                        </button>

                    </form>


                    {/* Register */}

                    <div className="mt-8 text-center text-sm text-slate-500">

                        Don't have an account?

                        <a
                            href="#"
                            className="ml-1 font-semibold text-emerald-600 hover:text-emerald-700"
                        >
                            Create account
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;