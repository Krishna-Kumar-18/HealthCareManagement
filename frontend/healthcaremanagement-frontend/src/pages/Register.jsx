import { useState } from "react";
import { register } from "../services/authApi";

function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [roleName, setRoleName] = useState("admin");

    // Patient fields
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    // Doctor fields
    const [departmentName, setDepartmentName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experience, setExperience] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const registerData = {
            name,
            email,
            password,
            roleName
        };

        // Patient specific data
        if (roleName === "patient") {

            registerData.gender = gender;
            registerData.phoneNumber = phoneNumber;
            registerData.dateOfBirth = dateOfBirth;

        }

        // Doctor specific data
        if (roleName === "doctor") {

            registerData.departmentName = departmentName;
            registerData.specialization = specialization;
            registerData.experience = Number(experience);

        }

        console.log("Register Data:", registerData);

        try {

            const response = await register(registerData);

            console.log("Registration successful:", response);

            alert("Registration successful!");

        } catch (error) {

            console.log("Registration error:", error);

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

                            Start your

                            <span className="block text-emerald-600">
                                healthcare journey.
                            </span>

                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">

                            Create your account and manage your healthcare
                            journey with ease. Connect with doctors, book
                            appointments, and keep your health information organized.

                        </p>


                        {/* Features */}

                        <div className="mt-10 space-y-5">

                            {/* Feature 1 */}

                            <div className="flex items-center gap-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                                    ✓
                                </div>

                                <div>

                                    <h3 className="font-semibold text-slate-700">
                                        Easy Registration
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Create your account in just a few steps
                                    </p>

                                </div>

                            </div>


                            {/* Feature 2 */}

                            <div className="flex items-center gap-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                                    ✓
                                </div>

                                <div>

                                    <h3 className="font-semibold text-slate-700">
                                        Personalized Healthcare
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Get healthcare services based on your role
                                    </p>

                                </div>

                            </div>


                            {/* Feature 3 */}

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

                    <div className="flex lg:hidden items-center justify-center gap-3 mb-10">

                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600 text-white text-xl font-bold">
                            +
                        </div>

                        <span className="text-xl font-bold text-emerald-800">
                            HealthCare
                        </span>

                    </div>


                    {/* Register Header */}

                    <div className="mb-8">

                        <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                            Create your account
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Sign up to get started with Healthcare Management
                        </p>

                    </div>


                    {/* Register Form */}

                    <form onSubmit={handleSubmit} className="space-y-5">


                        {/* ================= NAME ================= */}

                        <div>

                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Full name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                required
                            />

                        </div>


                        {/* ================= EMAIL ================= */}

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


                        {/* ================= ROLE ================= */}

                        <div>

                            <label
                                htmlFor="role"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Register as
                            </label>

                            <select
                                id="roleName"
                                value={roleName}
                                onChange={(e) =>
                                    setRoleName(e.target.value)
                                }
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                            >

                                <option value="admin">
                                    Admin
                                </option>

                                <option value="patient">
                                    Patient
                                </option>

                                <option value="doctor">
                                    Doctor
                                </option>

                            </select>

                        </div>


                        {/* ================================================= */}
                        {/* ================= PATIENT FIELDS ================= */}
                        {/* ================================================= */}

                        {roleName === "patient" && (
                            <>

                                {/* Gender */}

                                <div>

                                    <label
                                        htmlFor="gender"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Gender
                                    </label>

                                    <select
                                        id="gender"
                                        value={gender}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        required
                                    >

                                        <option value="">
                                            Select gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>

                                </div>


                                {/* Phone Number */}

                                <div>

                                    <label
                                        htmlFor="phoneNumber"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="phoneNumber"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        required
                                    />

                                </div>


                                {/* Date Of Birth */}

                                <div>

                                    <label
                                        htmlFor="dateOfBirth"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Date of Birth
                                    </label>

                                    <input
                                        id="dateOfBirth"
                                        type="date"
                                        value={dateOfBirth}
                                        onChange={(e) =>
                                            setDateOfBirth(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        required
                                    />

                                </div>

                            </>
                        )}


                        {/* ================================================= */}
                        {/* ================= DOCTOR FIELDS ================== */}
                        {/* ================================================= */}

                        {roleName === "doctor" && (
                            <>

                                {/* Department Name */}

                                <div>

                                    <label
                                        htmlFor="departmentName"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Department Name
                                    </label>

                                    <input
                                        id="departmentName"
                                        type="text"
                                        placeholder="Enter department name"
                                        value={departmentName}
                                        onChange={(e) =>
                                            setDepartmentName(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        required
                                    />

                                </div>


                                {/* Specialization */}

                                <div>

                                    <label
                                        htmlFor="specialization"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Speciality
                                    </label>

                                    <input
                                        id="specialization"
                                        type="text"
                                        placeholder="Enter your speciality"
                                        value={specialization}
                                        onChange={(e) =>
                                            setSpecialization(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        required
                                    />

                                </div>


                                {/* Experience */}

                                <div>

                                    <label
                                        htmlFor="experience"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Experience (Years)
                                    </label>

                                    <input
                                        id="experience"
                                        type="number"
                                        min="0"
                                        placeholder="Enter your experience"
                                        value={experience}
                                        onChange={(e) =>
                                            setExperience(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        required
                                    />

                                </div>

                            </>
                        )}


                        {/* ================= PASSWORD ================= */}

                        <div>

                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Password
                            </label>

                            <div className="relative">

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Create a password"
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


                        {/* ================= CONFIRM PASSWORD ================= */}

                        <div>

                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Confirm password
                            </label>

                            <div className="relative">

                                <input
                                    id="confirmPassword"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-16 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    {showConfirmPassword
                                        ? "Hide"
                                        : "Show"}
                                </button>

                            </div>

                        </div>


                        {/* ================= REGISTER BUTTON ================= */}

                        <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-emerald-600/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 active:scale-[0.99]"
                        >

                            Create account

                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>

                        </button>

                    </form>


                    {/* ================= LOGIN ================= */}

                    <div className="mt-8 text-center text-sm text-slate-500">

                        Already have an account?

                        <a
                            href="/login"
                            className="ml-1 font-semibold text-emerald-600 hover:text-emerald-700"
                        >
                            Sign in
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;