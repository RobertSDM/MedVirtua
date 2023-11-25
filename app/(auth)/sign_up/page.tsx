"use client";

import saveRegister from "@/api/register";
import Button from "@/components/Button";
import ErrorBox from "@/components/form/ErrorBox";
import InputDefault from "@/components/form/InputDefault";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState<boolean | null>(null);
    const [renderError, setRenderError] = useState<boolean>(false);
    const router = useRouter();

    const renderErrorComponent = () => {
        setRenderError(true);
        setTimeout(() => {
            setRenderError(false);
        }, 3000);
    };

    const handleSignup = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setSuccess(false);
            renderErrorComponent();
            return;
        }

        saveRegister(email, password)
            .then((res) => {
                setSuccess(res.fetchSuccess);
                renderErrorComponent();
                setTimeout(() => {
                    router.replace("/calendar");
                }, 4000);
            })
            .catch((err) => err);
    };

    return (
        <div className="flex items-center h-screen justify-center gap-x-32">
            {renderError && (
                <ErrorBox success={success} message="Ocorreu um erro" />
            )}
            <section className="flex flex-col justify-center items-center h-screen w-full lg:max-w-md">
                <div className="flex items-center gap-x-1">
                    <span className="font-bold hidden md:block text-xl">
                        Med<span className="text-highlight ">Virtua</span>
                    </span>
                </div>
                <section className="max-w-sm flex flex-col items-center w-full md:max-w-md lg:max-w-lg">
                    <form
                        onSubmit={handleSignup}
                        className="w-full mt-10 gap-y-5 flex flex-col items-center"
                    >
                        <InputDefault
                            trackEmail={{
                                email: email,
                                setEmail: setEmail,
                            }}
                            type="text"
                            text="E-mail"
                        />
                        <InputDefault
                            trackPass={{
                                password: password,
                                setPassword: setPassword,
                            }}
                            type="password"
                            text="Senha"
                        />
                        <InputDefault
                            trackPass={{
                                password: confirmPassword,
                                setPassword: setConfirmPassword,
                            }}
                            type="password"
                            text="Confirme a senha"
                        />
                        <Button
                            text="Cadastrar"
                            type="submit"
                            extraStyle="mt-5"
                        />
                    </form>
                    <p className="text-sm mt-10">
                        Já faz parte da MedVirtua? <br />
                        <Link
                            href={"/login"}
                            className="text-highlight underline underline-offset-2"
                        >
                            Faça o login
                        </Link>
                    </p>
                </section>
            </section>
            <section className=" hidden xl:block">
                <Image
                    src="/images/login_drawing.png"
                    alt="login drawing"
                    width={500}
                    height={1000}
                    className="object-cover "
                />
            </section>
        </div>
    );
};

export default Page;
