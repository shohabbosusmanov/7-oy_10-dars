import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import ProgressStepAuth from "../components/ui/progress-step-auth";
import useStepProgressAuth from "../hooks/requests/useStepProgressAuth";

const SignUpPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { progressData, setProgressData } = useStepProgressAuth();
    const handleSavePreviusStep = () => {
        const findStep = progressData.find(
            (step) => step.step === currentStep - 1
        );
        findStep.isSuccess = true;
        setProgressData([...progressData]);
    };
    const incrementCurrentStep = () => {
        if (currentStep <= 4) {
            setCurrentStep((prevState) => prevState + 1);
        } else return;
    };
    useEffect(() => {
        if (currentStep !== 1) {
            handleSavePreviusStep();
        }
    }, [currentStep]);
    return (
        <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
            <div className="flex h-full gap-x-8">
                <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
                    <div className="flex flex-col gap-y-14 h-full items-start">
                        <div className="mt-4 text-white gap-x-8">
                            <Icon.logo />
                        </div>
                        <p className="description text-white text-[40px] max-w-[400px]">
                            Get started
                        </p>
                        <ProgressStepAuth
                            steps={progressData}
                            currentStep={currentStep}
                        />
                    </div>
                </div>
                <div className="w-[100%] max-w-[70%] rounded-[24px]  bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
                    <div className="flex flex-col max-w-[403px] mx-auto items-center pt-[115px]">
                        <span className="text-[14px] text-[#3F8CFF] font-[700]">
                            STEP{" "}
                            {currentStep > progressData.length
                                ? progressData.length
                                : currentStep}
                            /{progressData.length}
                        </span>
                        <h2 className="text-[22px] text-[#0A1629] font-[700]">
                            Valid your phone
                        </h2>
                        <Input
                            type=""
                            inputClassName=""
                            placeholder=""
                            label="Mobile Number"
                        />
                        <Input
                            type="number"
                            inputClassName=""
                            label="Code from SMS"
                            placeholder=""
                        />
                        <div>
                            SMS was sent to your number +1 345 673-56-67 It will
                            be valid for 01:25
                        </div>
                        <Input
                            type="email"
                            label="Email Address"
                            placeholder="youremail@gmail.com"
                            inputClassName=""
                        />
                    </div>
                    <hr className="my-[50px]" />
                    <Button
                        onClick={() => incrementCurrentStep()}
                        variant="medium"
                        children={`Next Step`}
                    />
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
