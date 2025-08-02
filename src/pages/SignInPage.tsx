import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Illustration from "../assets/images/signUpImages/Illustration.svg";
import { Link } from "react-router-dom";

const SignInPage = () => {
    return (
        <section className="h-screen px-[25px] py-[40px] bg-[#F2F2F2]">
            <div className="flex rounded-3xl h-full">
                <div className="bg-[#3F8CFF] text-white w-[50%] rounded-tl-3xl rounded-bl-3xl flex flex-col items-start justify-around py-5 pl-[100px]">
                    <div className="flex items-center gap-[30px]">
                        <Icon.logo />
                        <span className="text-3xl font-[700] ">Woorkroom</span>
                    </div>
                    <span className="max-w-[420px] text-[40px] font-[700]">
                        Your place to work Plan. Create. Control.
                    </span>
                    <img
                        className="max-w-[500px] h-auto"
                        src={Illustration}
                        alt="Illustration"
                    />
                </div>
                <div className="bg-white w-[50%] rounded-tr-3xl rounded-br-3xl shadow-[0px_6px_58px_0px_rgba(196,203,214,0.10)] ">
                    <div className="flex flex-col max-w-[403px] mx-auto items-center pt-[115px]">
                        <h2 className="signin-title text-[22px] text-[#0A1629] font-[700]">
                            Sign In to Woorkroom
                        </h2>
                        <form className="w-full flex flex-col gap-y-[31px] mt-[33px]">
                            <Input
                                inputClassName="w-full"
                                type="email"
                                label="Email Address"
                                placeholder="youremail@gmail.com"
                            />
                            <Input
                                inputClassName="w-full"
                                label="Password"
                                type={"password"}
                                placeholder="••••••••"
                                eyeIcon={true}
                            />
                            <div className="flex justify-between">
                                <div className="flex gap-x-2">
                                    <input id="save-me" type="checkbox" />
                                    <label
                                        htmlFor="save-me"
                                        className="font-medium text-[16px] text-[rgb(125_133_146)]"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <span className="font-medium text-[16px] text-[rgb(125_133_146)] cursor-pointer">
                                    Forgot Password?
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-y-[20px]">
                                <Button
                                    variant="medium"
                                    className="flex items-center gap-x-2"
                                >
                                    Sign In
                                    <Icon.rightArrowIcon />
                                </Button>
                                <Link
                                    to={"/"}
                                    className="font-semibold text-[16px] text-[#3F8CFF]"
                                >
                                    Don’t have an account?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInPage;
