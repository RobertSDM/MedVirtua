import Link from "next/link";

interface IButton {
    type?: "button" | "reset" | "submit" | undefined;
    text: string;
    extraStyle?: string;
    color?: string;
    link?: string | undefined;
    size?: string;
    handle?: () => void;
}

const Button = ({
    type,
    text,
    handle,
    link,
    color,
    extraStyle,
    size,
}: IButton) => {
    return (
        <>
            {link ? (
                <Link
                    href={link}
                    type={type ?? "button"}
                    onClick={() => handle && handle()}
                    className={`${
                        size ? size : "w-52 h-10"
                    } active:scale-[0.95] inline-block leading-10 ${
                        color ? color : "bg-highlight"
                    } rounded-md text-white font-bold text-center ${extraStyle}`}
                >
                    {text}
                </Link>
            ) : (
                <button
                    type={type ?? "button"}
                    onClick={() => handle && handle()}
                    className={`${
                        size ? size : "w-52 h-10"
                    } active:scale-[0.95] ${
                        color ? color : "bg-highlight"
                    } rounded-md text-white font-bold text-center ${extraStyle}`}
                >
                    {text}
                </button>
            )}
        </>
    );
};

export default Button;
