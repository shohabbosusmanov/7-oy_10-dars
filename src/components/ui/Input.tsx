import {
    useState,
    type HTMLAttributes,
    type HTMLInputTypeAttribute,
} from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label: string;
    eyeIcon?: boolean;
    inputClassName: string;
    placeholder: string;
    type: HTMLInputTypeAttribute;
}

const Input = ({
    label,
    eyeIcon,
    inputClassName,
    type,
    ...props
}: InputProps) => {
    const [visible, setVisible] = useState<HTMLInputTypeAttribute>(type);
    const handleTypeChangeInput = () => {
        if (visible === "password") {
            return setVisible("text");
        }
        setVisible("password");
    };
    return (
        <>
            <div className="flex flex-col gap-y-2">
                <label className="input-label text-[#7D8592] font-bold text-[14px]">
                    {label}
                </label>
                <div className="relative">
                    <input
                        type={visible}
                        className={`input rounded-[14px] pl-[18px] pr-0 py-[11px] border border-[#D8E0F0] focus:outline-none focus:border-[#3F8CFF] hover:border-[#3F8CFF] ${inputClassName}`}
                        {...props}
                    />
                    {eyeIcon && (
                        <button
                            type="button"
                            className="absolute cursor-pointer z-50 bg-transparent top-[50%] translate-y-[-50%] right-[16px] flex items-center"
                            onClick={handleTypeChangeInput}
                        >
                            {visible === "password" ? (
                                <IoEyeOutline className="size-5" />
                            ) : (
                                <IoEyeOffOutline className="size-5" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Input;
