"use client";
import { useEffect, useState } from "react";

const ErrorBox = ({
    success,
    message,
}: {
    success: boolean | null;
    message: string;
}) => {
    return (
        <>
            <div
                className={`border-2 w-[300px] text-center ${
                    success
                        ? "border-green-400 bg-green-200 text-green-800"
                        : "border-red-500 bg-red-400 text-red-800"
                } rounded-md p-4 absolute top-10 animate-bounce`}
            >
                <h1 className="font-bold">
                    {success ? "Sucesso" : "Ocorreu um erro"}
                </h1>
                <p className="text-sm">
                    {success ? "Registro efetuado com sucesso" : message}
                </p>
            </div>
        </>
    );
};

export default ErrorBox;
